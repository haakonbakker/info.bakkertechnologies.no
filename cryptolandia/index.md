---
layout: default
title: "Cryptolandia – Crypto Tracker App for iPhone & iPad"
description: "Cryptolandia is a privacy-first iOS crypto tracker app with live cryptocurrency prices, interactive charts, and curated crypto news—built for iPhone and iPad."
image: "/cryptolandia/images/logo.png"
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Cryptolandia",
  "operatingSystem": "iOS",
  "applicationCategory": "FinanceApplication",
  "description": "Privacy-first iOS crypto tracker app with live cryptocurrency prices, interactive charts, and curated crypto news.",
  "url": "{{ '/cryptolandia/' | absolute_url }}",
  "downloadUrl": "https://apps.apple.com/us/app/cryptolandia-crypto-ticker/id6756105265",
  "publisher": {
    "@type": "Organization",
    "name": "Bakker Technologies",
    "url": "{{ '/' | absolute_url }}"
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
    "category": "Free"
  },
  "privacyPolicy": "{{ '/cryptolandia/privacy' | absolute_url }}",
  "termsOfService": "{{ '/cryptolandia/terms' | absolute_url }}"
}
</script>

<style>
  /* Modern Apple-inspired marketing layout */
  .cl-hero {
    padding: 80px 0 60px;
    text-align: center;
  }
  
  .cl-hero__logo {
    width: 128px;
    height: 128px;
    margin: 0 auto 24px;
    border-radius: 22.5%;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
  }
  
  .cl-hero__logo:hover {
    transform: scale(1.05);
  }
  
  .cl-hero__logo img {
    width: 100%;
    height: 100%;
    display: block;
  }
  
  .cl-hero__kicker {
    color: rgba(229, 231, 235, 0.6);
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    font-size: 0.875rem;
    margin-bottom: 16px;
  }
  
  .cl-hero .cl-hero__title {
    font-size: clamp(2.5rem, 4vw + 1rem, 4.5rem);
    font-weight: 700;
    line-height: 1.05;
    margin: 0 auto 24px;
    letter-spacing: -0.02em;
    max-width: 18ch;
  }
  
  .cl-hero__subtitle {
    font-size: clamp(1.125rem, 2vw, 1.5rem);
    line-height: 1.5;
    color: rgba(229, 231, 235, 0.7);
    max-width: 52ch;
    margin: 0 auto 32px;
    font-weight: 400;
  }
  
  .cl-cta {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin: 40px 0 32px;
  }
  
  .cl-cta .button {
    padding: 14px 28px;
    font-size: 1.0625rem;
    font-weight: 500;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .cl-cta .button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  .cl-appstore-badge {
    display: inline-block;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cl-appstore-badge:hover {
    transform: translateY(-2px);
    filter: brightness(1.1);
  }
  
  .cl-appstore-badge img {
    height: 54px;
    width: auto;
    display: block;
  }
  
  .cl-meta {
    color: rgba(229, 231, 235, 0.5);
    font-size: 1rem;
    margin-top: 24px;
    font-weight: 400;
  }

  .cl-pillrow {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 24px;
    justify-content: center;
  }
  
  .cl-pill {
    display: inline-flex;
    align-items: center;
    padding: 10px 18px;
    border-radius: 999px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(10px);
    color: rgba(229, 231, 235, 0.85);
    font-size: 0.9375rem;
    font-weight: 500;
    white-space: nowrap;
    transition: all 0.3s ease;
    cursor: help;
    position: relative;
  }
  
  .cl-pill:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.25);
  }
  
  /* Enhanced tooltip styling */
  .cl-pill[title]:hover::after {
    content: attr(title);
    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    color: #fff;
    padding: 10px 16px;
    border-radius: 8px;
    font-size: 0.8125rem;
    font-weight: 400;
    white-space: normal;
    max-width: min(480px, calc(100vw - 32px));
    width: max-content;
    text-align: center;
    z-index: 10000;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    animation: tooltipFadeIn 0.2s ease;
    line-height: 1.4;
  }
  
  /* First pill - align tooltip to the left */
  .cl-pill:first-child[title]:hover::after {
    left: 0;
    transform: translateX(0);
  }
  
  .cl-pill:first-child[title]:hover::before {
    left: 24px;
    transform: translateX(0);
  }
  
  /* Last pill - align tooltip to the right */
  .cl-pill:last-child[title]:hover::after {
    left: auto;
    right: 0;
    transform: translateX(0);
  }
  
  .cl-pill:last-child[title]:hover::before {
    left: auto;
    right: 24px;
    transform: translateX(0);
  }
  
  .cl-pill[title]:hover::before {
    content: '';
    position: absolute;
    bottom: calc(100% + 4px);
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.95);
    z-index: 10000;
    pointer-events: none;
    animation: tooltipFadeIn 0.2s ease;
  }
  
  @keyframes tooltipFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .cl-section {
    margin-top: 80px;
    padding-top: 0;
  }
  
  .cl-section h2 {
    font-size: clamp(2rem, 3vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 48px;
    text-align: center;
  }
  
  .cl-grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    margin-top: 48px;
  }
  
  .cl-card {
    grid-column: span 6;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 32px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cl-card:hover {
    border-color: rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.06);
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  .cl-card h3 {
    margin-top: 0;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 12px;
    letter-spacing: -0.01em;
  }
  
  .cl-card p {
    margin-bottom: 0;
    color: rgba(229, 231, 235, 0.7);
    font-size: 1.0625rem;
    line-height: 1.6;
  }

  .cl-screens {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    margin-top: 48px;
  }
  
  .cl-shot {
    grid-column: span 6;
    border-radius: 24px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.02);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .cl-shot:hover {
    transform: scale(1.02);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  }
  
  .cl-shot img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .cl-shot figcaption {
    padding: 16px 20px 20px;
    color: rgba(229, 231, 235, 0.65);
    font-size: 1rem;
    line-height: 1.5;
  }

  .cl-split {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    margin-top: 48px;
  }
  
  .cl-split__main {
    grid-column: span 8;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 40px;
  }
  
  .cl-split__main p {
    font-size: 1.0625rem;
    line-height: 1.7;
    color: rgba(229, 231, 235, 0.75);
  }
  
  .cl-split__main ul {
    margin: 24px 0;
    padding-left: 20px;
  }
  
  .cl-split__main li {
    margin-bottom: 12px;
    font-size: 1.0625rem;
    line-height: 1.6;
    color: rgba(229, 231, 235, 0.75);
  }
  
  .cl-split__side {
    grid-column: span 4;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border-radius: 24px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  
  .cl-split__side h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 16px;
    letter-spacing: -0.01em;
  }
  
  .cl-split__side p {
    margin-bottom: 20px;
    font-size: 1.0625rem;
    line-height: 1.6;
    color: rgba(229, 231, 235, 0.7);
  }
  
  hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    margin: 80px 0;
  }

  @media (max-width: 860px) {
    .cl-hero {
      padding: 60px 0 80px;
    }
    .cl-section {
      margin-top: 80px;
    }
    .cl-card { 
      grid-column: span 12;
      padding: 24px;
    }
    .cl-shot { grid-column: span 12; }
    .cl-split__main { 
      grid-column: span 12;
      padding: 28px;
    }
    .cl-split__side { 
      grid-column: span 12;
      padding: 28px;
    }
  }
