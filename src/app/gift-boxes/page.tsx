'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { allProducts, WHATSAPP_URL } from '@/data/products';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { GiftIcon, HeartIcon, WhatsAppIcon } from '@/components/Icons';

export default function GiftBoxesPage() {
  const { lang } = useLang();
  const boxes = allProducts.filter((p) => p.category === 'boxes' || p.category === 'cake');

  const occasions = [
    { key: 'birthdays', icon: '🎂' },
    { key: 'thankyous', icon: '💌' },
    { key: 'celebrations', icon: '✨' },
    { key: 'cravings', icon: '🍪' },
    { key: 'custom', icon: '🎁' },
  ] as const;

  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto px-5 py-6">
        <section className="rounded-3xl bg-gradient-to-br from-blushSoft via-cream to-lavenderSoft p-5 shadow-soft border border-beige/40">
          <div className="grid sm:grid-cols-2 gap-5 items-center">
            <div>
              <h1 className="font-serif text-3xl text-cocoa">{t.giftPage.title[lang]}</h1>
              <p className="text-sm text-cocoa/70 mt-2">{t.giftPage.sub[lang]}</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-blush hover:bg-blush/90 text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow-soft"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t.contact.whatsapp[lang]}
              </a>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-card">
              <Image
                src="/images/hero/hero-gift-box.png"
                alt="Premium gift box"
                fill
                sizes="(max-width: 640px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl text-cocoa mb-3">{t.giftPage.title[lang]}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {boxes.map((p) => (
              <ProductCard key={p.id} product={p} compact />
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-serif text-2xl text-cocoa mb-3">{t.giftPage.occasionsTitle[lang]}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {occasions.map((o) => (
              <div key={o.key} className="bg-white rounded-2xl p-4 shadow-soft border border-beige/40 text-center">
                <div className="text-2xl">{o.icon}</div>
                <p className="mt-1.5 font-semibold text-sm text-cocoa">
                  {t.giftPage.occasions[o.key][lang]}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-lavenderSoft p-5 shadow-soft border border-beige/40">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 grid place-items-center rounded-full bg-white text-lavender shrink-0">
              <HeartIcon className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-serif text-xl text-cocoa">{t.giftPage.customTitle[lang]}</h3>
              <p className="text-sm text-cocoa/70 mt-1">{t.giftPage.customDesc[lang]}</p>
            </div>
          </div>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi! I'd like a gift box with a custom message card.")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center justify-center gap-2 w-full bg-blush hover:bg-blush/90 text-white font-semibold rounded-full py-3 shadow-soft"
          >
            <GiftIcon className="w-5 h-5" />
            {t.contact.whatsapp[lang]}
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
