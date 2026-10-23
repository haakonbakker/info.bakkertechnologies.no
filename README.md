# bakkertechnologies.no

Website for Bakker Technologies — an independent iOS studio and technical consultancy.
Jekyll on GitHub Pages; no build step beyond `bundle exec jekyll serve` (or `./start-local.sh`).

## Structure

| Path | What it holds |
| --- | --- |
| `assets/css/main.css` | The whole design system: tokens, components, page layouts, motion |
| `assets/js/site.js` | Progressive enhancement only (header hairline, mobile menu, reveal, copy email) |
| `_data/products.yml` | **Single source of truth for apps** — status, App Store URL, screenshots, summaries (EN/NO) |
| `_data/product_pages/<id>.yml` | Copy for each product landing page (chapters, details, pricing, privacy) |
| `_data/copy/*.yml` | Copy for home, work, services, about, contact — `en` and `no` side by side |
| `_data/i18n.yml` | Interface strings and per-language URLs |
| `_includes/pages/*.html` | One template per page, rendered for both languages |
| `_includes/device.html` | CSS iPhone frame around a real screenshot |
| `_layouts/product.html` | Product landing page |
| `_layouts/legacy.html` | Archive wrapper for retired Cryptolandia pages |

English pages live at the root, Norwegian under `/no/`. Each page sets `alternate_url`
so the language switch and `hreflang` tags point at its counterpart.

## Adding an app

1. Export screenshots (1320 × 2868) and convert them:
   `cwebp -q 84 -resize 400 0 in.png -o assets/img/<id>/<name>-400.webp` (and `-800`).
   Icons: `icon-128.webp` and `icon-256.webp`.
2. Add an entry to `_data/products.yml` (`status: live`), with `screens`, `hero_screens` and `work_screens`.
3. Add `_data/product_pages/<id>.yml` with `en` and `no` copy.
4. Create `<id>/index.html` and `no/<id>/index.html` with `layout: product` and `product: <id>`.

The Work page, footer and structured data pick the app up automatically.
To retire an app, set `status: archived` — it moves to the Work page archive.

## Design notes

- Type: Inter 4 (OFL), self-hosted and subset to Latin (`assets/fonts/inter-latin.woff2`); the
  optical-size axis gives display cuts at headline sizes. Mono labels use the system UI monospace.
- Colour: light canvas `#F6F7F9`, ink `#0E1014`, accent `#1A56F0`; dark sections `#0D1117`.
  Product accents come from each app (`color`, `tint` in `products.yml`).
- Motion: CSS only, opt-in via the `js` class, disabled under `prefers-reduced-motion`.
- No cookies, analytics or third-party requests — see `/privacy/`.