</style>

<div class="cl-hero">
  <div class="cl-hero__logo">
    <img src="{{ '/cryptolandia/images/logo.png' | relative_url }}" alt="Cryptolandia App Icon">
  </div>
  <div class="cl-hero__kicker">iPhone & iPad</div>
  <h1 class="cl-hero__title">Cryptolandia: a crypto tracker app for iPhone & iPad.</h1>
  <p class="cl-hero__subtitle">
    Real-time prices, smooth charts, and curated news—all in a clean, modern design. Whether you're actively trading or staying curious, Cryptolandia keeps the market at your fingertips.
  </p>

  <div class="cl-cta">
    <a class="cl-appstore-badge" href="https://apps.apple.com/us/app/cryptolandia-crypto-ticker/id6756105265" target="_blank" rel="noopener noreferrer">
      <img src="{{ '/cryptolandia/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' | relative_url }}" alt="Download on the App Store">
    </a>
  </div>

  <div class="cl-pillrow" aria-label="Highlights">
    <span class="cl-pill" title="Real-time cryptocurrency prices that update automatically, with color-coded changes to track market movements instantly">Live prices</span>
    <span class="cl-pill" title="Smooth, responsive charts with pinch-to-zoom and multiple timeframes to explore price history effortlessly">Interactive charts</span>
    <span class="cl-pill" title="Curated cryptocurrency news from multiple trusted sources, all in one clean feed">Multi-source news</span>
    <span class="cl-pill" title="Quick and secure access with biometric authentication—your privacy stays protected">Face ID / Touch ID</span>
    <span class="cl-pill" title="Seamlessly switch between light and dark themes to match your preference">Light & Dark mode</span>
  </div>

  <p class="cl-meta">
    Built for iOS · SwiftUI design · No data collection
  </p>
</div>

<hr>

