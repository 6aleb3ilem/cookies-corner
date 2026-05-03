import type { SVGProps } from 'react';

export const HeartIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

export const CookieIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M21 12a9 9 0 11-9-9 4 4 0 004 4 4 4 0 004 4 4 4 0 001 1z" />
    <circle cx="9" cy="10" r="0.7" fill="currentColor" />
    <circle cx="13" cy="14" r="0.7" fill="currentColor" />
    <circle cx="9" cy="15" r="0.7" fill="currentColor" />
    <circle cx="16" cy="11" r="0.7" fill="currentColor" />
  </svg>
);

export const GiftIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="8" width="18" height="13" rx="2" />
    <path d="M3 12h18M12 8v13" />
    <path d="M7.5 8a2.5 2.5 0 010-5C9 3 12 5 12 8c0-3 3-5 4.5-5a2.5 2.5 0 010 5" />
  </svg>
);

export const MenuIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const CartIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 4h2l2.4 11.4A2 2 0 009.36 17h7.28a2 2 0 001.96-1.6L20 8H6" />
    <circle cx="9" cy="20" r="1.4" />
    <circle cx="17" cy="20" r="1.4" />
  </svg>
);

export const CloseIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const ChevronLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

export const ChevronRight = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export const WhatsAppIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.5 3.5A11.5 11.5 0 003 19.7L1.5 23l3.4-1.5A11.5 11.5 0 1020.5 3.5zM12 21a9 9 0 01-4.6-1.3l-.3-.2-2 .9.9-2-.2-.3A9 9 0 1112 21zm5.1-6.7c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1a7.4 7.4 0 01-2.1-1.3 8 8 0 01-1.5-1.8c-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-1 2.3c0 1.4 1 2.8 1.2 3 .1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.3.3-.7.3-1.2.2-1.3 0-.2-.2-.2-.5-.4z" />
  </svg>
);

export const InstagramIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

export const SnapchatIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 2c3.4 0 5.6 2.4 5.6 5.7 0 1.3-.1 2.7-.1 2.9.4.2.9.4 1.5.4.4 0 .9-.2 1.2-.3.2-.1.4 0 .5.2.1.3 0 .5-.2.7-.4.4-1.4.7-2.1.9-.2 0-.2.2-.1.5.4 1 1.3 1.9 3 2.4.3.1.4.4.2.7-.5.7-2 .9-2.7 1-.1.2-.2.6-.3 1-.1.3-.4.4-.7.3-.4-.1-.9-.2-1.6-.2-1.5 0-2 1.7-4.2 1.7-2.2 0-2.8-1.7-4.2-1.7-.7 0-1.2.1-1.6.2-.3.1-.6 0-.7-.3-.1-.4-.2-.8-.3-1-.7-.1-2.2-.3-2.7-1-.2-.3-.1-.6.2-.7 1.7-.5 2.6-1.4 3-2.4.1-.3.1-.5-.1-.5-.7-.2-1.7-.5-2.1-.9-.2-.2-.3-.4-.2-.7.1-.2.3-.3.5-.2.3.1.8.3 1.2.3.6 0 1.1-.2 1.5-.4 0-.2-.1-1.6-.1-2.9C6.4 4.4 8.6 2 12 2z" />
  </svg>
);

export const TikTokIcon = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M14 3v10.5a3.5 3.5 0 11-3.5-3.5h.5V7a6.5 6.5 0 106.5 6.5V8.7a8 8 0 004.5 1.4V7a5.5 5.5 0 01-4-4z" />
  </svg>
);
