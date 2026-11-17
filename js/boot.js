/* --------------------------------------------------------------------------
   boot.js — runs in <head>, before the page is painted.
   Reads config.js and works out the things the stylesheet needs to know up
   front, so nothing flickers: colours, fonts, and whether we are before or
   after the wedding. There is nothing to edit here — see config.js.
   -------------------------------------------------------------------------- */
(function () {
  var cfg = window.WEDDING_CONFIG || {};
  var root = document.documentElement;

  /* Colours and fonts become CSS variables used throughout css/styles.css */
  var c = cfg.colors || {};
  var vars = {
    '--plum': c.plum, '--plum-soft': c.plumSoft, '--berry': c.berry,
    '--cabernet': c.cabernet, '--black-cherry': c.blackCherry, '--rosewood': c.rosewood,
    '--petal': c.petal, '--ivory': c.ivory, '--ink': c.ink, '--green': c.green, '--gold': c.gold, '--wine': c.wine,
    '--text-on-light': c.textOnLight, '--text-on-dark': c.textOnDark,
    '--font-heading': (cfg.fonts || {}).heading,
    '--font-body': (cfg.fonts || {}).body
  };
  Object.keys(vars).forEach(function (k) { if (vars[k]) root.style.setProperty(k, vars[k]); });

  if (cfg.fonts && cfg.fonts.googleFontsUrl) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = cfg.fonts.googleFontsUrl;
    document.head.appendChild(link);
  }

  /* Today's date in the wedding's own time zone, as YYYY-MM-DD */
  function today() {
    try {
      return new Intl.DateTimeFormat('en-CA', {
        timeZone: cfg.TIME_ZONE || undefined, year: 'numeric', month: '2-digit', day: '2-digit'
      }).format(new Date());
    } catch (e) {
      var d = new Date();
      return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
    }
  }

  var after = today() > String(cfg.WEDDING_DATE || '');

  /* Preview either state without waiting: add ?preview=before or ?preview=after to the address */
  var preview = /[?&]preview=(before|after)/.exec(window.location.search);
  if (preview) after = preview[1] === 'after';

  var rsvpOpen = !after && cfg.RSVP_ENABLED !== false;

  root.setAttribute('data-phase', after ? 'after' : 'before');
  root.setAttribute('data-rsvp', rsvpOpen ? 'open' : 'closed');
  root.className += ' is-loading';

  window.WEDDING_STATE = { after: after, rsvpOpen: rsvpOpen };
})();
