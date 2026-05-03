'use client';

import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { CookieIcon, GiftIcon, HeartIcon } from './Icons';

export default function FeatureBadges() {
  const { lang } = useLang();
  const items = [
    { Icon: HeartIcon, title: t.badges.handmade[lang], sub: t.badges.handmadeSub[lang], color: 'text-blush bg-blushSoft' },
    { Icon: CookieIcon, title: t.badges.chocolate[lang], sub: t.badges.chocolateSub[lang], color: 'text-cocoa bg-beige/50' },
    { Icon: GiftIcon, title: t.badges.gifting[lang], sub: t.badges.giftingSub[lang], color: 'text-lavender bg-lavenderSoft' },
  ];
  return (
    <section className="px-5 pb-6">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {items.map((it, i) => (
          <div key={i} className="bg-white rounded-2xl p-3 sm:p-4 text-center shadow-soft border border-beige/40">
            <div className={`mx-auto w-10 h-10 grid place-items-center rounded-full ${it.color}`}>
              <it.Icon className="w-5 h-5" />
            </div>
            <p className="mt-2 text-[12px] sm:text-sm font-semibold text-cocoa leading-tight">{it.title}</p>
            <p className="text-[10px] sm:text-xs text-cocoa/60 mt-0.5">{it.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
