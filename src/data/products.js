// Centralized product data. Add new products by extending this array —
// every product listing, filter and search feature reads from here.
//
// category: 'Dry Fruits' | 'Masalas' | 'Whole Spices' | 'Regional'
// tags: used by the masala filter chips — any of:
//   'powdered' | 'whole' | 'biryani' | 'vegetarian' | 'non-vegetarian' | 'regional'

export const products = [
  // ---------------- DRY FRUITS ----------------
  {
    id: 'df-almonds',
    name: 'Premium California Almonds',
    category: 'Dry Fruits',
    description:
      'Whole, crunchy almonds selected for size and freshness — a daily nutrition staple and a gifting favourite.',
    image:
      'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g', '1kg'],
    featured: true,
    regional: false,
    tags: [],
  },
  {
    id: 'df-cashews',
    name: 'Royal Cashews',
    category: 'Dry Fruits',
    description:
      'Large, whole cashew kernels with a naturally rich, buttery taste. Ideal for snacking and festive preparations.',
    image:
      'https://images.unsplash.com/photo-1567892737950-30c4db37cd89?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g', '1kg'],
    featured: true,
    regional: false,
    tags: [],
  },
  {
    id: 'df-pista',
    name: 'Pista',
    category: 'Dry Fruits',
    description:
      'Naturally green, roasted pistachios with a distinct aroma — a classic addition to Indian sweets and gift trays.',
    image:
      'https://images.unsplash.com/photo-1600189261867-30e5ffe7b8da?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g'],
    featured: true,
    regional: false,
    tags: [],
  },
  {
    id: 'df-walnuts',
    name: 'Walnuts',
    category: 'Dry Fruits',
    description:
      'Whole walnut kernels, carefully shelled and packed to preserve their natural oils and rich flavour.',
    image:
      'https://images.unsplash.com/photo-1596362601603-b4288c0dcf8f?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g'],
    featured: false,
    regional: false,
    tags: [],
  },
  {
    id: 'df-black-raisins',
    name: 'Black Raisins',
    category: 'Dry Fruits',
    description:
      'Sun-dried black raisins with a naturally deep sweetness, perfect for everyday eating and cooking.',
    image:
      'https://images.unsplash.com/photo-1596591868231-05e808fd7e69?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g', '1kg'],
    featured: false,
    regional: false,
    tags: [],
  },
  {
    id: 'df-golden-raisins',
    name: 'Golden Raisins',
    category: 'Dry Fruits',
    description:
      'Soft, golden raisins with a mild tang — popular in pulao, kheer and everyday snacking mixes.',
    image:
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g'],
    featured: false,
    regional: false,
    tags: [],
  },
  {
    id: 'df-anjeer',
    name: 'Anjeer (Figs)',
    category: 'Dry Fruits',
    description:
      'Soft, naturally sweet dried figs, a wholesome everyday snack and a traditional gifting choice.',
    image:
      'https://images.unsplash.com/photo-1601379760883-1bb495d27bbe?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g'],
    featured: true,
    regional: false,
    tags: [],
  },
  {
    id: 'df-dates',
    name: 'Dates (Khajoor)',
    category: 'Dry Fruits',
    description:
      'Soft, richly flavoured dates — a wholesome everyday sweetener and a staple through the year.',
    image:
      'https://images.unsplash.com/photo-1593904308074-e1a53c2ae4d1?w=800&q=80&auto=format&fit=crop',
    sizes: ['250g', '500g', '1kg'],
    featured: false,
    regional: false,
    tags: [],
  },
  {
    id: 'df-apricots',
    name: 'Dried Apricots',
    category: 'Dry Fruits',
    description:
      'Tangy-sweet dried apricots, a favourite for snacking and a bright addition to trail mixes.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g', '500g'],
    featured: false,
    regional: false,
    tags: [],
  },
  {
    id: 'df-cranberries',
    name: 'Cranberries',
    category: 'Dry Fruits',
    description:
      'Tart, ruby-red dried cranberries — a versatile addition to salads, mixes and baking.',
    image:
      'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g'],
    featured: false,
    regional: false,
    tags: [],
  },
  {
    id: 'df-seeds',
    name: 'Mixed Seeds',
    category: 'Dry Fruits',
    description:
      'A wholesome blend of pumpkin, sunflower and melon seeds for everyday nutrition.',
    image:
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '250g'],
    featured: false,
    regional: false,
    tags: [],
  },
  {
    id: 'df-mixed',
    name: 'Mixed Dry Fruits',
    category: 'Dry Fruits',
    description:
      'A generous, everyday mix of almonds, cashews, raisins and more — ready for the table or a gift box.',
    image:
      'https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=800&q=80&auto=format&fit=crop',
    sizes: ['250g', '500g', '1kg'],
    featured: true,
    regional: false,
    tags: [],
  },
  {
    id: 'df-gift-pack',
    name: 'Premium Gift Pack',
    category: 'Dry Fruits',
    description:
      'A curated selection of our finest dry fruits, packed for gifting on festivals and special occasions.',
    image:
      'https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=800&q=80&auto=format&fit=crop',
    sizes: ['500g', '1kg', 'Custom Hamper'],
    featured: true,
    regional: false,
    tags: [],
  },

  // ---------------- MASALAS (POWDERED) ----------------
  {
    id: 'ms-biryani',
    name: 'Biryani Masala',
    category: 'Masalas',
    description:
      'A fragrant, well-balanced blend crafted for authentic, layered biryani flavour.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: true,
    regional: false,
    tags: ['powdered', 'biryani', 'non-vegetarian'],
  },
  {
    id: 'ms-garam',
    name: 'Garam Masala',
    category: 'Masalas',
    description:
      'A warm, aromatic everyday blend that finishes curries, dals and sabzis with traditional depth.',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g', '500g'],
    featured: true,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-chhole',
    name: 'Chhole Masala',
    category: 'Masalas',
    description:
      'A bold, tangy blend made specifically for classic North Indian chhole.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-paneer',
    name: 'Paneer Masala',
    category: 'Masalas',
    description:
      'A rich, restaurant-style blend for paneer curries, built around traditional spice proportions.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-chicken',
    name: 'Chicken Masala',
    category: 'Masalas',
    description:
      'A robust everyday blend crafted for classic home-style chicken curry.',
    image:
      'https://images.unsplash.com/photo-1596040033229-9f8b8b2f8c1b?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: true,
    regional: false,
    tags: ['powdered', 'non-vegetarian'],
  },
  {
    id: 'ms-mutton',
    name: 'Mutton Masala',
    category: 'Masalas',
    description:
      'A deep, full-bodied blend designed to stand up to slow-cooked mutton curries.',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'non-vegetarian'],
  },
  {
    id: 'ms-kitchen-king',
    name: 'Kitchen King',
    category: 'Masalas',
    description:
      'A versatile all-purpose blend for sabzis, gravies and everyday cooking.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g', '500g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-chaat',
    name: 'Chaat Masala',
    category: 'Masalas',
    description:
      'A tangy, palate-brightening blend for fruit chaat, snacks and everyday finishing.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-tandoori',
    name: 'Tandoori Masala',
    category: 'Masalas',
    description:
      'A smoky, well-rounded marinade blend for tandoori-style grills at home.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'non-vegetarian'],
  },
  {
    id: 'ms-tea',
    name: 'Tea Masala',
    category: 'Masalas',
    description:
      'A warming blend of traditional spices to brew authentic masala chai.',
    image:
      'https://images.unsplash.com/photo-1596040033229-9f8b8b2f8c1b?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-sabzi',
    name: 'Sabzi Masala',
    category: 'Masalas',
    description:
      'An everyday blend built for quick, flavourful vegetable preparations.',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-sambar',
    name: 'Sambar Masala',
    category: 'Masalas',
    description:
      'A traditional South Indian blend for authentic sambar, rich with roasted lentils and spices.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-rasam',
    name: 'Rasam Masala',
    category: 'Masalas',
    description:
      'A tangy, peppery South Indian blend for classic home-style rasam.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-rajma',
    name: 'Rajma Masala',
    category: 'Masalas',
    description:
      'A well-rounded blend made specifically for authentic Punjabi-style rajma.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-coriander',
    name: 'Coriander Powder',
    category: 'Masalas',
    description:
      'Freshly ground coriander powder with a naturally mild, earthy aroma — a kitchen essential.',
    image:
      'https://images.unsplash.com/photo-1596040033229-9f8b8b2f8c1b?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g', '500g', '1kg'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-red-chilli',
    name: 'Red Chilli Powder',
    category: 'Masalas',
    description:
      'Vibrant, freshly ground red chilli powder for everyday cooking, with consistent heat and colour.',
    image:
      'https://images.unsplash.com/photo-1583119912267-cc97c911e416?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g', '500g', '1kg'],
    featured: true,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-turmeric',
    name: 'Turmeric Powder',
    category: 'Masalas',
    description:
      'Deep golden turmeric powder, ground for a naturally rich colour and everyday kitchen use.',
    image:
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g', '500g', '1kg'],
    featured: true,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-cumin',
    name: 'Cumin Powder',
    category: 'Masalas',
    description:
      'Freshly ground cumin powder with a warm, nutty aroma for tempering and everyday cooking.',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g', '500g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },
  {
    id: 'ms-black-pepper',
    name: 'Black Pepper Powder',
    category: 'Masalas',
    description:
      'Freshly ground black pepper with a sharp, robust aroma for everyday seasoning.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['powdered', 'vegetarian'],
  },

  // ---------------- WHOLE SPICES ----------------
  {
    id: 'ws-jeera',
    name: 'Whole Jeera (Cumin Seeds)',
    category: 'Whole Spices',
    description: 'Whole cumin seeds for tempering, naturally aromatic and consistent in size.',
    image:
      'https://images.unsplash.com/photo-1596040033229-9f8b8b2f8c1b?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g', '500g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-dhania',
    name: 'Whole Dhania (Coriander Seeds)',
    category: 'Whole Spices',
    description: 'Whole coriander seeds with a naturally citrusy aroma, ideal for roasting and grinding fresh.',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g', '500g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-black-pepper',
    name: 'Black Pepper (Whole)',
    category: 'Whole Spices',
    description: 'Whole black peppercorns, bold and pungent, for grinding fresh at home.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-green-cardamom',
    name: 'Green Cardamom (Elaichi)',
    category: 'Whole Spices',
    description: 'Fragrant whole green cardamom pods, a traditional favourite for both sweet and savoury dishes.',
    image:
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g'],
    featured: true,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-black-cardamom',
    name: 'Black Cardamom (Badi Elaichi)',
    category: 'Whole Spices',
    description: 'Smoky, robust black cardamom pods for biryanis, curries and slow-cooked dishes.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-cinnamon',
    name: 'Cinnamon (Dalchini)',
    category: 'Whole Spices',
    description: 'Naturally sweet, aromatic cinnamon sticks for curries, chai and biryani.',
    image:
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-cloves',
    name: 'Cloves (Laung)',
    category: 'Whole Spices',
    description: 'Whole cloves with an intense, warm aroma, essential to garam masala and biryani.',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-bay-leaf',
    name: 'Bay Leaf (Tej Patta)',
    category: 'Whole Spices',
    description: 'Naturally fragrant bay leaves, used to season rice, dals and curries.',
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80&auto=format&fit=crop',
    sizes: ['25g', '50g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-star-anise',
    name: 'Star Anise (Chakra Phool)',
    category: 'Whole Spices',
    description: 'Whole star anise with a distinct liquorice-like note, key to biryani and Chinese-Indian dishes.',
    image:
      'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800&q=80&auto=format&fit=crop',
    sizes: ['25g', '50g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-fennel',
    name: 'Fennel Seeds (Saunf)',
    category: 'Whole Spices',
    description: 'Sweet, aromatic fennel seeds for cooking and traditional after-meal use.',
    image:
      'https://images.unsplash.com/photo-1596040033229-9f8b8b2f8c1b?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-fenugreek',
    name: 'Fenugreek Seeds (Methi)',
    category: 'Whole Spices',
    description: 'Whole fenugreek seeds with a distinct, slightly bitter note used in pickles and tempering.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-mustard',
    name: 'Mustard Seeds (Rai)',
    category: 'Whole Spices',
    description: 'Whole mustard seeds for tempering, with a naturally sharp, pungent flavour.',
    image:
      'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },
  {
    id: 'ws-dry-red-chillies',
    name: 'Dry Red Chillies',
    category: 'Whole Spices',
    description: 'Whole sun-dried red chillies for tempering and grinding, with consistent heat.',
    image:
      'https://images.unsplash.com/photo-1583119912267-cc97c911e416?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g'],
    featured: false,
    regional: false,
    tags: ['whole', 'vegetarian'],
  },

  // ---------------- REGIONAL SPECIALS ----------------
  {
    id: 'rg-sattu',
    name: 'Bihar Special Sattu',
    category: 'Regional',
    description:
      'A traditional Bihar favourite, made for authentic taste and everyday goodness — perfect for sattu drinks, parathas and litti.',
    image:
      'https://images.unsplash.com/photo-1626200926749-27e37f9c1a1a?w=800&q=80&auto=format&fit=crop',
    sizes: ['250g', '500g', '1kg'],
    featured: true,
    regional: true,
    tags: ['regional', 'vegetarian'],
  },
  {
    id: 'rg-hyderabadi-biryani',
    name: 'Hyderabadi Biryani Masala',
    category: 'Regional',
    description:
      'Aromatic, rich and crafted for the unmistakable flavour of authentic Hyderabadi biryani.',
    image:
      'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g', '200g'],
    featured: true,
    regional: true,
    tags: ['regional', 'biryani', 'non-vegetarian'],
  },
  {
    id: 'rg-kashmiri-chilli',
    name: 'Kashmiri Red Chilli Powder',
    category: 'Regional',
    description:
      'Prized for its deep red colour and mild heat, traditionally used across North Indian kitchens.',
    image:
      'https://images.unsplash.com/photo-1583119912267-cc97c911e416?w=800&q=80&auto=format&fit=crop',
    sizes: ['100g', '200g'],
    featured: false,
    regional: true,
    tags: ['regional', 'powdered', 'vegetarian'],
  },
  {
    id: 'rg-goda-masala',
    name: 'Goda Masala',
    category: 'Regional',
    description:
      'A traditional Maharashtrian spice blend with a distinct, slightly sweet aroma used in everyday cooking.',
    image:
      'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&q=80&auto=format&fit=crop',
    sizes: ['50g', '100g'],
    featured: false,
    regional: true,
    tags: ['regional', 'powdered', 'vegetarian'],
  },
]

export function getFeaturedProducts() {
  return products.filter((p) => p.featured)
}

export function getProductsByCategory(category) {
  return products.filter((p) => p.category === category)
}

export function searchProducts(query) {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  )
}
