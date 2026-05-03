'use client';

import Image from 'next/image';
import { Product, WHATSAPP_URL } from '@/data/products';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { HeartIcon, WhatsAppIcon } from './Icons';

export default function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { lang } = useLang();
  return (
    <article className="bg-white rounded-3xl shadow-soft border border-beige/40 overflow-hidden flex flex-col">
      <div className={`relative ${compact ? 'aspect-square' : 'aspect-[4/5]'} bg-cream`}>
        <Image
          src={product.image}
          alt={product.name[lang]}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          loading="lazy"
          className="object-cover"
        />
        <button
          type="button"
          aria-label="Save favorite"
          className="absolute top-2 right-2 w-8 h-8 grid place-items-center rounded-full bg-white/90 text-blush shadow-soft hover:bg-blushSoft"
        >
          <HeartIcon className="w-4 h-4" />
        </button>
      </div>
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="font-semibold text-sm text-cocoa leading-tight line-clamp-2">
          {product.name[lang]}
        </h3>
        {product.subtitle && (
          <p className="text-[11px] text-cocoa/60 mt-0.5">{product.subtitle[lang]}</p>
        )}
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-blush font-bold text-sm">{product.price}</p>
          <a
            href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hi! I'd like to order: ${product.name.en}`)}`}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t.featured.order[lang]} ${product.name[lang]}`}
            className="inline-flex items-center gap-1 bg-blush hover:bg-blush/90 text-white text-[11px] font-semibold rounded-full px-2.5 py-1.5"
          >
            <WhatsAppIcon className="w-3.5 h-3.5" />
            {t.featured.order[lang]}
          </a>
        </div>
      </div>
    </article>
  );
}
