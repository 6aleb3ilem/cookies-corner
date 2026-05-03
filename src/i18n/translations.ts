export type Lang = 'en' | 'ar' | 'fr';

export const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'العربية' },
  { code: 'fr', label: 'FR' },
];

export const t = {
  promo: {
    en: '♡ Sweet moments, made with love in Nouakchott — Handmade, premium & gift-ready cookies. ♡',
    ar: '♡ لحظات حلوة، صُنعت بحب في نواكشوط — كوكيز فاخر مصنوع يدوياً وجاهز للإهداء. ♡',
    fr: '♡ Des instants doux, faits avec amour à Nouakchott — cookies artisanaux, premium et prêts à offrir. ♡',
  },
  nav: {
    home: { en: 'Home', ar: 'الرئيسية', fr: 'Accueil' },
    shop: { en: 'Shop / Menu', ar: 'المتجر / القائمة', fr: 'Boutique / Menu' },
    gifts: { en: 'Gift Boxes', ar: 'علب الهدايا', fr: 'Coffrets cadeaux' },
    about: { en: 'About', ar: 'من نحن', fr: 'À propos' },
    contact: { en: 'Contact', ar: 'تواصل', fr: 'Contact' },
    order: { en: 'Order on WhatsApp', ar: 'اطلب عبر واتساب', fr: 'Commander sur WhatsApp' },
  },
  hero: {
    script: {
      en: 'Made with love in Nouakchott',
      ar: 'صُنع بحب في نواكشوط',
      fr: 'Fait avec amour à Nouakchott',
    },
    headline: {
      en: 'Cute. Premium. Irresistibly Yours.',
      ar: 'لطيف. فاخر. لا يُقاوم.',
      fr: 'Mignon. Premium. Irrésistiblement vôtre.',
    },
    desc: {
      en: 'A cute premium cookie gift brand in Nouakchott — handmade, soft, chocolate-heavy, and perfect for gifts, cravings, and parties of all kinds.',
      ar: 'علامة كوكيز فاخرة ولطيفة في نواكشوط — مصنوعة يدوياً، طرية، غنية بالشوكولاتة، ومثالية للهدايا وكل أنواع الحفلات.',
      fr: 'Une marque de cookies cadeaux mignonne et premium à Nouakchott — artisanaux, moelleux, riches en chocolat, parfaits pour offrir, se faire plaisir et toutes vos fêtes.',
    },
    cta1: { en: 'Shop Now', ar: 'تسوّق الآن', fr: 'Acheter maintenant' },
    cta2: { en: 'Explore Gift Boxes', ar: 'اكتشف علب الهدايا', fr: 'Découvrir les coffrets' },
  },
  badges: {
    handmade: { en: 'Handmade', ar: 'مصنوع يدوياً', fr: 'Fait main' },
    handmadeSub: { en: 'Made with love', ar: 'صُنع بحب', fr: 'Fait avec amour' },
    chocolate: { en: 'Chocolate-Heavy', ar: 'غني بالشوكولاتة', fr: 'Riche en chocolat' },
    chocolateSub: { en: 'Rich & indulgent', ar: 'غني ولذيذ', fr: 'Riche et gourmand' },
    gifting: { en: 'Perfect for Gifting', ar: 'مثالي للإهداء', fr: 'Parfait à offrir' },
    giftingSub: { en: 'Beautiful & premium', ar: 'جميل وفاخر', fr: 'Beau et premium' },
  },
  stories: {
    title: { en: 'Our Stories', ar: 'قصصنا', fr: 'Nos histoires' },
    open: { en: 'Open Album', ar: 'افتح الألبوم', fr: 'Ouvrir l’album' },
    madeWith: {
      en: 'Made with love in Nouakchott',
      ar: 'صُنع بحب في نواكشوط',
      fr: 'Fait avec amour à Nouakchott',
    },
  },
  featured: {
    title: { en: 'Featured Favorites', ar: 'المفضلة لدينا', fr: 'Nos favoris' },
    sub: {
      en: 'Loved by everyone — small batches, big flavor.',
      ar: 'محبوبة من الجميع — كميات صغيرة، طعم كبير.',
      fr: 'Adorés par tous — petites fournées, grandes saveurs.',
    },
    order: { en: 'Order', ar: 'اطلب', fr: 'Commander' },
  },
  menu: {
    title: { en: 'Our Menu', ar: 'القائمة', fr: 'Notre menu' },
    sub: {
      en: 'Handmade daily. Chocolate-heavy. Always cute.',
      ar: 'تُصنع يومياً يدوياً. غنية بالشوكولاتة. دائماً لطيفة.',
      fr: 'Fait main chaque jour. Riche en chocolat. Toujours mignon.',
    },
  },
  gifting: {
    title: {
      en: 'Made for Gifting & Parties',
      ar: 'صُنع للإهداء والحفلات',
      fr: 'Fait pour offrir et faire la fête',
    },
    desc: {
      en: 'Birthdays, weddings, thank-yous, surprises — we bake for every kind of party.',
      ar: 'أعياد ميلاد، أعراس، كلمات شكر، مفاجآت — نخبز لكل أنواع الحفلات.',
      fr: 'Anniversaires, mariages, remerciements, surprises — nous cuisinons pour toutes les fêtes.',
    },
    cta: { en: 'Explore Gift Boxes', ar: 'اكتشف علب الهدايا', fr: 'Découvrir les coffrets' },
  },
  contact: {
    title: { en: 'Get in Touch', ar: 'تواصل معنا', fr: 'Nous contacter' },
    phone: { en: 'Phone', ar: 'الهاتف', fr: 'Téléphone' },
    email: { en: 'Email', ar: 'البريد', fr: 'Email' },
    location: { en: 'Location', ar: 'الموقع', fr: 'Adresse' },
    hours: { en: 'Hours', ar: 'ساعات العمل', fr: 'Horaires' },
    hoursValue: {
      en: 'Everyday: 10:00 – 22:00',
      ar: 'يومياً: 10:00 – 22:00',
      fr: 'Tous les jours : 10h00 – 22h00',
    },
    locationValue: {
      en: 'Nouakchott, Mauritania',
      ar: 'نواكشوط، موريتانيا',
      fr: 'Nouakchott, Mauritanie',
    },
    whatsapp: { en: 'Order on WhatsApp', ar: 'اطلب عبر واتساب', fr: 'Commander sur WhatsApp' },
  },
  shop: {
    title: { en: 'Shop / Menu', ar: 'المتجر / القائمة', fr: 'Boutique / Menu' },
    sub: {
      en: 'Browse our full collection of handmade premium cookies.',
      ar: 'تصفّح مجموعتنا الكاملة من الكوكيز الفاخر اليدوي.',
      fr: 'Parcourez notre collection complète de cookies premium faits main.',
    },
    all: { en: 'All', ar: 'الكل', fr: 'Tout' },
    boxes: { en: 'Boxes', ar: 'علب', fr: 'Coffrets' },
    cookies: { en: 'Cookies', ar: 'كوكيز', fr: 'Cookies' },
    cake: { en: 'Cake Cookies', ar: 'كيك كوكيز', fr: 'Cake cookies' },
    dessert: { en: 'Dessert', ar: 'حلويات', fr: 'Dessert' },
  },
  giftPage: {
    title: { en: 'Gift Boxes', ar: 'علب الهدايا', fr: 'Coffrets cadeaux' },
    sub: {
      en: 'Premium boxes — beautifully packaged, ready to delight.',
      ar: 'علب فاخرة — تغليف جميل، جاهزة للإسعاد.',
      fr: 'Coffrets premium — joliment emballés, prêts à enchanter.',
    },
    occasionsTitle: { en: 'For Every Party', ar: 'لكل حفلة', fr: 'Pour toutes les fêtes' },
    occasions: {
      birthdays: { en: 'Birthdays', ar: 'أعياد الميلاد', fr: 'Anniversaires' },
      weddings: { en: 'Weddings', ar: 'أعراس', fr: 'Mariages' },
      thankyous: { en: 'Thank-Yous', ar: 'كلمات شكر', fr: 'Remerciements' },
      cravings: { en: 'Cravings', ar: 'لحظات الشغف', fr: 'Envies gourmandes' },
      custom: { en: 'Custom Gifts', ar: 'هدايا خاصة', fr: 'Cadeaux personnalisés' },
    },
    customTitle: {
      en: 'Add a Personal Message Card',
      ar: 'أضف بطاقة رسالة شخصية',
      fr: 'Ajoutez une carte personnalisée',
    },
    customDesc: {
      en: 'Each gift box can include a handwritten note. Just tell us what to write when you order on WhatsApp.',
      ar: 'يمكن إضافة بطاقة بخط اليد لكل علبة. أخبرنا فقط بالنص عند الطلب عبر واتساب.',
      fr: 'Chaque coffret peut inclure une note écrite à la main. Dites-nous quoi écrire lors de votre commande WhatsApp.',
    },
  },
  about: {
    title: { en: 'Our Story', ar: 'قصتنا', fr: 'Notre histoire' },
    intro: {
      en: 'Cookies Corner started as a home kitchen in Nouakchott, baking soft chocolate-heavy cookies for friends and family. Today we bake every cookie by hand, for birthdays, weddings, thank-yous, and parties of every kind — to make sweet moments sweeter.',
      ar: 'بدأت كوكيز الزاوية في مطبخ منزلي بنواكشوط، نخبز كوكيز طري غني بالشوكولاتة للأصدقاء والعائلة. اليوم نخبز كل قطعة يدوياً، لأعياد الميلاد والأعراس وكلمات الشكر وكل أنواع الحفلات — لنجعل اللحظات الحلوة أحلى.',
      fr: 'Cookies Corner a commencé dans une cuisine maison à Nouakchott, à préparer des cookies moelleux et chocolatés pour la famille et les amis. Aujourd’hui, chaque cookie est fait main pour les anniversaires, les mariages, les remerciements et toutes les fêtes — pour rendre les moments doux encore plus doux.',
    },
    valuesTitle: { en: 'What Makes Us Different', ar: 'ما يميّزنا', fr: 'Ce qui nous distingue' },
    delivery: { en: 'Delivery in Nouakchott', ar: 'توصيل داخل نواكشوط', fr: 'Livraison à Nouakchott' },
    deliveryDesc: {
      en: 'We deliver fresh batches across the city — orders placed by 4pm reach you the same day.',
      ar: 'نوصّل دفعات طازجة في جميع أنحاء المدينة — الطلبات قبل الساعة 4 مساءً تصل في نفس اليوم.',
      fr: 'Nous livrons des fournées fraîches dans toute la ville — les commandes passées avant 16h sont livrées le jour même.',
    },
    orderTitle: { en: 'How to Order', ar: 'كيفية الطلب', fr: 'Comment commander' },
    orderDesc: {
      en: 'Send us a WhatsApp message with the cookies or gift box you’d like. We’ll confirm and arrange delivery.',
      ar: 'أرسل لنا رسالة عبر واتساب بطلب الكوكيز أو علبة الهدايا. سنؤكد ونرتب التوصيل.',
      fr: 'Envoyez-nous un message WhatsApp avec les cookies ou le coffret souhaité. Nous confirmons et organisons la livraison.',
    },
  },
  baker: {
    eyebrow: { en: 'Meet the baker', ar: 'تعرّف على الخبّازة', fr: 'Notre pâtissière' },
    title: {
      en: 'Hi! I’m the girl behind every cookie.',
      ar: 'أهلاً! أنا الفتاة وراء كل قطعة كوكيز.',
      fr: 'Coucou ! Je suis la fille derrière chaque cookie.',
    },
    desc: {
      en: 'I bake every batch by hand at home in Nouakchott — with chocolate, patience and a lot of love. Send me a message any time and I’ll make your party extra sweet.',
      ar: 'أحضّر كل دفعة يدوياً في منزلي بنواكشوط — بالشوكولاتة والصبر وكثير من الحب. أرسل لي رسالة في أي وقت وسأجعل حفلتك أحلى.',
      fr: 'Je prépare chaque fournée à la main, chez moi à Nouakchott — avec du chocolat, de la patience et beaucoup d’amour. Écris-moi à tout moment et je rendrai ta fête encore plus douce.',
    },
  },
  footer: {
    rights: {
      en: '© Cookies Corner — Nouakchott. All rights reserved.',
      ar: '© كوكيز الزاوية — نواكشوط. جميع الحقوق محفوظة.',
      fr: '© Cookies Corner — Nouakchott. Tous droits réservés.',
    },
    follow: { en: 'Follow us', ar: 'تابعنا', fr: 'Suivez-nous' },
  },
};

export type TKey = keyof typeof t;
