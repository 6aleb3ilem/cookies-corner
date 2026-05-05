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
    <div
      className="fixed inset-0 z-[100] animate-fadeIn"
      role="dialog"
      aria-modal="true"
      style={{ height: '100vh', isolation: 'isolate' }}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(43, 23, 18, 0.7)', backdropFilter: 'blur(4px)' }}
      />
      <aside
        className="absolute top-0 bottom-0 left-0 w-[84%] max-w-sm flex flex-col"
        style={{
          backgroundColor: '#FFFFFF',
          boxShadow: '0 25px 60px -10px rgba(0,0,0,0.45)',
          borderRight: '1px solid #EFD8C7',
          height: '100vh',
        }}
      >
        <div
          className="flex items-center justify-between p-5"
          style={{ backgroundColor: '#FDE7EE', borderBottom: '1px solid #EFD8C7' }}
        >
          <Link href="/" onClick={onClose} className="flex items-center gap-2 min-w-0">
            <Image
              src="/images/logo/cookies-corner-logo.jpeg"
              alt="Cookies Corner"
              width={40}
              height={40}
              className="rounded-full object-contain shrink-0"
            />
            <span
              className="font-serif text-lg truncate"
              style={{ color: '#2B1712' }}
            >
              Cookies Corner
            </span>
          </Link>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="w-9 h-9 grid place-items-center rounded-full shrink-0"
            style={{ backgroundColor: '#FFFFFF', color: '#EF6F91', border: '1px solid #EFD8C7' }}
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>
        <nav
          className="flex flex-col p-4 gap-1 flex-1 overflow-y-auto"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="px-4 py-3.5 rounded-2xl text-base font-semibold hover:bg-blushSoft transition"
              style={{ color: '#2B1712' }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div
          className="p-5"
          style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #EFD8C7' }}
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full font-semibold rounded-full py-3.5"
            style={{
              backgroundColor: '#EF6F91',
              color: '#FFFFFF',
              boxShadow: '0 6px 24px -10px rgba(43, 23, 18, 0.35)',
            }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            {t.nav.order[lang]}
          </a>
        </div>
      </aside>
    </div>
  );
}
