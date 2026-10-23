/* Bakker Technologies — progressive enhancement only. The site works without it. */
(function () {
  'use strict';

  var root = document.documentElement;
  var header = document.getElementById('site-header');

  // Hairline under the header once the page has scrolled.
  if (header) {
    var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu: a sheet below the header. Escape closes, focus returns to the button.
  var btn = document.getElementById('menu-btn');
  var sheet = document.getElementById('mobile-nav');
  if (btn && sheet) {
    var setOpen = function (open, restoreFocus) {
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? btn.dataset.labelClose : btn.dataset.labelOpen);
      sheet.classList.toggle('is-open', open);
      root.classList.toggle('is-menu-open', open);
      if (open) {
        var first = sheet.querySelector('a');
        if (first) first.focus({ preventScroll: true });
      } else if (restoreFocus) {
        btn.focus();
      }
    };
    btn.addEventListener('click', function () {
      setOpen(btn.getAttribute('aria-expanded') !== 'true', false);
    });
    sheet.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false, false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && btn.getAttribute('aria-expanded') === 'true') setOpen(false, true);
    });
    window.matchMedia('(min-width: 860px)').addEventListener('change', function (mq) {
      if (mq.matches) setOpen(false, false);
    });
  }

  // Reveal on scroll. Siblings that enter together are staggered slightly.
  var items = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (entry, i) {
        entry.target.style.setProperty('--delay', (i * 0.07) + 's');
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Copy-to-clipboard for the contact address.
  var status = document.querySelector('[data-copy-status]');
  document.querySelectorAll('[data-copy]').forEach(function (el) {
    var idle = el.textContent;
    el.hidden = !navigator.clipboard;
    el.addEventListener('click', function () {
      navigator.clipboard.writeText(el.getAttribute('data-copy')).then(function () {
        el.textContent = el.getAttribute('data-copied-label');
        if (status) status.textContent = el.textContent;
        setTimeout(function () {
          el.textContent = idle;
          if (status) status.textContent = '';
        }, 2000);
      });
    });
  });
})();
