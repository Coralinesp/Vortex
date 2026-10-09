import { useEffect, useState } from 'react';

function formatDuration(seconds) {
  if (!seconds || !Number.isFinite(seconds)) return '';
  const total = Math.round(seconds / 60);
  return total < 1 ? '< 1 min' : `${total} min`;
}

function useVideoDurations(videos) {
  const [durations, setDurations] = useState({});
  const key = videos.map((v) => v.src).join('|');

  useEffect(() => {
    let cancelled = false;
    const probes = videos.map((v) => {
      const el = document.createElement('video');
      el.preload = 'metadata';
      el.src = v.src;
      el.onloadedmetadata = () => {
        if (cancelled) return;
        setDurations((prev) => ({ ...prev, [v.src]: el.duration }));
      };
      return el;
    });
    return () => {
      cancelled = true;
      probes.forEach((el) => { el.src = ''; });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return durations;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4.5 3.3c0-.7.8-1.2 1.5-.8l7 4.7c.6.4.6 1.3 0 1.7l-7 4.7c-.7.4-1.5 0-1.5-.8V3.3Z" />
    </svg>
  );
}

function PlayingIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13ZM6.6 5.6c0-.3.3-.5.6-.3l3.4 2.1a.4.4 0 0 1 0 .7l-3.4 2.1a.35.35 0 0 1-.6-.3V5.6Z" />
    </svg>
  );
}

export default function DocsVideoPlayer({ title, groups, activeVideo, onSelect }) {
  const allVideos = groups.flatMap((g) => g.items);
  const durations = useVideoDurations(allVideos);

  return (
    <div className="docs-player">
      <div className="docs-player-main">
        <div className="docs-player-topbar">
          <span className="docs-player-topbar-title">{title}</span>
        </div>

        <div className="docs-player-stage">
          <video key={activeVideo.src} src={activeVideo.src} controls className="docs-player-video" />
        </div>

        <div className="docs-player-caption">
          <h3>{activeVideo.title}</h3>
          {activeVideo.description && <p>{activeVideo.description}</p>}
        </div>
      </div>

      <aside className="docs-player-sidebar">
        <div className="docs-player-sidebar-head">Contenido</div>
        <div className="docs-player-sidebar-list">
          {groups.map((group) => (
            <div className="docs-player-group" key={group.heading}>
              <div className="docs-player-group-head">{group.heading}</div>
              <ul>
                {group.items.map((item) => {
                  const isActive = item.src === activeVideo.src;
                  return (
                    <li key={item.src}>
                      <button
                        type="button"
                        className={`docs-player-item${isActive ? ' is-active' : ''}`}
                        onClick={() => onSelect(item)}
                        aria-current={isActive ? 'true' : undefined}
                      >
                        <span className="docs-player-item-icon">{isActive ? <PlayingIcon /> : <PlayIcon />}</span>
                        <span className="docs-player-item-text">
                          <span className="docs-player-item-title">{item.title}</span>
                          <span className="docs-player-item-duration">{formatDuration(durations[item.src])}</span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
