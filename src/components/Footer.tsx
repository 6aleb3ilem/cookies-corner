'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { SnapchatIcon, TikTokIcon, WhatsAppIcon } from './Icons';
import { SNAPCHAT_URL, TIKTOK_URL, WHATSAPP_URL } from '@/data/products';

export default function Footer() {
  const { lang } = useLang();
  return (
    <footer className="bg-cocoa text-cream/90 mt-4">
      <div className="px-5 py-10 max-w-screen-md mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src="/images/logo/cookies-corner-logo.jpeg"
            alt="Cookies Corner"
            width={36}
            height={36}
            className="rounded-full bg-white/10 p-0.5"
          />
          <span className="font-serif text-xl">Cookies Corner</span>
        </div>
        <p className="text-sm text-cream/70 max-w-md">{t.hero.desc[lang]}</p>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
          <div>
            <p className="text-cream/50 text-[11px] uppercase tracking-wider mb-2">Menu</p>
            <ul className="space-y-1">
              <li><Link href="/" className="hover:text-blush">{t.nav.home[lang]}</Link></li>
              <li><Link href="/shop" className="hover:text-blush">{t.nav.shop[lang]}</Link></li>
              <li><Link href="/gift-boxes" className="hover:text-blush">{t.nav.gifts[lang]}</Link></li>
              <li><Link href="/about" className="hover:text-blush">{t.nav.about[lang]}</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-cream/50 text-[11px] uppercase tracking-wider mb-2">{t.footer.follow[lang]}</p>
            <div className="flex items-center gap-2">
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok @cookiescorner1"
                className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={SNAPCHAT_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Snapchat cookiescorner1"
                className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <SnapchatIcon className="w-4 h-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-white/20"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
            <p className="text-[11px] text-cream/60 mt-3 leading-snug">
              TikTok · Snap: <span className="text-cream/90">cookiescorner1</span>
            </p>
          </div>
        </div>

        <p className="text-[11px] text-cream/50 mt-8">{t.footer.rights[lang]}</p>
      </div>
    </footer>
  );
}
