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
    image: '/images/products/box-cookies.webp',
  },
  {
    id: 'cookies-scoop',
    name: { en: 'Cookies scoop', ar: 'كوكيز سكوب', fr: 'Cookies scoop' },
    price: '250 MRU',
    category: 'dessert',
    image: '/images/products/cookies-scoop.webp',
  },
  {
    id: 'cake-cookies',
    name: { en: 'Cake cookies', ar: 'كيك كوكيز', fr: 'Cake cookies' },
    price: '500 MRU',
    category: 'cake',
    image: '/images/products/cake-cookies.webp',
  },
  {
    id: 'cookies-gourmands',
    name: { en: 'Cookies gourmands', ar: 'كوكيز غورمان', fr: 'Cookies gourmands' },
    price: '150 MRU',
    category: 'cookies',
    image: '/images/products/cookies-gourmands.webp',
  },
];

export const allProducts: Product[] = menuProducts;

export const WHATSAPP_NUMBER = '22234757912';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_PHONE = '+222 34 75 79 12';
export const EMAIL = 'hello@cookiescorner.mr';
export const TIKTOK_URL = 'https://www.tiktok.com/@cookiescorner1';
export const SNAPCHAT_URL = 'https://www.snapchat.com/add/cookiescorner1';
