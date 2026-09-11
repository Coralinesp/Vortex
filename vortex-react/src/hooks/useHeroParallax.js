import { useEffect, useRef } from 'react';

/* Escala final de la ilustración cuando termina de subir. */
const FINAL_SCALE = 0.82;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function smooth(t) {
  return t * t * (3 - 2 * t);
}

export function useHeroParallax({ heroRef, stageRef, contentRef, appFrameRef, backdropRef, leftCardRef, rightCardRef }) {
  const riseDistanceRef = useRef(0);

  useEffect(() => {
    const hero = heroRef.current;
    const stage = stageRef.current;
    const content = contentRef.current;
    const appFrame = appFrameRef.current;
    const backdrop = backdropRef.current;
    const cards = [leftCardRef.current, rightCardRef.current].filter(Boolean);

    if (!hero || !stage || !content || !appFrame || !backdrop) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stickyHero = window.matchMedia('(min-width: 681px)');

    /* Cuánto tiene que subir la ilustración para acabar centrada verticalmente, ya
       encogida, en el hueco bajo el header. Se mide sin transform para no acumular
       el estado anterior. */
    function measureHero() {
      const previous = appFrame.style.transform;
      appFrame.style.transform = 'none';

      const stageRect = stage.getBoundingClientRect();
      const frameRect = appFrame.getBoundingClientRect();
      const frameTop = frameRect.top - stageRect.top;

      const headerH =
        parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 72;
      const finalTop = headerH + (stageRect.height - headerH - frameRect.height * FINAL_SCALE) / 2;

      riseDistanceRef.current = Math.max(frameTop - Math.max(finalTop, headerH + 12), 0);
      appFrame.style.transform = previous;
    }

    function updateHeroVisual() {
      const totalTravel = Math.max(hero.offsetHeight - window.innerHeight, 1);
      const progress =
        stickyHero.matches && !reduceMotion
          ? clamp((window.scrollY - hero.offsetTop) / totalTravel, 0, 1)
          : 0;

      /* La ilustración sube y encoge durante el primer 65% del recorrido. El texto
         aguanta hasta que la ilustración ya lo está alcanzando, para que se vea
         tapado por ella y no que desaparece antes de tiempo. Las tarjetas entran
         al final, con la ilustración ya arriba y pequeña. */
      const rise = smooth(clamp(progress / 0.65, 0, 1));
      const textFade = clamp((progress - 0.2) / 0.28, 0, 1);
      const cardReveal = clamp((progress - 0.68) / 0.24, 0, 1);

      content.style.opacity = (1 - textFade).toFixed(3);
      content.style.transform = 'translate3d(0, ' + (-textFade * 48).toFixed(2) + 'px, 0)';

      appFrame.style.transform =
        'translate3d(0, ' + (-riseDistanceRef.current * rise).toFixed(2) + 'px, 0) ' +
        'scale(' + (1 - (1 - FINAL_SCALE) * rise).toFixed(4) + ')';

      backdrop.style.transform = 'scale(' + (1 + rise * 0.06).toFixed(3) + ')';

      cards.forEach((card, index) => {
        const drift = (1 - cardReveal) * 22;
        const x = index === 0 ? -drift : drift;
        card.style.opacity = cardReveal.toFixed(3);
        card.style.transform = 'translate3d(' + x.toFixed(2) + 'px, ' + (drift * 0.6).toFixed(2) + 'px, 0)';
      });
    }

    let tick = false;
    function requestHeroUpdate() {
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
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

    return () => {
      window.removeEventListener('scroll', requestHeroUpdate);
      window.removeEventListener('resize', remeasureHero);
      window.removeEventListener('load', remeasureHero);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
