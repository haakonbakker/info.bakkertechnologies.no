---
name: cryptolandia-marketing-page
overview: Replace the generic Cryptolandia markdown page with a modern, sleek marketing landing page using your provided screenshots and the App Store listing copy, and refresh the global site layout so the whole site matches the new visual style.
todos:
  - id: refresh-global-layout
    content: Redesign `_layouts/default.html` CSS for a modern, sleek global style while keeping existing header/footer links intact.
    status: completed
  - id: rewrite-cryptolandia-landing
    content: "Replace `cryptolandia/index.md` with a full marketing landing page: hero + features + screenshots + Pro + privacy/support links + App Store CTA."
    status: completed
  - id: verify-links-responsiveness
    content: Verify internal links use `relative_url`, external App Store link is correct, and the layout is responsive on mobile widths.
    status: completed
---

# Cryptolandia marketing page + site refresh

## What I’ll change

- Update the global layout at [`_layouts/default.html`](/Users/haakon.hoel.bakker/projects/info.bakkertechnologies.no/_layouts/default.html) to a modern, sleek style inspired by Nexo/Crypto Pro:
- Dark/neutral gradient background, higher-contrast typography, improved spacing.
- Responsive container widths (wider than 800px for marketing sections).
- Modern buttons, link styles, and subtle shadows/borders.
- Preserve the existing header/footer structure and links so navigation doesn’t break.

- Replace the generic content in [`cryptolandia/index.md`](/Users/haakon.hoel.bakker/projects/info.bakkertechnologies.no/cryptolandia/index.md) with a marketing landing page (still using `layout: default`), including:
- **Hero**: “Cryptolandia — Track crypto prices & news” + short value prop.
- **Primary CTA**: “Download on the App Store” linking to `https://apps.apple.com/us/app/cryptolandia-crypto-ticker/id6756105265` (use a styled button).
- **Screenshot strip / feature highlights** using your images:
- `cryptolandia/images/very_very_easy.jpeg`
- `cryptolandia/images/easy_to_follow.jpeg`
- `cryptolandia/images/multiple_views.jpeg`
- `cryptolandia/images/follow_the_news.jpeg`
- **Feature sections** based on the App Store description:
- Live prices, interactive charts, multi-currency support, news reader, Face ID/Touch ID.
- Light/Dark mode mention.
- **Pro section** (since the listing mentions subscriptions) with clear, non-pushy copy.
- **Privacy section** prominently stating “Data Not Collected” and linking to [`cryptolandia/privacy.md`](/Users/haakon.hoel.bakker/projects/info.bakkertechnologies.no/cryptolandia/privacy.md).
- **Support section** linking to [`support.md`](/Users/haakon.hoel.bakker/projects/info.bakkertechnologies.no/support.md).

- Ensure links work with your Jekyll `baseurl` (`/info.bakkertechnologies.no`) by using `relative_url` for internal links and a direct external link for the App Store.

## Implementation approach (high-level)

- Keep dependencies at zero (no JS frameworks). Use semantic HTML inside markdown where needed.
- Use layout-level CSS tokens (CSS variables) for colors/spacing so pages are consistent.
- Make screenshots responsive with a simple grid that collapses nicely on mobile.
- Keep the legal pages (`privacy.md`, `terms.md`) readable (good line-length, strong contrast).

## Content sources I’ll incorporate

- App Store listing: positioning + feature bullets + privacy “Data Not Collected” + optional Face ID/Touch ID.
- Your existing privacy/terms pages for consistent policy wording/links.

## Acceptance checks

- `/cryptolandia/` reads as a polished landing page with clear sections and a strong App Store CTA.
- Screenshots are displayed, sized correctly, and responsive.
- Global site pages still render correctly with the refreshed layout.