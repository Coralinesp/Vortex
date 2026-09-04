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

  /* ---------- Cambio de periodicidad en precios ----------
     El interruptor mueve una pastilla con transform y las cifras se
     interpolan, en lugar de saltar de un valor al otro. */
  var ppSwitch = document.getElementById('ppSwitch');

  if (ppSwitch) {
    var ppThumb = ppSwitch.querySelector('.pp-thumb');
    var ppOptions = Array.prototype.slice.call(ppSwitch.querySelectorAll('.pp-opt'));
    var ppPrices = document.querySelectorAll('.pp-price b');
    var ppPer = document.querySelectorAll('.pp-price .per');

    /* La pastilla (left:0) y los botones miden su offsetLeft desde la misma
       caja de relleno del interruptor, así que el desplazamiento es el
       offsetLeft tal cual. Se usan medidas de layout y no rectángulos para
       que un zoom o un transform en un ancestro no descuadre la pastilla. */
    var moveThumb = function () {
      var active = ppSwitch.querySelector('.pp-opt.is-active');

      ppThumb.style.width = active.offsetWidth + 'px';
      ppThumb.style.transform = 'translateX(' + active.offsetLeft + 'px)';
    };

    var tweenPrice = function (el, to) {
      var from = parseInt(el.textContent.replace(/\D/g, ''), 10) || 0;

      if (reduceMotion || from === to) {
        el.textContent = formatNumber(to);
        return;
      }

      var duration = 450;
      var start = performance.now();

      requestAnimationFrame(function tick(now) {
        var p = Math.min((now - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
        el.textContent = formatNumber(Math.round(from + (to - from) * eased));
        if (p < 1) requestAnimationFrame(tick);
      });
    };

    ppOptions.forEach(function (opt) {
      opt.addEventListener('click', function () {
        var yearly = opt.dataset.cycle === 'anual';

        ppOptions.forEach(function (other) {
          var active = other === opt;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', String(active));
        });

        moveThumb();

        ppPrices.forEach(function (el) {
          tweenPrice(el, parseInt(yearly ? el.dataset.yearly : el.dataset.monthly, 10));
        });
        ppPer.forEach(function (el) { el.textContent = yearly ? '/año' : '/mes'; });
      });
    });

    /* La pastilla se coloca con las medidas del momento; cuando entra la
       fuente web los botones cambian de ancho, así que se observa el tamaño
       del interruptor para recolocarla (fonts.ready llega demasiado pronto
       en algunos navegadores). */
    moveThumb();

    if (typeof ResizeObserver === 'function') {
      new ResizeObserver(moveThumb).observe(ppSwitch);
    } else {
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveThumb);
      window.addEventListener('resize', moveThumb);
    }
  }

  /* ---------- Carrusel lateral (coverflow) ---------- */
  var csViewport = document.getElementById('csViewport');

  if (csViewport) {
    var csSlides = Array.prototype.slice.call(csViewport.querySelectorAll('.cs-slide'));
    var csCount = csSlides.length;
    var csActive = 0;
    var csTimer = null;

    var CS_STEP = 118;   // desplazamiento lateral por posición
    var CS_DEPTH = 240;  // hundimiento en Z por posición
    var CS_SCALE = 0.10; // reducción de tamaño por posición
    var CS_VISIBLE = 2;  // tarjetas visibles a cada lado

    /* Distancia con envolvente: desde la última se llega a la primera por el
       camino corto, que es lo que hace que el bucle no dé un salto. */
    function csOffset(i) {
      var d = i - csActive;
      if (d > csCount / 2) d -= csCount;
      if (d < -csCount / 2) d += csCount;
      return d;
    }

    function csRender() {
      csSlides.forEach(function (slide, i) {
        var d = csOffset(i);
        var abs = Math.abs(d);
        var visible = abs <= CS_VISIBLE;

        slide.style.transform =
          'translate3d(' + (d * CS_STEP) + 'px, 0, ' + (-abs * CS_DEPTH) + 'px) ' +
          'scale(' + (1 - abs * CS_SCALE) + ')';
        /* Las laterales quedan opacas: solo las tapa la tarjeta del frente. */
        slide.style.opacity = visible ? 1 : 0;
        slide.style.zIndex = String(csCount - abs);
        /* Fuera de vista no debe recibir foco ni lectura. */
        slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
      });
    }

    function csGo(index) {
      csActive = (index + csCount) % csCount;
      csRender();
    }

    function csRestart() {
      if (reduceMotion) return;
      clearInterval(csTimer);
      csTimer = setInterval(function () { csGo(csActive + 1); }, 4200);
    }

    csViewport.addEventListener('mouseenter', function () { clearInterval(csTimer); });
    csViewport.addEventListener('mouseleave', csRestart);

    /* Arrastre lateral para tocar en móvil. */
    var csDown = null;
    csViewport.addEventListener('pointerdown', function (e) { csDown = e.clientX; });
    csViewport.addEventListener('pointerup', function (e) {
      if (csDown === null) return;
      var dx = e.clientX - csDown;
      if (Math.abs(dx) > 40) csGo(csActive + (dx < 0 ? 1 : -1));
      csDown = null;
      csRestart();
    });

    csRender();
    csRestart();
  }

  /* ---------- Acordeón: solo una pregunta abierta a la vez ---------- */
  var faqAccordion = document.getElementById('faqAccordion');

  if (faqAccordion) {
    var faqTriggers = faqAccordion.querySelectorAll('.faq-trigger');

    var setFaqOpen = function (trigger, open) {
      trigger.closest('.faq-item').classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
    };

    faqTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var willOpen = trigger.getAttribute('aria-expanded') !== 'true';

        faqTriggers.forEach(function (other) { setFaqOpen(other, false); });
        if (willOpen) setFaqOpen(trigger, true);
      });
    });
  }

  /* ---------- Formulario de registro (demo) ---------- */
  var form = document.getElementById('ctaForm');
  var input = document.getElementById('email');
  var msg = document.getElementById('ctaMsg');
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /* El archivo lo comparten varias páginas: sin esta guarda, una sin
     formulario rompía el script a partir de aquí. */
  if (form) {
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
  }

  /* ---------- Máquina de escribir en la tarjeta de documentación ----------
     Escribe y borra preguntas de ejemplo. Solo corre mientras la tarjeta
     está a la vista, para no dejar temporizadores girando de fondo. */
  var typedEl = document.getElementById('resTyped');

  if (typedEl && !reduceMotion) {
    var words = typedEl.dataset.words.split('|');
    var bar = typedEl.closest('.res-searchbar');

    var TYPE_MS = 60;    /* velocidad al escribir */
    var ERASE_MS = 28;   /* borrar es más rápido, como al teclear de verdad */
    var HOLD_MS = 1900;  /* pausa con la pregunta completa */
    var NEXT_MS = 420;   /* pausa en blanco antes de la siguiente */

    var wordIndex = 0;
    var chars = Array.from(words[0]);
    var count = chars.length;
    var erasing = false;
    var timer = null;
    var running = false;

    var step = function () {
      if (!running) return;

      var delay;

      if (!erasing && count === chars.length) {
        erasing = true;
        delay = HOLD_MS;
        bar.classList.add('is-idle');   /* el cursor parpadea en las pausas */
      } else if (erasing && count === 0) {
        erasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        chars = Array.from(words[wordIndex]);
        delay = NEXT_MS;
        bar.classList.add('is-idle');
      } else {
        count += erasing ? -1 : 1;
        typedEl.textContent = chars.slice(0, count).join('');
        delay = erasing ? ERASE_MS : TYPE_MS;
        bar.classList.remove('is-idle');
      }

      timer = setTimeout(step, delay);
    };

    var start = function () {
      if (running) return;
      running = true;
      bar.classList.add('is-typing', 'is-idle');
      timer = setTimeout(step, HOLD_MS);
    };

    var stop = function () {
      running = false;
      bar.classList.remove('is-typing', 'is-idle');
      clearTimeout(timer);
    };

    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) start(); else stop();
        });
      }, { threshold: 0.35 }).observe(bar);
    } else {
      start();
    }
  }

  /* ---------- Formulario de contacto (demo, sin backend) ---------- */
  var contactForm = document.getElementById('contactForm');

  if (contactForm) {
    var ctMsg = document.getElementById('ctMsg');
    var CT_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    var ctRequired = [
      { el: document.getElementById('ctNombre'), aviso: 'Escribe tu nombre.' },
      { el: document.getElementById('ctNegocio'), aviso: 'Dinos cómo se llama tu negocio.' },
      { el: document.getElementById('ctCorreo'), aviso: 'Escribe un correo válido para responderte.' }
    ];

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var fallo = null;

      ctRequired.forEach(function (campo) {
        var valor = campo.el.value.trim();
        var valido = campo.el.type === 'email' ? CT_EMAIL.test(valor) : valor.length > 1;

        campo.el.classList.toggle('is-error', !valido);
        if (!valido && !fallo) fallo = campo;
      });

      if (fallo) {
        ctMsg.textContent = fallo.aviso;
        ctMsg.className = 'ct-msg err';
        fallo.el.focus();
        return;
      }

      /* Aquí conectarías tu backend, CRM o servicio de correo. */
      ctMsg.textContent = '¡Listo! Recibimos tu mensaje, te respondemos el mismo día hábil.';
      ctMsg.className = 'ct-msg ok';
      contactForm.reset();
    });

    contactForm.addEventListener('input', function (e) {
      e.target.classList.remove('is-error');
      if (ctMsg.classList.contains('err')) {
        ctMsg.textContent = '';
        ctMsg.className = 'ct-msg';
      }
    });
  }

  /* ---------- Filtros del centro de recursos ---------- */
  var rcTabs = document.getElementById('rcTabs');
  var rcGrid = document.getElementById('rcGrid');

  if (rcTabs && rcGrid) {
    var rcButtons = Array.prototype.slice.call(rcTabs.querySelectorAll('.rc-tab'));
    var rcItems = Array.prototype.slice.call(rcGrid.querySelectorAll('.rc-item'));

    rcButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tipo = btn.dataset.tipo;

        rcButtons.forEach(function (other) {
          var active = other === btn;
          other.classList.toggle('is-active', active);
          other.setAttribute('aria-pressed', String(active));
        });

        rcItems.forEach(function (item) {
          item.classList.toggle('is-hidden', tipo !== 'todos' && item.dataset.tipo !== tipo);
        });
      });
    });
  }

  /* ---------- Año actual en el pie ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
