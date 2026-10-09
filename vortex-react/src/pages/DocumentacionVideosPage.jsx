import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta.js';
import Reveal from '../components/common/Reveal.jsx';
import CtaSection from '../components/common/CtaSection.jsx';
import DocsVideoPlayer from '../components/docs/DocsVideoPlayer.jsx';
import { getDocModuleList } from '../data/docs.jsx';
import { DOC_VIDEOS } from '../data/docsVideos.js';

function buildGroups() {
  const groups = [];
  const general = DOC_VIDEOS.filter((v) => !v.moduleSlug);
  if (general.length) groups.push({ heading: 'General', items: general });

  getDocModuleList().forEach((mod) => {
    const items = DOC_VIDEOS.filter((v) => v.moduleSlug === mod.slug);
    if (items.length) groups.push({ heading: mod.title, items });
  });

  return groups;
}

export default function DocumentacionVideosPage() {
  const { modulo } = useParams();
  const groups = useMemo(buildGroups, []);
  const allVideos = useMemo(() => groups.flatMap((g) => g.items), [groups]);
  const preselected = modulo ? allVideos.find((v) => v.moduleSlug === modulo) : null;
  const [activeVideo, setActiveVideo] = useState(preselected || allVideos[0]);

  usePageMeta(
    'Videos — Documentación Vortex',
    'Mira cómo funciona Vortex en video, módulo por módulo, con capturas de pantalla reales.',
  );

  if (!activeVideo) return null;

  return (
    <>
      <section className="section section-first">
        <div className="container">
          <Reveal as="header" className="guia-head">
            <Link className="guia-back" to="/documentacion">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 3 4.5 8 10 13" />
              </svg>
              Documentación
            </Link>
            <span className="eyebrow">Videos</span>
            <h1>Vortex en video</h1>
            <p className="guia-summary">
              Mira cómo funciona cada módulo en pantalla real. Vamos sumando videos con el tiempo -- esto es lo que
              tenemos listo hasta ahora.
            </p>
          </Reveal>

          <Reveal as="div" delay=".06s">
            <DocsVideoPlayer title="Documentación en video" groups={groups} activeVideo={activeVideo} onSelect={setActiveVideo} />
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
