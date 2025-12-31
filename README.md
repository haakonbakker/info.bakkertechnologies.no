# info.bakkertechnologies.no

Information about Bakker Technologies.

## Analytics (optional)

This site supports **Google Analytics 4 (GA4)** via a small include that is loaded **only in production**.

- **Configure**: set your GA4 Measurement ID in `_config.yml`:
  - `analytics.google_measurement_id: "G-XXXXXXX"`
- **Per-page opt-out**: add this to a page’s front matter:
  - `no_analytics: true`

Notes:
- **Public repo safety**: GA Measurement IDs are not secrets (unlike API keys), so they’re safe to commit.
- **Privacy / consent**: depending on where your visitors are located (e.g. EU/EEA), you may need a consent banner and a website privacy/cookie disclosure before loading GA.
