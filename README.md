# Katie & William — wedding website

A single-page site: Home, Our Story, Gallery, Registry, RSVP (before the wedding only) and a footer.
Plain HTML, CSS and JavaScript — no build step. Open `index.html`, or host the folder anywhere
(GitHub Pages works as-is).

## The one file to edit: `config.js`

| Setting | What it does |
| --- | --- |
| `WEDDING_DATE` | `2027-02-20`. Through the end of that day (Utah time) the home page reads "are getting married" and the RSVP shows. From the next morning it reads "were married on February 20, 2027", and the RSVP section and menu link disappear; any `#rsvp` link lands on the home page. |
| `RSVP_ENABLED` | The manual switch. `false` hides the RSVP immediately. |
| `RSVP_ENDPOINT` / `RSVP_EMAIL` | Where replies go — **one of these must be filled in before the form can deliver anything.** Use a form service address (Formspree, Basin, a Google Apps Script…) or an email address. |
| `couple`, `venue` | Names and place, used everywhere they appear. |
| `registries` | The registry cards: name, short note, link. |
| `colors`, `fonts` | The palette and typefaces. |

To preview either state without waiting, add `?preview=after` or `?preview=before` to the address.

## Replacing images

Keep the file names and drop new files into the same folders.

```
images/
  photos/     story-01…04 and gallery-01…06 (4:5 portrait) — generated PLACEHOLDERS, replace with your own
  florals/    hero-corner-top-left / -bottom-right (around the home card) and accent-… (above each heading)
  lace/       lace-drape (hero) and lace-trim (the hem above the gallery and footer)
  textures/   deckled paper, ivory paper, burgundy and blush satin, embossed tulips, blush damask
  seal/       the gold K&W wax seal and the browser-tab icon
inspo/        the original reference images
```

The flowers and photos were generated in Canva to match the references in `inspo/`; the flowers are
cut-outs with transparent backgrounds (WebP). The lace and fabric textures were made from the references.

To add a gallery photo, copy one `<li>…</li>` line in the Gallery section of `index.html`.
Story text and dates are in the Our Story section of `index.html`.

## Files

```
index.html       the page and its wording
config.js        settings (see above)
css/styles.css   layout and styling
js/boot.js       applies config.js before the page paints
js/main.js       date wording, RSVP switch, registry cards, form, lightbox
```
