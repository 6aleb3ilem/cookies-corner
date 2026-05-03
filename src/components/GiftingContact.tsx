'use client';

import Link from 'next/link';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { EMAIL, WHATSAPP_PHONE, WHATSAPP_URL } from '@/data/products';
import { WhatsAppIcon } from './Icons';

export default function GiftingContact() {
  const { lang } = useLang();
  return (
    <section id="contact" className="px-5 pb-10">
      <div className="rounded-3xl bg-gradient-to-br from-blushSoft via-cream to-lavenderSoft p-6 shadow-soft border border-beige/40">
        <h2 className="font-serif text-2xl text-cocoa">{t.gifting.title[lang]}</h2>
        <p className="text-sm text-cocoa/70 mt-1">{t.gifting.desc[lang]}</p>
        <Link
          href="/gift-boxes"
          className="inline-block mt-4 bg-blush hover:bg-blush/90 text-white font-semibold rounded-full px-5 py-2.5 text-sm shadow-soft"
        >
          {t.gifting.cta[lang]}
        </Link>

        <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
          <div className="bg-white rounded-2xl p-3">
            <p className="text-[11px] text-cocoa/50 font-semibold uppercase tracking-wider">{t.contact.phone[lang]}</p>
            <p className="text-cocoa font-medium mt-0.5">{WHATSAPP_PHONE}</p>
          </div>
          <div className="bg-white rounded-2xl p-3">
            <p className="text-[11px] text-cocoa/50 font-semibold uppercase tracking-wider">{t.contact.email[lang]}</p>
            <p className="text-cocoa font-medium mt-0.5 break-all text-xs">{EMAIL}</p>
          </div>
          <div className="bg-white rounded-2xl p-3">
            <p className="text-[11px] text-cocoa/50 font-semibold uppercase tracking-wider">{t.contact.location[lang]}</p>
            <p className="text-cocoa font-medium mt-0.5">{t.contact.locationValue[lang]}</p>
          </div>
          <div className="bg-white rounded-2xl p-3">
            <p className="text-[11px] text-cocoa/50 font-semibold uppercase tracking-wider">{t.contact.hours[lang]}</p>
            <p className="text-cocoa font-medium mt-0.5">{t.contact.hoursValue[lang]}</p>
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-5 flex items-center justify-center gap-2 w-full bg-cocoa hover:bg-cocoa/90 text-white font-semibold rounded-full py-3.5 shadow-soft"
        >
          <WhatsAppIcon className="w-5 h-5" />
          {t.contact.whatsapp[lang]}
        </a>
      </div>
    </section>
  );
}
