# Katie & Will — wedding website

A single-page site: Home, Our Story, Wedding Day (before the wedding only), Gallery, Registry, RSVP (before the wedding only) and a footer.
Plain HTML, CSS and JavaScript — no build step. Open `index.html`, or host the folder anywhere
(GitHub Pages works as-is).

## The one file to edit: `config.js`

| Setting | What it does |
| --- | --- |
| `WEDDING_DATE` | `2027-02-20`. Through the end of that day (Utah time) the home page reads "are getting married" and the RSVP shows. From the next morning it reads "were married on February 20, 2027", and the Wedding Day and RSVP sections and their menu links disappear; any `#schedule` or `#rsvp` link lands on the home page. |
| `RSVP_ENABLED` | The manual switch. `false` hides the RSVP immediately. |
| `RSVP_ENDPOINT` / `RSVP_EMAIL` | Where replies go — **one of these must be filled in before the form can deliver anything.** Use a form service address (Formspree, Basin, a Google Apps Script…) or an email address. |
| `couple`, `venue` | Names and place, used everywhere they appear. |
| `registries` | The registry cards: name, short note, link. |
| `schedule` | The Wedding Day times: time, title, place, note. **The times there now are placeholders.** |
| `colors`, `fonts` | The palette and typefaces. Text on light backgrounds is plum (`plum`, `plumSoft`, `textOnLight`); the gallery is `berry`. Every text colour passes WCAG AA contrast — check any new colour before changing it. |

To preview either state without waiting, add `?preview=after` or `?preview=before` to the address.

## Replacing images

Keep the file names and drop new files into the same folders.

```
images/
  photos/     story-01…04 and gallery-01…06 (4:5 portrait) — generated PLACEHOLDERS, replace with your own
  florals/    hero-corner-top-left / -bottom-right (around the home card) and accent-… (above each heading)
  lettering/  katie-and-will.svg — the names, traced from the save-the-date lettering (not a font)
  lace/       lace-drape (hero) and lace-trim (the hem above the gallery and footer)
  textures/   plum lace (Wedding Day), deckled paper, ivory paper, blush satin (hero), burgundy satin (ribbon), embossed tulips in
              blush (gallery) and burgundy (footer), blush damask (registry)
  seal/       the gold K&W wax seal and the browser-tab icon
inspo/        the original reference images
```

The flowers and photos were generated in Canva to match the references in `inspo/`; the flowers are
cut-outs with transparent backgrounds (WebP). The lace and fabric textures were made from the references.

The gallery has 12 empty "Photo to come" frames after the six photos. To add a photo, replace one
`<li class="gallery__slot" …>` line in the Gallery section of `index.html` with a copy of a photo
`<li>…</li>` line, pointing at your new file (e.g. `images/photos/gallery-07.jpg`).
Story text and dates are in the Our Story section of `index.html`.

## Files

```
index.html       the page and its wording
config.js        settings (see above)
css/styles.css   layout and styling
js/boot.js       applies config.js before the page paints
js/main.js       date wording, RSVP switch, registry cards, form, lightbox
```
