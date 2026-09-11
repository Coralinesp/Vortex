import { useEffect, useRef, useState } from 'react';

/* Escribe y borra preguntas de ejemplo. Solo corre mientras la tarjeta está a
   la vista, para no dejar temporizadores girando de fondo. */
const TYPE_MS = 60; /* velocidad al escribir */
const ERASE_MS = 28; /* borrar es más rápido, como al teclear de verdad */
const HOLD_MS = 1900; /* pausa con la pregunta completa */
const NEXT_MS = 420; /* pausa en blanco antes de la siguiente */

export function useTypedWords(words) {
  const barRef = useRef(null);
  const [text, setText] = useState(words[0] ?? '');
  const [isTyping, setIsTyping] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let wordIndex = 0;
    let chars = Array.from(words[0] ?? '');
    let count = chars.length;
    let erasing = false;
    let timer = null;
    let running = false;

    function step() {
      if (!running) return;

      let delay;

      if (!erasing && count === chars.length) {
        erasing = true;
        delay = HOLD_MS;
        setIsIdle(true);
      } else if (erasing && count === 0) {
        erasing = false;
        wordIndex = (wordIndex + 1) % words.length;
        chars = Array.from(words[wordIndex]);
        delay = NEXT_MS;
        setIsIdle(true);
      } else {
        count += erasing ? -1 : 1;
        setText(chars.slice(0, count).join(''));
        delay = erasing ? ERASE_MS : TYPE_MS;
        setIsIdle(false);
      }

      timer = setTimeout(step, delay);
    }

    function start() {
      if (running) return;
      running = true;
      setIsTyping(true);
      setIsIdle(true);
      timer = setTimeout(step, HOLD_MS);
    }

    function stop() {
      running = false;
      setIsTyping(false);
      setIsIdle(false);
      clearTimeout(timer);
    }

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) start();
            else stop();
          });
        },
        { threshold: 0.35 }
      );
      observer.observe(bar);
    } else {
      start();
    }

    return () => {
      stop();
      observer?.disconnect();
    };
  }, [words]);

  return { barRef, text, isTyping, isIdle };
}
