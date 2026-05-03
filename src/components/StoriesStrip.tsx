'use client';

import Image from 'next/image';
import { useState } from 'react';
import { stories } from '@/data/stories';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import StoryViewerOverlay from './StoryViewerOverlay';

export default function StoriesStrip() {
  const { lang } = useLang();
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);

  const openAt = (i: number) => {
    setStart(i);
    setOpen(true);
  };

  return (
    <section className="px-5 pb-8">
      <div className="flex items-baseline justify-between mb-3">
        <h2 className="font-serif text-xl text-cocoa">{t.stories.title[lang]}</h2>
        <button
          type="button"
          onClick={() => openAt(0)}
          className="text-sm font-semibold text-white bg-blush hover:bg-blush/90 active:scale-95 transition rounded-full px-3 py-1.5 shadow-soft inline-flex items-center gap-1"
        >
          {t.stories.open[lang]} <span aria-hidden="true">→</span>
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-5 px-5">
        {stories.map((s, i) => (
          <button
            type="button"
            key={s.id}
            onClick={() => openAt(i)}
            className="shrink-0 w-20 text-center group"
            aria-label={`Open story ${s.title[lang]}`}
          >
            <div className="story-ring p-[2px] rounded-full">
              <div className="bg-cream p-[2px] rounded-full">
                <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden">
                  <Image
                    src={s.coverImage}
                    alt={s.title[lang]}
                    fill
                    sizes="72px"
                    className="object-cover group-hover:scale-105 transition"
                  />
                </div>
              </div>
            </div>
            <p className="mt-2 text-[11px] text-cocoa/80 font-medium leading-tight line-clamp-2">
              {s.title[lang]}
            </p>
          </button>
        ))}
      </div>

      <StoryViewerOverlay open={open} initialStoryIndex={start} onClose={() => setOpen(false)} />
    </section>
  );
}