<div class="cl-section">
  <h2>Beautifully simple. Powerfully complete.</h2>
  <div class="cl-grid">
    <div class="cl-card">
      <h3>Live prices, always fresh</h3>
      <p>Real-time updates with color-coded changes and market cap at a glance. Stay on top of the market, effortlessly.</p>
    </div>
    <div class="cl-card">
      <h3>Smooth, interactive charts</h3>
      <p>Explore price history with intuitive interactions and clear time ranges. Complex data, beautifully simplified.</p>
    </div>
    <div class="cl-card">
      <h3>Stay in the loop</h3>
      <p>Curated news from multiple sources with a clean, compact layout. Scan headlines and read without leaving the app.</p>
    </div>
    <div class="cl-card">
      <h3>Private & secure</h3>
      <p>No trackers. No ads. No data collection. Optional biometric lock for quick, secure access.</p>
    </div>
    <div class="cl-card">
      <h3>Your currency, your choice</h3>
      <p>Switch between 11 major currencies anytime. Everything updates instantly—from USD to EUR, GBP, JPY, CAD, AUD, CHF, CNY, SEK, NOK, and DKK.</p>
    </div>
    <div class="cl-card">
      <h3>Customize your view</h3>
      <p>Choose from multiple list styles to match your preference: simple, compact, enhanced, or showcase. Display exactly the information you want, exactly how you want it.</p>
    </div>
  </div>
</div>

<div class="cl-section">
  <h2>Experience Cryptolandia</h2>
  <div class="cl-screens">
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/very_very_easy.jpeg' | relative_url }}" alt="Cryptolandia market overview with live prices and clean list design">
      <figcaption>Clean, compact design keeps everything at your fingertips.</figcaption>
    </figure>
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/multiple_views.jpeg' | relative_url }}" alt="Multiple views of cryptocurrency details, charts and stats in Cryptolandia">
      <figcaption>Deep insights with charts, stats, and detailed information.</figcaption>
    </figure>
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/easy_to_follow.jpeg' | relative_url }}" alt="Cryptolandia chart view showing easy-to-follow price movement over time">
      <figcaption>Interactive charts make exploring price history effortless.</figcaption>
    </figure>
    <figure class="cl-shot">
      <img src="{{ '/cryptolandia/images/follow_the_news.jpeg' | relative_url }}" alt="Cryptolandia news feed with article thumbnails and headlines">
      <figcaption>Stay informed with a beautiful news reader built for speed.</figcaption>
    </figure>
  </div>
</div>

<div class="cl-section">
  <h2>Take it further with Pro.</h2>
  <div class="cl-split">
    <div class="cl-split__main">
      <p>
        Start free. Upgrade when you're ready. Pro unlocks advanced features designed for power users who want more control and customization.
      </p>
      <ul>
        <li>Unlimited watchlists</li>
        <li>Premium list styles</li>
        <li>Early access to new features</li>
      </ul>
      <p class="cl-meta">
        Try free. Upgrade anytime. Cancel anytime.
      </p>
    </div>
    <div class="cl-split__side">
      <h3>Get started</h3>
      <p>Download and start tracking in seconds.</p>
      <p style="margin: 0;">
        <a class="cl-appstore-badge" href="https://apps.apple.com/us/app/cryptolandia-crypto-ticker/id6756105265" target="_blank" rel="noopener noreferrer">
          <img src="{{ '/cryptolandia/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg' | relative_url }}" alt="Download on the App Store">
        </a>
      </p>
    </div>
  </div>
</div>

<div class="cl-section">
  <h2>FAQ</h2>
  <h3>Is Cryptolandia a crypto tracker app?</h3>
  <p>Yes. Cryptolandia is an iOS app that helps you track cryptocurrency prices, view interactive charts, and read crypto news in one place.</p>

  <h3>Does Cryptolandia collect personal data?</h3>
  <p>No. Cryptolandia is built to be privacy-first and does not collect personal information or track you.</p>

  <h3>Does the app include crypto news?</h3>
  <p>Yes. Cryptolandia includes a curated crypto news feed from multiple sources, designed to be fast and easy to read.</p>

  <h3>Does it work on iPad?</h3>
  <p>Yes. Cryptolandia is built for iPhone and iPad.</p>
</div>

<div class="cl-section">
  <h2>Privacy, terms & support</h2>
  <p>
    Privacy is fundamental to how we build. <strong>The Cryptolandia app collects no personal data.</strong> For complete details, visit:
  </p>
  <ul>
    <li><a href="{{ '/cryptolandia/privacy' | relative_url }}">Privacy Policy</a></li>
    <li><a href="{{ '/cryptolandia/terms' | relative_url }}">Terms of Service</a></li>
    <li><a href="{{ '/support' | relative_url }}">Support & FAQ</a></li>
  </ul>
</div>
