'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenuDrawer from './MobileMenuDrawer';
import PromoRibbon from './PromoRibbon';
import { CartIcon, MenuIcon } from './Icons';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();

  return (
    <header className="sticky top-0 z-30 bg-cream/95 backdrop-blur border-b border-beige/50">
      <PromoRibbon />
      <div className="flex items-center justify-between gap-3 px-4 py-3">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="w-10 h-10 grid place-items-center rounded-full bg-blushSoft text-blush"
        >
          <MenuIcon className="w-5 h-5" />
        </button>

        <Link href="/" className="flex items-center gap-2 min-w-0">
          <Image
            src="/images/logo/cookies-corner-logo.png"
            alt="Cookies Corner"
            width={36}
            height={36}
            className="rounded-full object-contain"
          />
          <span className="font-serif text-lg text-cocoa whitespace-nowrap">
            Cookies Corner
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <LanguageSwitcher compact />
          <Link
            href="/shop"
            aria-label="Cart"
            className="relative w-10 h-10 grid place-items-center rounded-full bg-blushSoft text-blush"
          >
            <CartIcon className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-blush text-white text-[10px] w-4 h-4 grid place-items-center rounded-full font-semibold">
              0
            </span>
          </Link>
        </div>
      </div>
      {/* Hidden on mobile, shown sm+: optional row showing nav inline. Keeping minimal. */}
      <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-medium text-cocoa/80 pb-3">
        <Link href="/" className="hover:text-blush">{t.nav.home[lang]}</Link>
        <Link href="/shop" className="hover:text-blush">{t.nav.shop[lang]}</Link>
        <Link href="/gift-boxes" className="hover:text-blush">{t.nav.gifts[lang]}</Link>
        <Link href="/about" className="hover:text-blush">{t.nav.about[lang]}</Link>
      </nav>
      <MobileMenuDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
