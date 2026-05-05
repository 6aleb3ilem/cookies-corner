export type ProductCategory = 'boxes' | 'cookies' | 'dessert' | 'cake';

export type PriceTier = { qty: number; price: string };

export type Product = {
  id: string;
  name: { en: string; ar: string; fr: string };
  subtitle?: { en: string; ar: string; fr: string };
  price: string;
  tiers?: PriceTier[];
  category: ProductCategory;
  image: string;
};

export const menuProducts: Product[] = [
  {
    id: 'box-cookies-8',
    name: {
      en: 'Classic Cookie Box — 8 pcs',
      ar: 'علبة الكوكيز الكلاسيكية — 8 قطع',
      fr: 'Coffret Cookies Classique — 8 pcs',
    },
    subtitle: { en: '8 pieces', ar: '8 قطع', fr: '8 pièces' },
    price: '350 MRU',
    category: 'boxes',
    image: '/images/products/box-cookies.webp',
  },
  {
    id: 'cookies-scoop',
    name: {
      en: 'Cookie Scoops Cup',
      ar: 'كوب سكوبات الكوكيز',
      fr: 'Coupe Cookies Scoops',
    },
    price: '250 MRU',
    category: 'dessert',
    image: '/images/products/cookies-scoop.webp',
  },
  {
    id: 'cake-cookies',
    name: {
      en: 'Cookie Cake Box',
      ar: 'علبة كعكة الكوكيز',
      fr: 'Coffret Cookie Cake',
    },
    price: '500 MRU',
    category: 'cake',
    image: '/images/products/cake-cookies.webp',
  },
  {
    id: 'cookies-gourmands',
    name: {
      en: 'Gourmet Stuffed Cookies',
      ar: 'كوكيز محشوة غورميه',
      fr: 'Cookies Gourmets Fourrés',
    },
    price: 'From 200 MRU',
    tiers: [
      { qty: 1, price: '200 MRU' },
      { qty: 2, price: '370 MRU' },
      { qty: 3, price: '550 MRU' },
    ],
    category: 'cookies',
    image: '/images/products/cookies-gourmands.webp',
  },
];

export const allProducts: Product[] = menuProducts;

export const WHATSAPP_NUMBER = '22234757912';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_PHONE = '+222 34 75 79 12';
export const EMAIL = 'hello@cookiescorners.com';
export const TIKTOK_URL = 'https://www.tiktok.com/@cookiescorner1';
export const SNAPCHAT_URL = 'https://www.snapchat.com/add/cookiescorner1';
