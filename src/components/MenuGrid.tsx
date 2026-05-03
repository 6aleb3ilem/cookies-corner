'use client';

import { menuProducts } from '@/data/products';
import MenuCard from './MenuCard';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';

export default function MenuGrid() {
  const { lang } = useLang();
  return (
    <section className="px-5 pb-10">
      <div className="mb-3">
        <h2 className="font-serif text-2xl text-cocoa">{t.menu.title[lang]}</h2>
        <p className="text-sm text-cocoa/60">{t.menu.sub[lang]}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {menuProducts.map((p) => (
          <MenuCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
