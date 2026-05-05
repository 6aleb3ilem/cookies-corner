'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useLang } from '@/i18n/LanguageContext';
import { t } from '@/i18n/translations';
import { CloseIcon, WhatsAppIcon } from './Icons';
import { WHATSAPP_URL } from '@/data/products';

type Props = { open: boolean; onClose: () => void };

export default function MobileMenuDrawer({ open, onClose }: Props) {
  const { lang } = useLang();

  useEffect(() => {
    if (open) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  if (!open) return null;

  const links = [
    { href: '/', label: t.nav.home[lang] },
    { href: '/shop', label: t.nav.shop[lang] },
    { href: '/gift-boxes', label: t.nav.gifts[lang] },
    { href: '/about', label: t.nav.about[lang] },
    { href: '/about#contact', label: t.nav.contact[lang] },
  ];

  return (
    <div className="fixed inset-0 z-50 animate-fadeIn" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-cocoa/40"
      />
      <aside className="absolute top-0 left-0 h-full w-[82%] max-w-sm bg-cream shadow-card flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-beige/60 bg-lavenderSoft/40">
          <Link href="/" onClick={onClose} className="flex items-center gap-2 min-w-0">
            <Image
              src="/images/logo/cookies-corner-logo.jpeg"
              alt="Cookies Corner"
              width={40}
              height={40}
              className="rounded-full object-contain shrink-0"
            />
            <span className="font-serif text-lg text-cocoa truncate">Cookies Corner</span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="w-9 h-9 grid place-items-center rounded-full bg-blushSoft text-blush shrink-0"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex flex-col p-4 gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="px-4 py-3 rounded-2xl text-cocoa hover:bg-blushSoft text-base font-medium"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto p-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full bg-blush hover:bg-blush/90 text-white font-semibold rounded-full py-3.5 shadow-soft"
          >
            <WhatsAppIcon className="w-5 h-5" />
            {t.nav.order[lang]}
          </a>
        </div>
      </aside>
    </div>
  );
}
