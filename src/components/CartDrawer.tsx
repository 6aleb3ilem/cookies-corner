'use client';

import Image from 'next/image';
import { useEffect, useMemo } from 'react';
import { useCart } from '@/cart/CartContext';
import { menuProducts, WHATSAPP_NUMBER } from '@/data/products';
import { formatMRU, lineTotal } from '@/cart/pricing';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { CloseIcon, WhatsAppIcon } from './Icons';

export default function CartDrawer() {
  const { items, isOpen, close, setQty, remove, clear, count } = useCart();
  const { lang } = useLang();

  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [isOpen]);

  const lines = useMemo(
    () =>
      items
        .map((i) => {
          const product = menuProducts.find((p) => p.id === i.id);
          if (!product) return null;
          const total = lineTotal(product, i.qty);
          return { product, qty: i.qty, total };
        })
        .filter((x): x is { product: typeof menuProducts[number]; qty: number; total: number | null } => x !== null),
    [items],
  );

  const subtotal = useMemo(
    () => lines.reduce((sum, l) => sum + (l.total ?? 0), 0),
    [lines],
  );
  const hasUnpricedLine = lines.some((l) => l.total == null);

  const whatsappHref = useMemo(() => {
    if (lines.length === 0) return `https://wa.me/${WHATSAPP_NUMBER}`;
    const header = t.cart.summaryHeader[lang];
    const footer = t.cart.summaryFooter[lang];
    const body = lines
      .map((l, idx) => {
        const name = l.product.name[lang];
        const totalPart = l.total != null ? ` — ${formatMRU(l.total)}` : '';
        return `${idx + 1}. ${name} ×${l.qty}${totalPart}`;
      })
      .join('\n');
    const totalLine = !hasUnpricedLine
      ? `\n\n${t.cart.total[lang]}: ${formatMRU(subtotal)}`
      : '';
    const message = `${header}\n\n${body}${totalLine}\n\n${footer}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }, [lines, subtotal, hasUnpricedLine, lang]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] animate-fadeIn" role="dialog" aria-modal="true" aria-label={t.cart.title[lang]}>
      <button
        type="button"
        aria-label="Close cart"
        onClick={close}
        className="absolute inset-0 bg-cocoa/60 backdrop-blur-sm"
      />
      <aside className="absolute top-0 right-0 h-full w-[88%] max-w-md bg-white shadow-2xl border-l border-beige flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-beige bg-blushSoft">
          <div className="min-w-0">
            <h2 className="font-serif text-xl text-cocoa truncate">{t.cart.title[lang]}</h2>
            <p className="text-xs text-cocoa/60 mt-0.5">
              {count} {count === 1 ? t.cart.item[lang] : t.cart.items[lang]}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close cart"
            onClick={close}
            className="w-9 h-9 grid place-items-center rounded-full bg-white text-blush border border-beige shrink-0"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {lines.length === 0 ? (
            <p className="text-sm text-cocoa/60 text-center py-12 px-4">{t.cart.empty[lang]}</p>
          ) : (
            <ul className="flex flex-col gap-3">
              {lines.map((l) => (
                <li
                  key={l.product.id}
                  className="bg-cream/60 rounded-2xl p-3 border border-beige/50 flex gap-3"
                >
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white shrink-0">
                    <Image
                      src={l.product.image}
                      alt={l.product.name[lang]}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-sm text-cocoa truncate">
                        {l.product.name[lang]}
                      </h3>
                      <button
                        type="button"
                        onClick={() => remove(l.product.id)}
                        aria-label={t.cart.remove[lang]}
                        className="text-cocoa/40 hover:text-blush text-xs"
                      >
                        <CloseIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-[11px] text-cocoa/60 mt-0.5">
                      {l.total != null ? formatMRU(l.total) : l.product.price}
                    </p>
                    <div className="mt-2 inline-flex items-center rounded-full border border-beige bg-white overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setQty(l.product.id, l.qty - 1)}
                        aria-label={t.cart.decrease[lang]}
                        className="w-7 h-7 grid place-items-center text-cocoa hover:bg-blushSoft"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold text-cocoa">
                        {l.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(l.product.id, l.qty + 1)}
                        aria-label={t.cart.increase[lang]}
                        className="w-7 h-7 grid place-items-center text-cocoa hover:bg-blushSoft"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-beige p-4 bg-white">
            {!hasUnpricedLine && (
              <div className="flex items-center justify-between text-cocoa font-semibold mb-3">
                <span>{t.cart.total[lang]}</span>
                <span className="text-blush">{formatMRU(subtotal)}</span>
              </div>
            )}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blush hover:bg-blush/90 active:scale-[0.98] transition text-white font-semibold rounded-full py-3.5 shadow-soft"
            >
              <WhatsAppIcon className="w-5 h-5" />
              {t.cart.sendWhatsapp[lang]}
            </a>
            <button
              type="button"
              onClick={clear}
              className="mt-2 w-full text-xs text-cocoa/60 hover:text-blush py-2"
            >
              {t.cart.clear[lang]}
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
