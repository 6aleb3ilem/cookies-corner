import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { CartProvider } from '@/cart/CartContext';
import CartDrawer from '@/components/CartDrawer';

export const metadata: Metadata = {
  metadataBase: new URL('https://cookiescorners.com'),
  title: {
    default: 'Cookies Corner Nouakchott | Handmade Cookies & Gift Boxes',
    template: '%s | Cookies Corner',
  },
  description:
    'Cookies Corner is a cute premium cookie gift brand in Nouakchott — handmade, soft, chocolate-heavy, and perfect for gifts, cravings, and small celebrations.',
  keywords: [
    'Cookies Nouakchott',
    'cookie gift box Mauritania',
    'handmade cookies Nouakchott',
    'Cookies Corner',
    'gâteau cookies Nouakchott',
    'cookies gourmands',
  ],
  openGraph: {
    title: 'Cookies Corner Nouakchott | Handmade Cookies & Gift Boxes',
    description:
      'Cookies Corner is a cute premium cookie gift brand in Nouakchott — handmade, soft, chocolate-heavy, and perfect for gifts, cravings, and small celebrations.',
    images: ['/images/hero/hero-gift-box.webp'],
    type: 'website',
  },
  icons: {
    icon: '/images/logo/cookies-corner-logo.jpeg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700&family=Inter:wght@400;600&family=Dancing+Script:wght@600&family=Noto+Naskh+Arabic:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream text-cocoa antialiased">
        <LanguageProvider>
          <CartProvider>
            {children}
            <CartDrawer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
