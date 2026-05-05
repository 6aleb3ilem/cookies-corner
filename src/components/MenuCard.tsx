'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Product } from '@/data/products';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { useCart } from '@/cart/CartContext';
import { CookieIcon, GiftIcon, HeartIcon } from './Icons';

const ICONS = {
  boxes: GiftIcon,
  cookies: CookieIcon,
  cake: HeartIcon,
  dessert: CookieIcon,
} as const;

export default function MenuCard({ product }: { product: Product }) {
  const { lang } = useLang();
  const { add, open } = useCart();
  const Icon = ICONS[product.category];
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    add(product, qty);
    setJustAdded(true);
    open();
    setTimeout(() => setJustAdded(false), 1500);
  };

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
      <div className="px-3 pb-3 mt-auto flex items-center gap-2">
        <div
          className="inline-flex items-center rounded-full border border-beige bg-white overflow-hidden shrink-0"
          aria-label={t.cart.qty[lang]}
        >
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label={t.cart.decrease[lang]}
            className="w-7 h-7 grid place-items-center text-cocoa hover:bg-blushSoft active:scale-95 transition"
          >
            −
          </button>
          <span className="w-6 text-center text-[12px] font-semibold text-cocoa">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            aria-label={t.cart.increase[lang]}
            className="w-7 h-7 grid place-items-center text-cocoa hover:bg-blushSoft active:scale-95 transition"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={handleAdd}
          className="flex-1 bg-blush hover:bg-blush/90 active:scale-[0.98] transition text-white text-[12px] font-semibold rounded-full py-2 px-2 truncate"
        >
          {justAdded ? t.cart.added[lang] : t.cart.add[lang]}
        </button>
      </div>
    </article>
  );
}
