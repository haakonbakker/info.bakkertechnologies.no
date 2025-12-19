---
layout: default
title: Cryptolandia
---

<style>
  /* Page-scoped marketing layout helpers */
  .cl-hero {
    padding: 26px 0 6px;
  }
  .cl-hero__kicker {
    color: rgba(229, 231, 235, 0.68);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.82rem;
    margin-bottom: 10px;
  }
  .cl-hero .cl-hero__title {
    font-size: clamp(2.1rem, 1.6rem + 2.2vw, 3.2rem);
    line-height: 1.08;
    margin: 0 0 14px;
  }
  .cl-hero__subtitle {
    font-size: 1.08rem;
    color: rgba(229, 231, 235, 0.78);
    max-width: 58ch;
    margin: 0 0 18px;
  }
  .cl-cta {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    align-items: center;
    margin: 10px 0 8px;
  }
  .cl-meta {
    color: rgba(229, 231, 235, 0.62);
    font-size: 0.95rem;
    margin-top: 10px;
  }

  .cl-section {
    margin-top: 24px;
    padding-top: 6px;
  }
  .cl-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 14px;
    margin-top: 14px;
  }
  .cl-card {
    grid-column: span 6;
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 16px;
  }
  .cl-card h3 {
    margin-top: 0;
  }
  .cl-card p {
    margin-bottom: 0;
  }

  .cl-screens {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 14px;
    margin-top: 14px;
  }
  .cl-shot {
    grid-column: span 6;
    border-radius: 16px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.03);
  }
  .cl-shot img {
    width: 100%;
    height: auto;
    display: block;
  }
  .cl-shot figcaption {
    padding: 10px 12px 12px;
    color: rgba(229, 231, 235, 0.66);
    font-size: 0.95rem;
  }
  .cl-pillrow {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
  }
  .cl-pill {
    display: inline-flex;
    align-items: center;
    padding: 6px 10px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(255, 255, 255, 0.04);
    color: rgba(229, 231, 235, 0.78);
    font-size: 0.92rem;
    white-space: nowrap;
  }

  .cl-split {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 16px;
    margin-top: 14px;
  }
  .cl-split__main {
    grid-column: span 8;
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 16px;
  }
  .cl-split__side {
    grid-column: span 4;
    border: 1px solid rgba(255, 255, 255, 0.10);
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 16px;
  }
  .cl-split__side p {
    margin-bottom: 10px;
  }

  @media (max-width: 860px) {
    .cl-card { grid-column: span 12; }
    .cl-shot { grid-column: span 12; }
    .cl-split__main { grid-column: span 12; }
    .cl-split__side { grid-column: span 12; }
  }
</style>

<div class="cl-hero">
  <div class="cl-hero__kicker">iPhone & iPad</div>
  <h1 class="cl-hero__title">Cryptolandia — Track crypto prices & news</h1>
  <p class="cl-hero__subtitle">
    Real-time prices, smooth charts, and a clean news reader — designed to feel fast, modern, and effortless.
    Whether you’re actively trading or just staying curious, Cryptolandia keeps the market in your pocket.
  </p>

  <div class="cl-cta">
    <a class="button button--primary" href="https://apps.apple.com/us/app/cryptolandia-crypto-ticker/id6756105265" target="_blank" rel="noopener noreferrer">
      Download on the App Store
    </a>
    <a class="button" href="{{ '/cryptolandia/privacy' | relative_url }}">
      Privacy: Data Not Collected
    </a>
  </div>

  <div class="cl-pillrow" aria-label="Highlights">
    <span class="cl-pill">Live prices</span>
    <span class="cl-pill">Interactive charts</span>
    <span class="cl-pill">Multi-source news</span>
    <span class="cl-pill">Face ID / Touch ID</span>
    <span class="cl-pill">Light & Dark mode</span>
  </div>

  <p class="cl-meta">
    Built for iOS • Clean SwiftUI design • Optional subscription for Pro features
  </p>
