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
    },
    {
      id: '2',
      name: 'The sleepy fox',
      describe: 'Handmade knitted toy. Amigurumi fox toy. Crochet stuffed animals. Miniature sleepy fox',
      category: 'forestAnimals',
      price: 99,
      image: 'https://www.amigurumipatterns.net/images/amigurumi-The-sleepy-fox.jpeg',
    },
    {
      id: '3',
      name: 'Riley the Raccoon',
      describe: 'Handmade knitted toy. Amigurumi Raccoon toy. Crochet stuffed animals. Miniature Raccoon',
      category: 'forestAnimals',
      price: 99,
      image: 'https://www.amigurumipatterns.net/images/360-amigurumi-61Riley-the-Raccoon.jpeg',
    },
    {
      id: '4',
      name: 'Dog',
      describe: 'Handmade knitted toy. Amigurumi dog toy. Crochet stuffed animals. Miniature dog',
      category: 'pets',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/brown-amigurumi-dog-shot-by-600w-1622701582.jpg',
    },
    {
      id: '5',
      name: 'Cat',
      describe: 'Crochet Kitty Cat Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'pets',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/crochet-kitty-cat-toy-amigurumi-600w-1623860083.jpg',
    },
    {
      id: '6',
      name: 'Peppa Pig',
      describe: 'Crochet Kitty Peppa Pig Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'cartoons',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/christmas-peppa-pig-amigurumi-600w-1623832438.jpg',
    },
    {
      id: '7',
      name: 'Dragon',
      describe: 'Crochet Kitty Peppa Pig Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'cartoons',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/handmade-organic-design-amigurumi-dragon-600w-1642886059.jpg',
    },
    {
      id: '8',
      name: 'Bears',
      describe: 'Crochet Kitty Peppa Pig Toy Amigurumi Kitty Cat Toy Stuffed Kitty Cat',
      category: 'cartoons',
      price: 99,
      image: 'https://image.shutterstock.com/image-photo/crochet-amigurumi-toys-600w-1203607894.jpg',
    },
  ],
  cart: {
    products: [],
  },
  loading: {
    active: false,
    error: false,
  },

};

export default initialState;
