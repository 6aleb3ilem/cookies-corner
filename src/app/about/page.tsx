'use client';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { CookieIcon, GiftIcon, HeartIcon, WhatsAppIcon } from '@/components/Icons';
import GiftingContact from '@/components/GiftingContact';

export default function AboutPage() {
  const { lang } = useLang();
  const values = [
    { Icon: HeartIcon, title: t.badges.handmade[lang], sub: t.badges.handmadeSub[lang] },
    { Icon: CookieIcon, title: t.badges.chocolate[lang], sub: t.badges.chocolateSub[lang] },
    { Icon: GiftIcon, title: t.badges.gifting[lang], sub: t.badges.giftingSub[lang] },
  ];

  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto px-5 py-6">
        <section className="rounded-3xl bg-gradient-to-br from-blushSoft via-cream to-lavenderSoft p-5 shadow-soft border border-beige/40">
          <div className="grid sm:grid-cols-2 gap-5 items-center">
            <div>
              <h1 className="font-serif text-3xl text-cocoa">{t.about.title[lang]}</h1>
              <p className="text-sm text-cocoa/70 mt-3 leading-relaxed">{t.about.intro[lang]}</p>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-white shadow-card">
              <Image
                src="/images/products/cookies-gourmands.png"
                alt="Cookies Corner story"
                fill
                sizes="(max-width: 640px) 90vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-serif text-2xl text-cocoa mb-3">{t.about.valuesTitle[lang]}</h2>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-3 sm:p-4 text-center shadow-soft border border-beige/40">
                <div className="mx-auto w-10 h-10 grid place-items-center rounded-full bg-blushSoft text-blush">
                  <v.Icon className="w-5 h-5" />
                </div>
                <p className="mt-2 text-[12px] sm:text-sm font-semibold text-cocoa leading-tight">{v.title}</p>
                <p className="text-[10px] sm:text-xs text-cocoa/60 mt-0.5">{v.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-white rounded-2xl p-4 shadow-soft border border-beige/40">
            <p className="text-[11px] uppercase tracking-wider text-blush font-semibold">{t.about.delivery[lang]}</p>
            <p className="text-sm text-cocoa/80 mt-1">{t.about.deliveryDesc[lang]}</p>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-soft border border-beige/40">
            <p className="text-[11px] uppercase tracking-wider text-lavender font-semibold">{t.about.orderTitle[lang]}</p>
            <p className="text-sm text-cocoa/80 mt-1">{t.about.orderDesc[lang]}</p>
          </div>
        </section>

        <GiftingContact />
      </main>
      <Footer />
    </>
  );
}
