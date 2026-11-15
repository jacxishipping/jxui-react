// @jxui/react v3.0.0 — ImageLightbox (JXUI v3.0 Unified Component Suite)
import React, { useState, useEffect } from 'react';
import { useJXTheme } from '../../../context/JXThemeContext';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

// 5. ImageLightbox — click a thumbnail to open the lightbox overlay: the
// image fills the screen, with previous/next, a caption, a counter and
// Escape / backdrop click / close button to dismiss.
const IMAGES = [
  { id: 1, title: 'Aurora gradient', caption: 'Hero backdrop · 1920 × 1080', gradient: 'from-indigo-500 via-purple-500 to-pink-500' },
  { id: 2, title: 'Ocean glass', caption: 'Glass panel · 1920 × 1080', gradient: 'from-sky-500 via-cyan-500 to-emerald-500' },
  { id: 3, title: 'Sunset bento', caption: 'Bento grid · 1920 × 1080', gradient: 'from-amber-500 via-orange-500 to-rose-500' },
] as const;

export const ImageLightbox: React.FC = () => {
  const { palette } = useJXTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % IMAGES.length));
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + IMAGES.length) % IMAGES.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openIndex]);

  const current = openIndex === null ? null : IMAGES[openIndex];

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-2">
        {IMAGES.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-label={`Open ${img.title} in lightbox`}
            className={`relative h-20 rounded-xl overflow-hidden bg-gradient-to-br ${img.gradient} group cursor-pointer focus-visible:ring-2`}
          >
            <span className="absolute inset-0 flex items-center justify-center text-white text-[11px] font-bold px-1 text-center">
              {img.title}
            </span>
            <span className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <Maximize2 className="w-4 h-4" />
            </span>
          </button>
        ))}
      </div>
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className={`relative w-full max-w-md h-56 rounded-2xl bg-gradient-to-br ${current.gradient} flex items-center justify-center text-white shadow-2xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-lg font-bold px-4 text-center">{current.title}</span>
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close lightbox"
              autoFocus
              className="absolute top-3 right-3 min-h-[36px] min-w-[36px] rounded-full bg-black/40 text-white flex items-center justify-center cursor-pointer hover:bg-black/60"
            >
              <X className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setOpenIndex((openIndex! - 1 + IMAGES.length) % IMAGES.length)}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 -translate-y-1/2 min-h-[36px] min-w-[36px] rounded-full bg-black/40 text-white flex items-center justify-center cursor-pointer hover:bg-black/60"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setOpenIndex((openIndex! + 1) % IMAGES.length)}
              aria-label="Next image"
              className="absolute right-3 top-1/2 -translate-y-1/2 min-h-[36px] min-w-[36px] rounded-full bg-black/40 text-white flex items-center justify-center cursor-pointer hover:bg-black/60"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-white/80">
            {current.caption} · {openIndex! + 1} of {IMAGES.length}
          </p>
          <div className="flex gap-1.5">
            {IMAGES.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={(e) => { e.stopPropagation(); setOpenIndex(i); }}
                aria-label={`Go to ${img.title}`}
                className={`h-2 rounded-full cursor-pointer ${i === openIndex ? `w-5 ${palette.bg}` : 'w-2 bg-white/40'}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
