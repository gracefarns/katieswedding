/* --------------------------------------------------------------------------
   main.js — page behaviour. Settings are in config.js; nothing to edit here.

   1. Fill in names / date / venue from config.js
   2. RSVP: remove it after the wedding (or when switched off) and send any
      #rsvp link back to the top of the page
   3. Registry cards
   4. RSVP form
   5. Gallery lightbox
   6. The soft fade as the page opens
   -------------------------------------------------------------------------- */
(function () {
  'use strict';

  var cfg = window.WEDDING_CONFIG || {};
  var state = window.WEDDING_STATE || { after: false, rsvpOpen: false };
  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };

  /* ---- 1. Text from config --------------------------------------------- */
  function longDate(iso) {
    var p = String(iso || '').split('-');
    if (p.length !== 3) return '';
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
  }

  var couple = cfg.couple || {};
  var venue = cfg.venue || {};
  var text = {
    first: couple.first, second: couple.second,
    firstFull: couple.firstFull, secondFull: couple.secondFull,
    dateLong: longDate(cfg.WEDDING_DATE),
    venueCeremony: venue.ceremony, venueReception: venue.reception
  };
  $$('[data-fill]').forEach(function (el) {
    var value = text[el.getAttribute('data-fill')];
    if (value) el.textContent = value;
  });
  if (text.firstFull && text.secondFull && text.dateLong) {
    document.title = text.firstFull + ' & ' + text.secondFull + ' · ' + text.dateLong;
  }

  /* Drop the wording that belongs to the other side of the wedding day */
  $$('[data-phase-only]').forEach(function (el) {
    if (el.getAttribute('data-phase-only') !== (state.after ? 'after' : 'before')) el.remove();
  });

  /* ---- 2. RSVP visibility ----------------------------------------------- */
  if (!state.rsvpOpen) {
    $$('[data-rsvp-only]').forEach(function (el) { el.remove(); });

    var sendHome = function () {
      if (window.location.hash.toLowerCase() === '#rsvp') {
        history.replaceState(null, '', window.location.pathname + window.location.search + '#home');
        window.scrollTo(0, 0);
      }
    };
    sendHome();
    window.addEventListener('hashchange', sendHome);
    $$('a[href="#rsvp"]').forEach(function (a) { a.setAttribute('href', '#home'); });
  }

  /* ---- 3. Registry cards ------------------------------------------------- */
  var list = $('#registry-list');
  if (list) {
    (cfg.registries || []).forEach(function (r) {
      var li = document.createElement('li');
      li.className = 'paper registry__card';

      var name = document.createElement('h3');
      name.className = 'registry__name';
      name.textContent = r.name;
      li.appendChild(name);

      if (r.note) {
        var note = document.createElement('p');
        note.className = 'registry__note';
        note.textContent = r.note;
        li.appendChild(note);
      }

      var link = document.createElement('a');
      link.className = 'registry__link';
      link.href = r.url || '#registry';
      if (r.url) { link.target = '_blank'; link.rel = 'noopener'; }
      link.textContent = 'View Registry';
      link.setAttribute('aria-label', 'View registry at ' + r.name);
      li.appendChild(link);

      list.appendChild(li);
    });
  }

  /* ---- 4. RSVP form ------------------------------------------------------- */
  var form = $('#rsvp-form');
  if (form) {
    var message = $('#rsvp-message');
    var say = function (words) { message.textContent = words; };

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var name = String(data.get('name') || '').trim();
      var attending = data.get('attending');
      var note = String(data.get('note') || '').trim();

      if (!name) { say('Please tell us your name.'); form.elements.name.focus(); return; }
      if (!attending) { say('Please let us know whether you can attend.'); return; }

      var thanks = attending.indexOf('accepts') > -1
        ? 'Thank you, ' + name.split(' ')[0] + '. We look forward to celebrating with you.'
        : 'Thank you, ' + name.split(' ')[0] + '. You will be missed, and we are grateful for your reply.';

      if (cfg.RSVP_ENDPOINT) {
        say('Sending…');
        fetch(cfg.RSVP_ENDPOINT, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
          .then(function (response) {
            if (!response.ok) throw new Error('Reply not accepted');
            form.classList.add('is-sent');
            say(thanks);
          })
          .catch(function () {
            say('We’re sorry — your reply could not be sent. Please try again in a moment.');
          });
      } else if (cfg.RSVP_EMAIL) {
        var body = 'Name: ' + name + '\nAttending: ' + attending + (note ? '\n\n' + note : '');
        window.location.href = 'mailto:' + cfg.RSVP_EMAIL +
          '?subject=' + encodeURIComponent('Wedding RSVP — ' + name) +
          '&body=' + encodeURIComponent(body);
        say('Your reply has opened in your email — press send there to finish.');
      } else {
        say('This form is not connected yet. Add RSVP_ENDPOINT or RSVP_EMAIL in config.js to receive replies.');
      }
    });
  }

  /* ---- 5. Gallery lightbox ----------------------------------------------- */
  var box = $('#lightbox');
  var items = $$('.gallery__item');
  if (box && items.length) {
    var img = $('.lightbox__img', box);
    var current = 0;
    var opener = null;

    var show = function (i) {
      current = (i + items.length) % items.length;
      var thumb = $('img', items[current]);
      img.src = items[current].getAttribute('data-full') || thumb.src;
      img.alt = thumb.alt;
    };
    var open = function (i) {
      opener = document.activeElement;
      show(i);
      box.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(function () { box.classList.add('is-open'); });
      $('.lightbox__close', box).focus();
    };
    var close = function () {
      box.classList.remove('is-open');
      document.documentElement.style.overflow = '';
      setTimeout(function () { box.hidden = true; img.src = ''; }, 350);
      if (opener) opener.focus();
    };

    items.forEach(function (item, i) { item.addEventListener('click', function () { open(i); }); });
    $('.lightbox__close', box).addEventListener('click', close);
    $('.lightbox__nav--prev', box).addEventListener('click', function () { show(current - 1); });
    $('.lightbox__nav--next', box).addEventListener('click', function () { show(current + 1); });
    box.addEventListener('click', function (e) { if (e.target === box || e.target.classList.contains('lightbox__figure')) close(); });

    document.addEventListener('keydown', function (e) {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(current - 1);
      else if (e.key === 'ArrowRight') show(current + 1);
      else if (e.key === 'Tab') {                      // keep the keyboard inside the lightbox
        var buttons = $$('button', box);
        var first = buttons[0], last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  /* ---- 6. Fade the page in once the lettering is ready -------------------- */
  var reveal = function () { document.documentElement.classList.remove('is-loading'); };
  var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(function (r) { setTimeout(r, 1500); })]).then(reveal, reveal);
})();
