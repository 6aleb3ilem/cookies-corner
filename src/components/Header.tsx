'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import PromoRibbon from './PromoRibbon';
import { CartIcon, MenuIcon } from './Icons';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { useCart } from '@/cart/CartContext';

const MobileMenuDrawer = dynamic(() => import('./MobileMenuDrawer'), { ssr: false });

export default function Header() {
  const [open, setOpen] = useState(false);
  const { lang } = useLang();
  const { count, open: openCart } = useCart();

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

        <Link href="/" className="flex items-center gap-2 min-w-0 shrink">
          <Image
            src="/images/logo/cookies-corner-logo.jpeg"
            alt="Cookies Corner"
            width={36}
            height={36}
            priority
            className="rounded-full object-contain shrink-0"
          />
          <span className="hidden sm:inline font-serif text-lg text-cocoa whitespace-nowrap truncate">
            Cookies Corner
          </span>
        </Link>

        <div className="flex items-center gap-2 shrink-0">
          <LanguageSwitcher compact />
          <button
            type="button"
            onClick={openCart}
            aria-label={t.cart.viewOrder[lang]}
            className="relative w-10 h-10 grid place-items-center rounded-full bg-blushSoft text-blush shrink-0"
          >
            <CartIcon className="w-5 h-5" />
            <span
              className={`absolute -top-1 -right-1 text-white text-[10px] w-4 h-4 grid place-items-center rounded-full font-semibold ${
                count > 0 ? 'bg-blush' : 'bg-cocoa/30'
              }`}
            >
              {count}
            </span>
          </button>
        </div>
      </div>
      {/* Hidden on mobile, shown sm+: optional row showing nav inline. Keeping minimal. */}
      <nav className="hidden md:flex items-center justify-center gap-6 text-sm font-medium text-cocoa/80 pb-3">
        <Link href="/" className="hover:text-blush">{t.nav.home[lang]}</Link>
        <Link href="/shop" className="hover:text-blush">{t.nav.shop[lang]}</Link>
        <Link href="/gift-boxes" className="hover:text-blush">{t.nav.gifts[lang]}</Link>
        <Link href="/about" className="hover:text-blush">{t.nav.about[lang]}</Link>
      </nav>
      {open && <MobileMenuDrawer open={open} onClose={() => setOpen(false)} />}
    </header>
  );
}
