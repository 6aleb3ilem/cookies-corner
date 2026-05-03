'use client';

import { featuredProducts } from '@/data/products';
import ProductCard from './ProductCard';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';

export default function FeaturedProducts() {
  const { lang } = useLang();
  return (
    <section className="px-5 pb-10">
      <div className="mb-3">
        <h2 className="font-serif text-2xl text-cocoa">{t.featured.title[lang]}</h2>
        <p className="text-sm text-cocoa/60">{t.featured.sub[lang]}</p>
      </div>
      <div className="-mx-5 px-5 flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory">
        {featuredProducts.map((p) => (
          <div key={p.id} className="snap-start shrink-0 w-44 sm:w-52">
            <ProductCard product={p} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
