'use client';

import Image from 'next/image';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { WHATSAPP_URL } from '@/data/products';
import { WhatsAppIcon } from './Icons';

export default function BakerSection() {
  const { lang } = useLang();
  return (
    <section className="px-5 pb-10">
      <div className="rounded-3xl bg-gradient-to-br from-lavenderSoft via-cream to-blushSoft p-5 sm:p-7 shadow-soft border border-beige/40">
        <div className="grid sm:grid-cols-[1fr_1.2fr] gap-4 items-center">
          <div className="relative mx-auto w-44 sm:w-full max-w-[240px] aspect-[5/6]">
            <Image
              src="/images/baker.svg"
              alt="Anime baker character — the girl behind every cookie"
              fill
              sizes="(max-width: 640px) 200px, 260px"
              className="object-contain drop-shadow-[0_8px_18px_rgba(43,23,18,0.18)]"
              priority={false}
            />
          </div>
          <div>
            <p className="text-blush text-xs uppercase tracking-widest font-semibold">
              {t.baker.eyebrow[lang]}
            </p>
            <h2 className="font-serif text-2xl text-cocoa mt-1 leading-tight">
              {t.baker.title[lang]}
            </h2>
            <p className="text-sm text-cocoa/70 mt-2 leading-relaxed">
              {t.baker.desc[lang]}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-blush hover:bg-blush/90 active:scale-95 transition text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow-soft"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t.contact.whatsapp[lang]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
