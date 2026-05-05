'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { stories } from '@/data/stories';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { ChevronLeft, ChevronRight, CloseIcon } from './Icons';

const STORY_DURATION_MS = 5000;

type Props = {
  open: boolean;
  initialStoryIndex: number;
  onClose: () => void;
};

export default function StoryViewerOverlay({ open, initialStoryIndex, onClose }: Props) {
  const { lang } = useLang();
  const [storyIndex, setStoryIndex] = useState(initialStoryIndex);
  const [itemIndex, setItemIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);
  const accRef = useRef<number>(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (open) {
      setStoryIndex(initialStoryIndex);
      setItemIndex(0);
    }
  }, [open, initialStoryIndex]);

  useEffect(() => {
    if (open) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  const currentStory = stories[storyIndex];
  const currentItem = currentStory?.items[itemIndex];

  const goNext = useCallback(() => {
    if (!currentStory) return;
    if (itemIndex < currentStory.items.length - 1) {
      setItemIndex((i) => i + 1);
    } else if (storyIndex < stories.length - 1) {
      setStoryIndex((s) => s + 1);
      setItemIndex(0);
    } else {
      onClose();
    }
  }, [currentStory, itemIndex, storyIndex, onClose]);

  const goPrev = useCallback(() => {
    if (itemIndex > 0) {
      setItemIndex((i) => i - 1);
    } else if (storyIndex > 0) {
      const prevStory = stories[storyIndex - 1];
      setStoryIndex((s) => s - 1);
      setItemIndex(prevStory.items.length - 1);
    }
  }, [itemIndex, storyIndex]);

  // progress timer
  useEffect(() => {
    if (!open) return;
    setProgress(0);
    accRef.current = 0;
    startRef.current = performance.now();

    const tick = (now: number) => {
      if (!paused) {
        const elapsed = accRef.current + (now - startRef.current);
        const pct = Math.min(1, elapsed / STORY_DURATION_MS);
        setProgress(pct);
        if (pct >= 1) {
          goNext();
          return;
        }
      } else {
        startRef.current = now;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [open, storyIndex, itemIndex, paused, goNext]);

  // pause handling
  useEffect(() => {
    if (paused) {
      accRef.current += performance.now() - startRef.current;
    } else {
      startRef.current = performance.now();
    }
  }, [paused]);

  // keyboard
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, goNext, goPrev, onClose]);

  // preload adjacent items only (next item, then first item of next story)
  useEffect(() => {
    if (!open || !currentStory) return;
    const toPreload: string[] = [];
    const next = currentStory.items[itemIndex + 1];
    if (next?.type === 'image') toPreload.push(next.src);
    const nextStory = stories[storyIndex + 1];
    const nextStoryFirst = nextStory?.items[0];
    if (nextStoryFirst?.type === 'image') toPreload.push(nextStoryFirst.src);
    toPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [open, currentStory, itemIndex, storyIndex]);

  if (!open || !currentStory || !currentItem) return null;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    setPaused(false);
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 animate-fadeIn" role="dialog" aria-modal="true" aria-label="Story viewer">
      <div className="absolute inset-0 sm:inset-4 sm:rounded-3xl overflow-hidden bg-cocoa flex flex-col">
        {/* Progress bars */}
        <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 px-3 pt-3">
          {currentStory.items.map((_, i) => {
            const pct = i < itemIndex ? 100 : i === itemIndex ? progress * 100 : 0;
            return (
              <div key={i} className="flex-1 h-[3px] rounded-full bg-white/25 overflow-hidden">
                <div className="h-full bg-white" style={{ width: `${pct}%` }} />
              </div>
            );
          })}
        </div>

        {/* Header */}
        <div className="absolute top-5 left-0 right-0 z-20 flex items-center justify-between px-4 pt-3">
          <div className="flex items-center gap-2 text-white">
            <Image
              src="/images/logo/cookies-corner-logo.jpeg"
              alt="Cookies Corner"
              width={28}
              height={28}
              className="rounded-full bg-white/95 p-0.5"
            />
            <div className="leading-tight">
              <p className="font-serif text-sm">{t.stories.title[lang]}</p>
              <p className="text-[11px] text-white/70">Cookies Corner</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close stories"
            className="w-9 h-9 grid place-items-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Image area */}
        <div
          className="relative flex-1 select-none"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          onMouseDown={() => setPaused(true)}
          onMouseUp={() => setPaused(false)}
          onMouseLeave={() => setPaused(false)}
        >
          <Image
            key={`${storyIndex}-${itemIndex}`}
            src={currentItem.src}
            alt={currentItem.caption?.[lang] ?? currentStory.title[lang]}
            fill
            sizes="100vw"
            className="object-contain animate-fadeIn"
            priority
          />

          {/* Tap zones */}
          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            className="absolute left-0 top-0 bottom-0 w-1/3"
          />
          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            className="absolute right-0 top-0 bottom-0 w-1/3"
          />

          {/* Visible arrows */}
          <button
            type="button"
            aria-label="Previous"
            onClick={goPrev}
            className="hidden sm:grid absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={goNext}
            className="hidden sm:grid absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Caption */}
        <div className="relative z-10 px-5 pb-3 pt-4 bg-gradient-to-t from-black/80 to-transparent text-white">
          <p className="font-serif text-lg">{currentStory.title[lang]}</p>
          {currentItem.caption && (
            <p className="text-sm text-white/85 mt-0.5">{currentItem.caption[lang]}</p>
          )}
          <p className={`text-[11px] text-white/60 mt-1 ${lang === 'ar' ? 'font-arabic' : 'font-script text-sm'}`}>
            {t.stories.madeWith[lang]}
          </p>
        </div>

        {/* Bottom thumbnails */}
        <div className="relative z-10 flex gap-2 overflow-x-auto no-scrollbar px-3 pb-4">
          {stories.map((s, i) => {
            const active = i === storyIndex;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => {
                  setStoryIndex(i);
                  setItemIndex(0);
                }}
                aria-label={`Go to story ${s.title[lang]}`}
                className={`relative shrink-0 rounded-full overflow-hidden ${active ? 'ring-2 ring-blush' : 'ring-1 ring-white/30'}`}
                style={{ width: 44, height: 44 }}
              >
                <Image src={s.coverImage} alt={s.title[lang]} fill sizes="44px" className="object-cover" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
