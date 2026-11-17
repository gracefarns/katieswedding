/* ==========================================================================
   KATIE & WILLIAM — SITE SETTINGS
   --------------------------------------------------------------------------
   Everything you are likely to change lives in this one file:
   the wedding date, the RSVP switch, names, registry links, colours, fonts.
   Save the file and refresh the page to see a change.
   ========================================================================== */

window.WEDDING_CONFIG = {

  /* ---- The date ---------------------------------------------------------
     Through the end of this day the site reads "are getting married" and
     shows the RSVP. From the next morning it reads "were married on …" and
     the RSVP section and its menu link disappear on their own.            */
  WEDDING_DATE: '2027-02-20',          // YYYY-MM-DD
  TIME_ZONE: 'America/Denver',         // the day ends at midnight in Utah

  /* ---- RSVP -------------------------------------------------------------
     RSVP_ENABLED is the manual switch. Set it to false to hide the RSVP
     immediately, whatever the date. (It can never show after the wedding.) */
  RSVP_ENABLED: true,

  /* Where replies are sent. Fill in ONE of these:
     RSVP_ENDPOINT – the address a form service gives you
                     (Formspree, Basin, Getform, a Google Apps Script …)
     RSVP_EMAIL    – or an email address; the guest's own mail app opens
                     with their reply already written.                      */
  RSVP_ENDPOINT: '',
  RSVP_EMAIL: '',

  /* ---- Names and place --------------------------------------------------- */
  couple: {
    first: 'Katie',
    second: 'Will',
    firstFull: 'Katie Farnsworth',
    secondFull: 'Will Hartman'
  },
  venue: {
    name: 'Highland Gardens',
    city: 'Highland, Utah'
  },

  /* ---- Registry -----------------------------------------------------------
     Add, remove or reorder freely. "note" is optional. Replace each url
     with the link to your own registry page.                                */
  registries: [
    { name: 'Amazon',         note: 'Home & everyday',      url: 'https://www.amazon.com/' },
    { name: 'Target',         note: 'Kitchen & linens',     url: 'https://www.target.com/' },
    { name: 'Crate & Barrel', note: 'Table & entertaining', url: 'https://www.crateandbarrel.com/' }
  ],

  /* ---- Colours ------------------------------------------------------------ */
  colors: {
    cabernet:    '#52171C',   // Cabernet Velvet – headings on light, buttons, monogram
    blackCherry: '#240C0E',   // Black Cherry – the deepest shadows in the footer
    rosewood:    '#985B5D',   // Dusty Rosewood – script accents, small labels, hairlines
    petal:       '#EBD6D5',   // Soft Petal – hero satin, light section backgrounds, hover states
    ivory:       '#F7F1EA',   // Ivory paper and lace
    ink:         '#2E1F2A',   // Blackberry Ink – small details only
    green:       '#8C9A6E',   // Amaranth green – a single leaf-coloured touch
    gold:        '#B08D57',   // Antique gold – thin rules, small ornaments
    textOnLight: '#361319',
    textOnDark:  '#F3E9E2'
  },

  /* ---- Fonts --------------------------------------------------------------
     To change a typeface, change its name here AND in googleFontsUrl
     (fonts.google.com gives you the address).                               */
  fonts: {
    heading: "'Cormorant Garamond', 'Times New Roman', serif",
    script:  "'Pinyon Script', 'Snell Roundhand', cursive",
    body:    "'EB Garamond', 'Cormorant Garamond', Georgia, serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Pinyon+Script&display=swap'
  }
};
