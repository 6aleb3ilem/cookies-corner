'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';

export default function HeroSection() {
  const { lang } = useLang();
  return (
    <section className="relative px-5 pt-6 pb-10">
      <div className="rounded-3xl bg-gradient-to-br from-blushSoft via-cream to-lavenderSoft p-5 sm:p-8 shadow-soft overflow-hidden">
        <div className="grid sm:grid-cols-2 gap-6 items-center">
          <div className="order-2 sm:order-1">
            <p className={`text-blush font-script text-2xl mb-3 ${lang === 'ar' ? 'font-arabic text-xl' : ''}`}>
              {t.hero.script[lang]}
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl leading-tight text-cocoa">
              {t.hero.headline[lang]}
            </h1>
            <p className="mt-4 text-cocoa/70 text-[15px] leading-relaxed">
              {t.hero.desc[lang]}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="bg-blush hover:bg-blush/90 active:scale-95 transition text-white font-semibold rounded-full px-6 py-3 shadow-soft text-sm inline-flex items-center gap-2"
              >
                {t.hero.cta1[lang]} <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/gift-boxes"
                className="bg-white text-cocoa hover:bg-lavenderSoft hover:border-lavender active:scale-95 transition border border-beige rounded-full px-6 py-3 text-sm font-semibold"
              >
                {t.hero.cta2[lang]}
              </Link>
            </div>
          </div>
          <div className="order-1 sm:order-2 relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-card">
              <Image
                src="/images/hero/hero-gift-box.webp"
                alt="Cookies Corner premium gift box"
                fill
                priority
                sizes="(max-width: 640px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-3 -left-3 bg-white rounded-2xl shadow-soft p-3 flex items-center gap-2">
              <span className="w-8 h-8 grid place-items-center rounded-full bg-lavenderSoft text-lavender">★</span>
              <span className="text-xs font-semibold text-cocoa">Premium · Handmade</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
