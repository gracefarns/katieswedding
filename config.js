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
    ceremony:  'Draper Temple',      // shown first
    reception: 'Highland Gardens'    // shown second
  },

  /* ---- Registry -----------------------------------------------------------
     Add, remove or reorder freely. "note" is optional. Replace each url
     with the link to your own registry page.                                */
  registries: [
    { name: 'Amazon',         note: 'Home & everyday',      url: 'https://www.amazon.com/' },
    { name: 'Target',         note: 'Kitchen & linens',     url: 'https://www.target.com/' },
    { name: 'Crate & Barrel', note: 'Table & entertaining', url: 'https://www.crateandbarrel.com/' }
  ],

  /* ---- Wedding-day schedule ------------------------------------------------
     Shown in the "Wedding Day" section (and its menu tab) up to and including
     the wedding day; both disappear on their own the morning after, along
     with the RSVP. Add, remove or reorder freely. "place" and "note" are
     optional. These times are PLACEHOLDERS – replace them with your own.   */
  schedule: [
    { time: '10:30 AM', title: 'Temple Sealing',         place: 'Draper Temple',    note: 'For family and invited guests' },
    { time: '12:00 PM', title: 'Photographs',            place: 'Draper Temple grounds', note: 'Join us outside the temple to greet the couple' },
    { time: '6:00 PM',  title: 'Reception',              place: 'Highland Gardens', note: 'Dinner, cake and dancing' },
    { time: '7:30 PM',  title: 'First Dance & Cake',     place: 'Highland Gardens' },
    { time: '9:00 PM',  title: 'Send-off',               place: 'Highland Gardens', note: 'Help us say goodnight' }
  ],

  /* ---- Colours ------------------------------------------------------------ */
  colors: {
    plum:        '#5A2145',   // Plum (from inspo/plumcolor.jpg) – headings on light, buttons, the lettering, menu
    plumSoft:    '#7A3A60',   // Soft plum – small labels and links on light backgrounds (passes WCAG AA on blush)
    berry:       '#8A2B57',   // Berry pink – the gallery background
    cabernet:    '#52171C',   // Cabernet Velvet – the satin ribbon
    blackCherry: '#240C0E',   // Black Cherry – the deepest shadows in the footer
    rosewood:    '#985B5D',   // Dusty Rosewood – hairlines and decorative lines only (too light for text)
    petal:       '#EBD6D5',   // Soft Petal – hero satin, light section backgrounds, hover states
    ivory:       '#F7F1EA',   // Ivory paper and lace
    ink:         '#2E1F2A',   // Blackberry Ink – small details only
    green:       '#8C9A6E',   // Amaranth green – a single leaf-coloured touch
    wine:        '#56192B',   // Wine – the footer: a pinker, purpler burgundy (from the save-the-date)
    gold:        '#B08D57',   // Antique gold – thin rules, small ornaments
    textOnLight: '#4A1A35',   // deep plum – body text on light backgrounds
    textOnDark:  '#F3E9E2'
  },

  /* ---- The names in script -------------------------------------------------
     "Katie & Will" on the home card is not a font: it is the hand-lettering
     from the save-the-date, saved as images/lettering/katie-and-will.svg and
     tinted with the plum colour above. Changing the names in `couple`
     does not redraw it; replace that file to change the lettering.          */

  /* ---- Fonts --------------------------------------------------------------
     To change a typeface, change its name here AND in googleFontsUrl
     (fonts.google.com gives you the address).                               */
  fonts: {
    heading: "'Cormorant Garamond', 'Times New Roman', serif",
    body:    "'EB Garamond', 'Cormorant Garamond', Georgia, serif",
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap'
  }
};
