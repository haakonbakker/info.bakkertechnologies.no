---
layout: default
title: "Coins"
description: "Browse calm, clarity-first crypto explainers and FAQs for major coins and tokens."
permalink: /coins/
---

{% assign coins = site.data.coins | sort: "name" %}

# Coins

Browse quick, calm explainers for major crypto assets. Each page includes a plain-English overview, common use cases, and FAQs.

<div class="grid grid--3" style="margin-top: 16px;">
  {% for coin in coins %}
    <a class="card" href="{{ '/coins/' | append: coin.id | append: '/' | relative_url }}">
      <strong style="display:block; color: var(--text); margin-bottom: 4px;">{{ coin.name }} ({{ coin.symbol }})</strong>
      <span class="muted">{{ coin.oneLiner }}</span>
    </a>
  {% endfor %}
</div>

