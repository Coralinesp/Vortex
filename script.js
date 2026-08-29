/* =========================================================
   Vortex POS — Interacciones de la landing
   ========================================================= */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header con fondo al hacer scroll ---------- */
  var header = document.getElementById('header');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var demoHero = document.querySelector('.demo-hero');
  var heroStage = document.querySelector('.hero-stage');
  var heroContent = document.querySelector('.hero-content');
  var heroAppFrame = document.querySelector('.hero-app-frame');
  var heroCards = document.querySelectorAll('.hero-floating-card');
  var heroBackdrop = document.querySelector('.hero-backdrop');

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function smooth(t) {
    return t * t * (3 - 2 * t);
  }

  var stickyHero = window.matchMedia('(min-width: 681px)');

  /* Escala final de la ilustración cuando termina de subir. */
  var FINAL_SCALE = 0.82;
  var riseDistance = 0;

  /* Cuánto tiene que subir la ilustración para acabar centrada verticalmente, ya
     encogida, en el hueco bajo el header. Se mide sin transform para no acumular
     el estado anterior. */
  function measureHero() {
    if (!heroStage || !heroAppFrame) return;

    var previous = heroAppFrame.style.transform;
    heroAppFrame.style.transform = 'none';

    var stage = heroStage.getBoundingClientRect();
    var frame = heroAppFrame.getBoundingClientRect();
    var frameTop = frame.top - stage.top;

    var headerH = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue('--header-h')
    ) || 72;
    var finalTop = headerH + (stage.height - headerH - frame.height * FINAL_SCALE) / 2;

    riseDistance = Math.max(frameTop - Math.max(finalTop, headerH + 12), 0);
    heroAppFrame.style.transform = previous;
  }

  function updateHeroVisual() {
    if (!demoHero || !heroContent || !heroAppFrame || !heroBackdrop) return;

    var totalTravel = Math.max(demoHero.offsetHeight - window.innerHeight, 1);
    var progress = stickyHero.matches && !reduceMotion
      ? clamp((window.scrollY - demoHero.offsetTop) / totalTravel, 0, 1)
      : 0;

    /* La ilustración sube y encoge durante el primer 65% del recorrido. El texto
       aguanta hasta que la ilustración ya lo está alcanzando, para que se vea
       tapado por ella y no que desaparece antes de tiempo. Las tarjetas entran
       al final, con la ilustración ya arriba y pequeña. */
    var rise = smooth(clamp(progress / 0.65, 0, 1));
    var textFade = clamp((progress - 0.20) / 0.28, 0, 1);
    var cardReveal = clamp((progress - 0.68) / 0.24, 0, 1);

    heroContent.style.opacity = (1 - textFade).toFixed(3);
    heroContent.style.transform = 'translate3d(0, ' + (-textFade * 48).toFixed(2) + 'px, 0)';

    heroAppFrame.style.transform =
      'translate3d(0, ' + (-riseDistance * rise).toFixed(2) + 'px, 0) ' +
      'scale(' + (1 - (1 - FINAL_SCALE) * rise).toFixed(4) + ')';

    heroBackdrop.style.transform = 'scale(' + (1 + rise * 0.06).toFixed(3) + ')';

    heroCards.forEach(function (card, index) {
      var drift = (1 - cardReveal) * 22;
      var x = index === 0 ? -drift : drift;
      card.style.opacity = cardReveal.toFixed(3);
      card.style.transform = 'translate3d(' + x.toFixed(2) + 'px, ' + (drift * 0.6).toFixed(2) + 'px, 0)';
    });
  }

  if (demoHero) {
    var tick = false;
    function requestHeroUpdate() {
      if (tick) return;
      tick = true;
      requestAnimationFrame(function () {
        updateHeroVisual();
        tick = false;
      });
    }

    function remeasureHero() {
      measureHero();
      requestHeroUpdate();
    }

    measureHero();
    requestHeroUpdate();

    window.addEventListener('scroll', requestHeroUpdate, { passive: true });
    window.addEventListener('resize', remeasureHero, { passive: true });
    window.addEventListener('load', remeasureHero);
  }

  /* ---------- Menú móvil ---------- */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });

  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeNav();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      closeNav();
      toggle.focus();
    }
  });

  /* ---------- Animaciones de entrada ---------- */
  var revealables = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealables.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ---------- Contadores de estadísticas ---------- */
  var counters = document.querySelectorAll('[data-count]');

  function formatNumber(n) {
    return n.toLocaleString('es-MX');
  }

  function animateCounter(el) {
    var target = parseFloat(el.dataset.count);
    var suffix = el.dataset.suffix || '';

    if (reduceMotion) {
      el.textContent = formatNumber(target) + suffix;
      return;
    }

    var duration = 1400;
    var start = performance.now();

    function tick(now) {
      var p = Math.min((now - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      el.textContent = formatNumber(Math.round(target * eased)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      });
    }, { threshold: 0.6 });

    counters.forEach(function (el) { counterObserver.observe(el); });
  } else {
    counters.forEach(animateCounter);
  }

  /* ---------- Cambio de periodicidad en precios ---------- */
  var cycleButtons = document.querySelectorAll('.bt-btn');
  var priceValues = document.querySelectorAll('.plan-price b');

  cycleButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var annual = btn.dataset.cycle === 'anual';

      cycleButtons.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle('is-active', active);
        b.setAttribute('aria-pressed', String(active));
      });

      priceValues.forEach(function (el) {
        var value = parseInt(annual ? el.dataset.annual : el.dataset.monthly, 10);
        el.textContent = formatNumber(value);
      });
    });
  });

  /* ---------- Acordeón: solo una pregunta abierta ---------- */
  var faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      faqItems.forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  /* ---------- Formulario de registro (demo) ---------- */
  var form = document.getElementById('ctaForm');
  var input = document.getElementById('email');
  var msg = document.getElementById('ctaMsg');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = input.value.trim();

    if (!EMAIL_RE.test(value)) {
      input.classList.add('is-error');
      msg.textContent = 'Escribe un correo válido para continuar.';
      msg.className = 'cta-msg err';
      input.focus();
      return;
    }

    // Aquí conectarías tu backend o servicio de registro.
    input.classList.remove('is-error');
    msg.textContent = '¡Listo! Te enviamos el acceso a tu prueba de 14 días a ' + value + '.';
    msg.className = 'cta-msg ok';
    form.reset();
  });

  input.addEventListener('input', function () {
    input.classList.remove('is-error');
    if (msg.classList.contains('err')) {
      msg.textContent = '';
      msg.className = 'cta-msg';
    }
  });

  /* ---------- Año actual en el pie ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
})();
