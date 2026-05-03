'use client';

import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';

export default function PromoRibbon() {
  const { lang } = useLang();
  return (
    <div className="bg-blush text-white text-[12px] sm:text-xs px-4 py-2 text-center font-medium tracking-wide">
      {t.promo[lang]}
    </div>
  );
}
