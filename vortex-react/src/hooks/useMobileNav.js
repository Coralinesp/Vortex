import { useEffect, useRef, useState } from 'react';

export function useMobileNav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  function toggle() {
    setOpen((prev) => !prev);
  }

  function close() {
    setOpen(false);
  }

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return { open, toggle, close, toggleRef };
}
