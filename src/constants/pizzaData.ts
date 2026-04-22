export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Classic' | 'Specialty' | 'Gourmet' | 'Custom';
  tags: string[];
  image: string;
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Margherita Artisano',
    description: 'San Marzano tomatoes, fresh bufala mozzarella, basil, EVOO.',
    price: 18,
    category: 'Classic',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Diavola Inferno',
    description: 'Spicy salami, pepperoncino, fior di latte, and honey drizzle.',
    price: 22,
    category: 'Specialty',
    tags: ['Spicy'],
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Truffle & Porcini',
    description: 'Black truffle cream, roasted wild mushrooms, taleggio cheese.',
    price: 26,
    category: 'Gourmet',
    tags: ['Vegetarian'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Prosciutto e Rucola',
    description: '24-month aged Parma ham, wild arugula, shaved parmigiano.',
    price: 24,
    category: 'Gourmet',
    tags: [],
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Mortadella & Pistachio',
    description: 'Silky mortadella, crushed pistachios, lemon zest, burrata heart.',
    price: 28,
    category: 'Gourmet',
    tags: [],
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Ortolana Verde',
    description: 'Roasted bell peppers, eggplant, zucchini, and wild oregano.',
    price: 20,
    category: 'Specialty',
    tags: ['Vegan', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1593504049359-74330189a355?auto=format&fit=crop&q=80&w=800'
  }
];

export const STORY_STAGES = [
  {
    id: 'heritage',
    title: 'The Heritage',
    content: 'It began in 1924, in the heart of Napoli. My grandfather, Marco, built his first wood-fired oven with bricks from the old family estate.',
    image: 'https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'ingredients',
    title: 'The Earth',
    content: 'We only source from farmers we know by name. Our tomatoes grow in the volcanic soil of Vesuvius, absorbing the Mediterranean sun.',
    image: 'https://images.unsplash.com/photo-1628191010210-a59771599553?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'craftsmanship',
    title: 'The Ritual',
    content: 'Every dough ball is hand-stretched, never pressed. A 48-hour cold fermentation ensures a light, airy crust that sings with flavor.',
    image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'masterpiece',
    title: 'The Flame',
    content: '90 seconds at 900 degrees. The leopard-spotted crust is the signature of a life dedicated to the perfect pizza.',
    image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&q=80&w=1200'
  }
];
