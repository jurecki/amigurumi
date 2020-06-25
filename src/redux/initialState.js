const initialState = {
  categories: [
    { id: 'wildAnimals', name: 'wild animals' },
    { id: 'forestAnimals', name: 'forest animals' },
    { id: 'pets', name: 'pets' },
    { id: 'cartoons', name: 'cartoons' },
  ],
  products: [
    {
      id: '1',
      name: 'penguin',
      describe: 'Handmade knitted toy. Amigurumi penguin toy. Crochet stuffed animals. Miniature crochet penguin',
      category: 'wildAnimals',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/handmade-knitted-toy-amigurumi-penguin-600w-1405756010.jpg',
      countInStock: 10,
    },
    {
      id: '2',
      name: 'The sleepy fox',
      describe: 'Handmade knitted toy. Amigurumi fox toy. Crochet stuffed animals. Miniature sleepy fox',
      category: 'forestAnimals',
      price: 99,
      image: 'https://www.amigurumipatterns.net/images/amigurumi-The-sleepy-fox.jpeg',
      countInStock: 10,
    },
    {
      id: '3',
      name: 'Riley the Raccoon',
      describe: 'Handmade knitted toy. Amigurumi Raccoon toy. Crochet stuffed animals. Miniature Raccoon',
      category: 'forestAnimals',
      price: 99,
      image: 'https://www.amigurumipatterns.net/images/360-amigurumi-61Riley-the-Raccoon.jpeg',
      countInStock: 10,
    },
    {
      id: '4',
      name: 'Dog',
      describe: 'Handmade knitted toy. Amigurumi dog toy. Crochet stuffed animals. Miniature dog',
      category: 'pets',
      price: 99,
      image: 'https://4.bp.blogspot.com/-11tovc_PrJg/Wd4eLBi_qSI/AAAAAAAAAQ4/TSUwMIno2NwoJCwn332CkcyXcaEHnZfwQCLcBGAs/s1600/crochet-dog-amigurumi.jpg',
      countInStock: 10,
    },
    {
      id: '5',
      name: 'Cat',
      describe: 'Crochet Kitty Cat Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'pets',
      price: 99,
      image: 'https://1.bp.blogspot.com/-JWb5umREJi0/Xr1cjuRNlmI/AAAAAAAACtw/jORhe-XSpyA1ZpZ19ZLP2uYL-TYaMNZdACLcBGAsYHQ/s1600/crochet-cat-amigurumi.jpg',
      countInStock: 10,
    },
    {
      id: '6',
      name: 'Peppa Pig',
      describe: 'Crochet Kitty Peppa Pig Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'cartoons',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/christmas-peppa-pig-amigurumi-600w-1623832438.jpg',
      countInStock: 10,
    },
    {
      id: '7',
      name: 'Dragon',
      describe: 'Crochet Kitty Peppa Pig Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'cartoons',
      price: 99,
      image: 'https://havvadesigns.com/wp-content/uploads/blummy-ana-resim.jpg',
      countInStock: 10,
    },
    {
      id: '8',
      name: 'Bears',
      describe: 'Crochet Kitty Peppa Pig Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'cartoons',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/crochet-amigurumi-toys-600w-1203607894.jpg',
      countInStock: 10,
    },
  ],
  cart: {
    cartItems: [],
    shipping: {},
    payment: {},
  },

  users: [
    {
      id: 'ldad1',
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.pl',
      password: '123',
    },
  ],

  loading: {
    active: false,
    error: false,
  },

};

export default initialState;
