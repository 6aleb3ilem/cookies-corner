'use client';

import { useState } from 'react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { allProducts, ProductCategory, WHATSAPP_URL } from '@/data/products';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { WhatsAppIcon } from '@/components/Icons';

type Filter = 'all' | ProductCategory;

const FILTERS: Filter[] = ['all', 'boxes', 'cookies', 'cake', 'dessert'];

export default function ShopPage() {
  const { lang } = useLang();
  const [filter, setFilter] = useState<Filter>('all');
  const items = filter === 'all' ? allProducts : allProducts.filter((p) => p.category === filter);

  const labelFor = (f: Filter) => {
    if (f === 'all') return t.shop.all[lang];
    return t.shop[f][lang];
  };

  return (
    <>
      <Header />
      <main className="max-w-screen-md mx-auto px-5 py-6">
        <h1 className="font-serif text-3xl text-cocoa">{t.shop.title[lang]}</h1>
        <p className="text-sm text-cocoa/60 mt-1">{t.shop.sub[lang]}</p>

        <div className="mt-5 -mx-5 px-5 flex gap-2 overflow-x-auto no-scrollbar">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold border transition ${
                filter === f
                  ? 'bg-blush text-white border-blush shadow-soft'
                  : 'bg-white text-cocoa/70 border-beige hover:bg-blushSoft hover:text-blush'
              }`}
            >
              {labelFor(f)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-5">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} compact />
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 flex items-center justify-center gap-2 w-full bg-blush hover:bg-blush/90 text-white font-semibold rounded-full py-3.5 shadow-soft"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {t.contact.whatsapp[lang]}
        </a>
      </main>
      <Footer />
    </>
  );
}
