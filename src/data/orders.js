export const orderData = [
  {
    order_id: 1, // int
    table_id: 1, // int
    description: 'dairy intollerance', // string
    starters_ready: false, // boolean
    mains_ready: false, // boolean
    desserts_ready: false, // boolean
    drinks_ready: false, // boolean
    is_active: true, // boolean
    created_at: Date.now(), // date
    food_items: [
      { name: 'Chicken Skewers', course: 'starter' },
      { name: 'Lasagne', course: 'main' },
      { name: 'Fruit Cale', course: 'dessert' },
      { name: 'Water', course: 'drink' },
    ],
  },
  {
    order_id: 2,
    table_id: 2,
    description: 'vegan',
    starters_ready: false,
    mains_ready: false,
    desserts_ready: false,
    drinks_ready: false,
    is_active: true,
    created_at: Date.now(),
    food_items: [
      { name: 'Chicken Skewers', course: 'starter' },
      { name: 'Lasagne', course: 'main' },
      { name: 'Fruit Cale', course: 'dessert' },
      { name: 'Water', course: 'drink' },
    ],
  },
  {
    order_id: 3,
    table_id: 3,
    description: '',
    starters_ready: false,
    mains_ready: false,
    desserts_ready: false,
    drinks_ready: false,
    is_active: true,
    created_at: Date.now(),
    food_items: [
      { name: 'Chicken Skewers', course: 'starter' },
      { name: 'Lasagne', course: 'main' },
      { name: 'Fruit Cale', course: 'dessert' },
      { name: 'Water', course: 'drink' },
    ],
  },
  {
    order_id: 4,
    table_id: 5,
    description: 'birthday',
    starters_ready: false,
    mains_ready: false,
    desserts_ready: false,
    drinks_ready: false,
    is_active: true,
    created_at: Date.now(),
    food_items: [
      { name: 'Chicken Skewers', course: 'starter' },
      { name: 'Lasagne', course: 'main' },
      { name: 'Fruit Cale', course: 'dessert' },
      { name: 'Water', course: 'drink' },
    ],
  },
  {
    order_id: 5,
    table_id: 4,
    description: 'bad tipper',
    starters_ready: false,
    mains_ready: false,
    desserts_ready: false,
    drinks_ready: false,
    is_active: true,
    created_at: Date.now(),
    food_items: [
      { name: 'Chicken Skewers', course: 'starter' },
      { name: 'Lasagne', course: 'main' },
      { name: 'Fruit Cale', course: 'dessert' },
      { name: 'Water', course: 'drink' },
    ],
  },
];
