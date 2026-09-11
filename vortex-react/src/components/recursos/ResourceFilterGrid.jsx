import { useState } from 'react';
import Reveal from '../common/Reveal.jsx';
import { RESOURCE_ICONS, RESOURCE_ITEMS, RESOURCE_TABS, RESOURCE_TAGS } from '../../data/resources.jsx';

export default function ResourceFilterGrid() {
  const [activeTipo, setActiveTipo] = useState('todos');

  return (
    <>
      <Reveal as="div" className="rc-tabs" id="rcTabs" role="group" aria-label="Filtrar recursos por tipo">
        {RESOURCE_TABS.map((tab) => {
          const active = tab.tipo === activeTipo;
          return (
            <button
              type="button"
              className={`rc-tab${active ? ' is-active' : ''}`}
              aria-pressed={active}
              key={tab.tipo}
              onClick={() => setActiveTipo(tab.tipo)}
            >
              {tab.label}
            </button>
          );
        })}
      </Reveal>

      <ul className="rc-grid" id="rcGrid">
        {RESOURCE_ITEMS.map((item) => {
          const hidden = activeTipo !== 'todos' && item.tipo !== activeTipo;
          return (
            <Reveal as="li" className={`rc-item${hidden ? ' is-hidden' : ''}`} key={item.title}>
              <a href="#registro" style={{ '--bg': item.bg, '--fg': item.fg }}>
                <span className="rc-tag">{RESOURCE_TAGS[item.tipo]}</span>
                <span className="rc-deco" aria-hidden="true">
                  <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {RESOURCE_ICONS[item.tipo]}
                  </svg>
                </span>
                <h3>{item.title}</h3>
                <span className="rc-more">Ver ahora</span>
              </a>
            </Reveal>
          );
        })}
      </ul>
    </>
  );
}
