'use client';

import Image from 'next/image';
import { Product, WHATSAPP_URL } from '@/data/products';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { CookieIcon, GiftIcon, HeartIcon, WhatsAppIcon } from './Icons';

const ICONS = {
  boxes: GiftIcon,
  cookies: CookieIcon,
  cake: HeartIcon,
  dessert: CookieIcon,
} as const;

export default function MenuCard({ product }: { product: Product }) {
  const { lang } = useLang();
  const Icon = ICONS[product.category];
  return (
    <article className="bg-white rounded-3xl shadow-soft border border-beige/40 overflow-hidden flex flex-col hover:shadow-card hover:-translate-y-0.5 transition">
      <div className="flex items-start gap-2 p-3 pb-1">
        <span className="w-8 h-8 grid place-items-center rounded-full bg-lavenderSoft text-lavender shrink-0">
          <Icon className="w-4 h-4" />
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold text-sm text-cocoa truncate">{product.name[lang]}</h3>
          {product.subtitle && (
            <p className="text-[11px] text-cocoa/60 truncate">{product.subtitle[lang]}</p>
          )}
        </div>
      </div>
      <div className="relative aspect-square mx-3 my-2 rounded-2xl overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          loading="lazy"
          className="object-cover"
        />
        <span className="absolute top-2 left-2 bg-white/95 text-blush text-[11px] font-bold rounded-full px-2 py-0.5 shadow-soft">
          {product.price}
        </span>
      </div>
      {product.tiers && (
        <ul className="mx-3 mb-2 grid grid-cols-3 gap-1 text-[11px]">
          {product.tiers.map((tier) => (
            <li
              key={tier.qty}
              className="flex flex-col items-center rounded-xl bg-blushSoft text-cocoa px-1 py-1.5"
            >
              <span className="font-semibold text-cocoa/70">×{tier.qty}</span>
              <span className="font-bold text-blush">{tier.price}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="px-3 pb-3 mt-auto">
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I'd like to order: ${product.name.en}`)}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 w-full bg-blush hover:bg-blush/90 active:scale-[0.98] transition text-white text-[12px] font-semibold rounded-full py-2"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          {t.featured.order[lang]}
        </a>
      </div>
    </article>
  );
}
