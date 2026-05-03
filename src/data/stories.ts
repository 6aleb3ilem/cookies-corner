export type StoryItem = {
  type: 'image' | 'video';
  src: string;
  caption?: { en: string; ar: string; fr: string };
};

export type StoryCategory = {
  id: string;
  title: { en: string; ar: string; fr: string };
  coverImage: string;
  items: StoryItem[];
};

export const stories: StoryCategory[] = [
  {
    id: 'chocolate-drizzle',
    title: { en: 'Chocolate Drizzle', ar: 'برشّة الشوكولاتة', fr: 'Drizzle chocolat' },
    coverImage: '/images/stories/chocolate-drizzle/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/chocolate-drizzle/01.webp',
        caption: {
          en: 'Hand-poured dark chocolate, drizzled while warm.',
          ar: 'شوكولاتة داكنة مسكوبة يدوياً وهي دافئة.',
          fr: 'Chocolat noir versé à la main, encore tiède.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/chocolate-drizzle/02.webp',
        caption: {
          en: 'Soft inside, glossy chocolate finish on top.',
          ar: 'طري من الداخل، لمعة شوكولاتة على الأعلى.',
          fr: 'Moelleux à l’intérieur, chocolat brillant dessus.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/chocolate-drizzle/03.webp',
        caption: {
          en: 'Pure indulgence in every bite.',
          ar: 'متعة خالصة في كل قضمة.',
          fr: 'Pure gourmandise à chaque bouchée.',
        },
      },
    ],
  },
  {
    id: 'pistachio-nuts',
    title: { en: 'Pistachio & Nuts', ar: 'فستق ومكسرات', fr: 'Pistache & noix' },
    coverImage: '/images/stories/pistachio-nuts/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/pistachio-nuts/01.webp',
        caption: {
          en: 'Crunch and softness in one bite.',
          ar: 'هشاشة وطراوة في قضمة واحدة.',
          fr: 'Croquant et moelleux dans une bouchée.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/pistachio-nuts/02.webp',
        caption: {
          en: 'Premium pistachios, real ingredients.',
          ar: 'فستق فاخر ومكونات حقيقية.',
          fr: 'Pistaches premium, vrais ingrédients.',
        },
      },
    ],
  },
  {
    id: 'stuffed-cookies',
    title: { en: 'Stuffed Cookies', ar: 'كوكيز محشي', fr: 'Cookies fourrés' },
    coverImage: '/images/stories/stuffed-cookies/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/stuffed-cookies/01.webp',
        caption: {
          en: 'Soft, golden cookies with a rich, gooey center.',
          ar: 'كوكيز ذهبي طري بقلب غني وذائب.',
          fr: 'Cookies dorés et moelleux au cœur riche et fondant.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/stuffed-cookies/02.webp',
        caption: {
          en: 'Made for true cookie lovers.',
          ar: 'لعشّاق الكوكيز الحقيقيين.',
          fr: 'Pour les vrais amoureux des cookies.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/stuffed-cookies/03.webp',
        caption: {
          en: 'Pull it apart and watch the magic.',
          ar: 'افتحه وشاهد السحر.',
          fr: 'Ouvrez-le et admirez la magie.',
        },
      },
    ],
  },
  {
    id: 'gift-boxes',
    title: { en: 'Gift Boxes', ar: 'علب الهدايا', fr: 'Coffrets cadeaux' },
    coverImage: '/images/stories/gift-boxes/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/gift-boxes/01.webp',
        caption: {
          en: 'Beautifully packed for sweet moments.',
          ar: 'تغليف جميل للحظات حلوة.',
          fr: 'Joliment emballés pour des instants doux.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/gift-boxes/02.webp',
        caption: {
          en: 'Lavender ribbon, gold accents, premium feel.',
          ar: 'شريط لافندر ولمسات ذهبية، إحساس فاخر.',
          fr: 'Ruban lavande, touches dorées, sensation premium.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/gift-boxes/03.webp',
        caption: {
          en: 'Ready to gift, ready to delight.',
          ar: 'جاهزة للإهداء، جاهزة للإسعاد.',
          fr: 'Prêts à offrir, prêts à enchanter.',
        },
      },
    ],
  },
  {
    id: 'thank-you-cakes',
    title: { en: 'Thank You Cakes', ar: 'كيك الشكر', fr: 'Cakes de remerciement' },
    coverImage: '/images/stories/thank-you-cakes/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/thank-you-cakes/01.webp',
        caption: {
          en: 'A sweet way to say thank you.',
          ar: 'طريقة حلوة لقول شكراً.',
          fr: 'Une façon sucrée de dire merci.',
        },
      },
    ],
  },
  {
    id: 'behind-the-scenes',
    title: { en: 'Behind the Scenes', ar: 'خلف الكواليس', fr: 'Coulisses' },
    coverImage: '/images/stories/behind-the-scenes/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/behind-the-scenes/01.webp',
        caption: {
          en: 'Every cookie hand-shaped.',
          ar: 'كل قطعة تُشكَّل يدوياً.',
          fr: 'Chaque cookie façonné à la main.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/behind-the-scenes/02.webp',
        caption: {
          en: 'Small batches, big love.',
          ar: 'كميات صغيرة، حب كبير.',
          fr: 'Petites fournées, grand amour.',
        },
      },
    ],
  },
  {
    id: 'freshly-baked',
    title: { en: 'Freshly Baked', ar: 'طازج من الفرن', fr: 'Sorti du four' },
    coverImage: '/images/stories/freshly-baked/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/freshly-baked/01.webp',
        caption: {
          en: 'Warm cookies, straight from the oven.',
          ar: 'كوكيز دافئ مباشرة من الفرن.',
          fr: 'Cookies tièdes, tout droit du four.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/freshly-baked/02.webp',
        caption: {
          en: 'That first warm bite.',
          ar: 'تلك القضمة الدافئة الأولى.',
          fr: 'Cette première bouchée tiède.',
        },
      },
    ],
  },
  {
    id: 'packaging',
    title: { en: 'Packaging', ar: 'التغليف', fr: 'Emballage' },
    coverImage: '/images/stories/packaging/cover.webp',
    items: [
      {
        type: 'image',
        src: '/images/stories/packaging/01.webp',
        caption: {
          en: 'Every box wrapped by hand.',
          ar: 'كل علبة تُغلَّف يدوياً.',
          fr: 'Chaque boîte emballée à la main.',
        },
      },
      {
        type: 'image',
        src: '/images/stories/packaging/02.webp',
        caption: {
          en: 'Premium box, ribbon, and message card.',
          ar: 'علبة فاخرة، شريط، وبطاقة رسالة.',
          fr: 'Coffret premium, ruban, carte de message.',
        },
      },
    ],
  },
];
