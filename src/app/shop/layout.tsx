import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Cookie Menu in Nouakchott | Cookies Corner' },
  description:
    'Browse the full Cookies Corner menu — handmade cookie boxes, gourmet stuffed cookies, cookie cake boxes and dessert scoops, baked fresh daily in Nouakchott.',
  openGraph: {
    title: 'Cookie Menu in Nouakchott | Cookies Corner',
    description:
      'Browse the full Cookies Corner menu — handmade cookie boxes, gourmet stuffed cookies, cookie cake boxes and dessert scoops, baked fresh daily in Nouakchott.',
    images: ['/images/products/box-cookies.webp'],
    type: 'website',
  },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return children;
}
