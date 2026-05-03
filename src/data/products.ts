export type ProductCategory = 'boxes' | 'cookies' | 'dessert' | 'cake';

export type Product = {
  id: string;
  name: { en: string; ar: string; fr: string };
  subtitle?: { en: string; ar: string; fr: string };
  price: string;
  category: ProductCategory;
  image: string;
};

export const menuProducts: Product[] = [
  {
    id: 'box-cookies-8',
    name: { en: 'Box cookies', ar: 'علبة كوكيز', fr: 'Box cookies' },
    subtitle: { en: '8 pieces', ar: '8 قطع', fr: '8 pièces' },
    price: '350 MRU',
    category: 'boxes',
    image: '/images/products/box-cookies.png',
  },
  {
    id: 'cookies-scoop',
    name: { en: 'Cookies scoop', ar: 'كوكيز سكوب', fr: 'Cookies scoop' },
    price: '250 MRU',
    category: 'dessert',
    image: '/images/products/cookies-scoop.png',
  },
  {
    id: 'cake-cookies',
    name: { en: 'Cake cookies', ar: 'كيك كوكيز', fr: 'Cake cookies' },
    price: '500 MRU',
    category: 'cake',
    image: '/images/products/cake-cookies.png',
  },
  {
    id: 'cookies-gourmands',
    name: { en: 'Cookies gourmands', ar: 'كوكيز غورمان', fr: 'Cookies gourmands' },
    price: '150 MRU',
    category: 'cookies',
    image: '/images/products/cookies-gourmands.png',
  },
];

export const featuredProducts: Product[] = [
  {
    id: 'stuffed-chocolate-cookies',
    name: {
      en: 'Stuffed Chocolate Cookies',
      ar: 'كوكيز شوكولاتة محشي',
      fr: 'Cookies fourrés au chocolat',
    },
    price: '200 MRU',
    category: 'cookies',
    image: '/images/products/stuffed-chocolate-cookies.png',
  },
  {
    id: 'pistachio-nuts-cookies',
    name: {
      en: 'Pistachio & Nuts Cookies',
      ar: 'كوكيز فستق ومكسرات',
      fr: 'Cookies pistache & noix',
    },
    price: '220 MRU',
    category: 'cookies',
    image: '/images/products/pistachio-nuts-cookies.png',
  },
  {
    id: 'gift-box-6',
    name: { en: 'Gift Box – 6 Cookies', ar: 'علبة هدية – 6 قطع', fr: 'Coffret cadeau – 6 cookies' },
    price: '300 MRU',
    category: 'boxes',
    image: '/images/products/gift-box-6.png',
  },
  {
    id: 'thank-you-cake-cookie',
    name: { en: 'Thank You Cake Cookie', ar: 'كيك كوكيز شكراً', fr: 'Thank You Cake Cookie' },
    price: '500 MRU',
    category: 'cake',
    image: '/images/products/thank-you-cake-cookie.png',
  },
  {
    id: 'chocolate-drizzle-cookies',
    name: {
      en: 'Chocolate Drizzle Cookies',
      ar: 'كوكيز برشّة شوكولاتة',
      fr: 'Cookies nappés de chocolat',
    },
    price: '180 MRU',
    category: 'cookies',
    image: '/images/products/chocolate-drizzle-cookies.png',
  },
  {
    id: 'mini-celebration-box',
    name: { en: 'Mini Celebration Box', ar: 'علبة احتفال صغيرة', fr: 'Mini coffret célébration' },
    price: '350 MRU',
    category: 'boxes',
    image: '/images/products/mini-celebration-box.png',
  },
];

export const allProducts: Product[] = [...menuProducts, ...featuredProducts];

export const WHATSAPP_URL = 'https://wa.me/22245255325';
export const WHATSAPP_PHONE = '+222 45 25 53 25';
export const EMAIL = 'hello@cookiescorner.mr';