</div>

<hr>

<div class="cl-section">
  <h2>Beautiful by default. Powerful when you need it.</h2>
  <div class="cl-grid">
    <div class="cl-card">
      <h3>Live prices, always fresh</h3>
      <p>Real-time updates, color-coded 24h changes, and market cap at a glance. Pull to refresh when you feel like it.</p>
    </div>
    <div class="cl-card">
      <h3>Smooth, interactive charts</h3>
      <p>Explore price history with intuitive scrubbing and clear time ranges. Highs, lows, and volume—kept simple.</p>
    </div>
    <div class="cl-card">
      <h3>Stay in the loop</h3>
      <p>A fast news experience with images and a compact layout so you can scan headlines and read inside the app.</p>
    </div>
    <div class="cl-card">
      <h3>Private & secure</h3>
      <p>No trackers. No ads. No data collection. Optional Face ID / Touch ID for quick, on-device protection.</p>
    </div>
  </div>
</div>

<div class="cl-section">
  <h2>See it in action</h2>
  <div class="cl-screens">
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/very_very_easy.jpeg' | relative_url }}" alt="Cryptolandia market overview with live prices and clean list design">
      <figcaption>Live prices with a clean, compact market view.</figcaption>
    </figure>
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/multiple_views.jpeg' | relative_url }}" alt="Multiple views of cryptocurrency details, charts and stats in Cryptolandia">
      <figcaption>Multiple views for charts, stats, and details.</figcaption>
    </figure>
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/easy_to_follow.jpeg' | relative_url }}" alt="Cryptolandia chart view showing easy-to-follow price movement over time">
      <figcaption>Charts that are easy to follow and satisfying to explore.</figcaption>
    </figure>
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/follow_the_news.jpeg' | relative_url }}" alt="Cryptolandia news feed with article thumbnails and headlines">
      <figcaption>A modern news reader with thumbnails and fast scanning.</figcaption>
    </figure>
  </div>
</div>

<div class="cl-section">
  <h2>Pick your currency</h2>
  <p>
    Switch anytime and everything updates instantly. Supported currencies include USD, EUR, GBP, JPY, CAD, AUD, CHF, CNY, SEK, NOK, and DKK.
  </p>
</div>

<div class="cl-section">
  <h2>Cryptolandia Pro</h2>
  <div class="cl-split">
    <div class="cl-split__main">
      <p>
        Upgrade to Cryptolandia Pro to unlock premium features like enhanced list styles and additional watchlists.
        Subscriptions are optional — the app is designed to be great even without upgrading.
      </p>
      <ul>
        <li>More watchlists and more ways to organize favorites</li>
        <li>Enhanced list styles for denser browsing</li>
        <li>Premium experience improvements as the app evolves</li>
      </ul>
      <p class="cl-meta">
        Subscription options and availability are shown in the app / App Store.
      </p>
    </div>
    <div class="cl-split__side">
      <h3>Get started</h3>
      <p>Download Cryptolandia and start tracking in seconds.</p>
      <p style="margin: 0;">
        <a class="button button--primary" href="https://apps.apple.com/us/app/cryptolandia-crypto-ticker/id6756105265" target="_blank" rel="noopener noreferrer">
          Download on the App Store
        </a>
      </p>
    </div>
  </div>
</div>

<div class="cl-section">
  <h2>Privacy, terms & support</h2>
  <p>
    Cryptolandia is built with privacy in mind. In short: <strong>no data collected</strong>.
    For full details, see:
  </p>
  <ul>
    <li><a href="{{ '/cryptolandia/privacy' | relative_url }}">Privacy Policy</a></li>
    <li><a href="{{ '/cryptolandia/terms' | relative_url }}">Terms of Service</a></li>
    <li><a href="{{ '/support' | relative_url }}">Support & FAQ</a></li>
  </ul>
</div>
