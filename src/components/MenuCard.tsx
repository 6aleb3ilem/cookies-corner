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
    <article className="bg-white rounded-3xl shadow-soft border border-beige/40 overflow-hidden flex flex-col">
      <div className="flex items-start gap-2 p-3 pb-1">
        <span className="w-8 h-8 grid place-items-center rounded-full bg-lavenderSoft text-lavender">
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
      </div>
      <div className="px-3 pb-3 flex items-center justify-between">
        <p className="text-blush font-bold">{product.price}</p>
        <a
          href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I'd like to order: ${product.name.en}`)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 bg-blush hover:bg-blush/90 text-white text-[11px] font-semibold rounded-full px-2.5 py-1.5"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
          {t.featured.order[lang]}
        </a>
      </div>
    </article>
  );
}
