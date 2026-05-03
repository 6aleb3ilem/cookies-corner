'use client';

import { useLang } from '@/i18n/LanguageContext';
import { LANGS } from '@/i18n/translations';

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center gap-1 rounded-full bg-lavenderSoft p-1 ${compact ? 'text-[11px]' : 'text-xs'}`}>
      {LANGS.map((l) => {
        const active = lang === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={`Switch language to ${l.label}`}
            className={`rounded-full px-2.5 py-1 font-medium transition ${
              active ? 'bg-lavender text-white shadow-soft' : 'text-cocoa/70 hover:text-cocoa'
            } ${l.code === 'ar' ? 'font-arabic' : ''}`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
