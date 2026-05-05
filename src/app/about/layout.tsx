import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { absolute: 'About Cookies Corner | Handmade Cookies in Nouakchott' },
  description:
    'Cookies Corner started as a home kitchen in Nouakchott, baking soft chocolate-heavy cookies by hand. Discover our story, values and how we deliver.',
  openGraph: {
    title: 'About Cookies Corner | Handmade Cookies in Nouakchott',
    description:
      'Cookies Corner started as a home kitchen in Nouakchott, baking soft chocolate-heavy cookies by hand. Discover our story, values and how we deliver.',
    images: ['/images/products/cookies-gourmands.webp'],
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
