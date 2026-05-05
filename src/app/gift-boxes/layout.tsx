import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'Cookie Gift Boxes in Nouakchott | Birthday & Party Gifts' },
  description:
    'Premium handmade cookie gift boxes in Nouakchott — perfect for birthdays, weddings, thank-yous and parties. Beautifully packaged and ready to delight.',
  openGraph: {
    title: 'Cookie Gift Boxes in Nouakchott | Birthday & Party Gifts',
    description:
      'Premium handmade cookie gift boxes in Nouakchott — perfect for birthdays, weddings, thank-yous and parties. Beautifully packaged and ready to delight.',
    images: ['/images/hero/hero-gift-box.webp'],
    type: 'website',
  },
};

export default function GiftBoxesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
