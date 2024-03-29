import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "12 Rules for Life: An Antidote to Chaos",
    img: "https://images-na.ssl-images-amazon.com/images/I/41kspFBwVxL._SX331_BO1,204,203,200_.jpg",
    originalPrice: 2000,
    discountedPrice: 1900,
    badge: "popular",
    discount: 30,

    author: "Jordan B. Peterson",
    rating: "4.5",
    cover: "hardcover",
    category: "bestseller",
  },
  {
    _id: uuid(),
    title: "Beyond Order: 12 More Rules for Life",
    img: "https://images-na.ssl-images-amazon.com/images/I/41Bhl964Z3L._SX325_BO1,204,203,200_.jpg",
    originalPrice: 600,
    discountedPrice: 250,
    badge: "hot",
    discount: 20,
    author: "Jordan B. Peterson",
    rating: "4.5",
    cover: "paperback",
    category: "fiction",
  },
  {
    _id: uuid(),
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    originalPrice: 600,
    discountedPrice: 350,
    badge: "popular",
    discount: 10,
    author: "James Clear",
    rating: "4.6",
    cover: "paperback",
    category: "fiction",
  },
  {
    _id: uuid(),
    title: "The 48 Laws Of Power by Robert Greene",
    img: "https://images-na.ssl-images-amazon.com/images/I/41VCBqRMNML._SX351_BO1,204,203,200_.jpg",
    originalPrice: 1200,
    discountedPrice: 420,
    badge: "popular",
    discount: 60,
    author: "Robert Greene",
    rating: "4.8",
    cover: "paperback",
    category: "nonfiction",
  },
  {
    _id: uuid(),
    title: "The Laws of Human Nature ",
    img: "https://images-na.ssl-images-amazon.com/images/I/41PUWqRghSL._SX323_BO1,204,203,200_.jpg",
    originalPrice: 699,
    discountedPrice: 489,
    badge: "hot",
    discount: 30,
    author: "Robert Greene",
    rating: "4.5",
    cover: "hardcover",
    category: "nonfiction",
  },
  {
    _id: uuid(),
    title: "Mastery book by Robert Greene",
    img: "https://images-na.ssl-images-amazon.com/images/I/41T1+apx5SL._SX325_BO1,204,203,200_.jpg",
    originalPrice: 699,
    discountedPrice: 467,
    badge: "new",
    discount: 30,
    author: "Robert Greene",
    rating: "4.6",
    cover: "paperback",
    category: "fiction",
  },
  {
    _id: uuid(),
    title: "The Haunting of Delhi City : Tales of the Supernatural",
    img: "https://m.media-amazon.com/images/I/51cDJwaroAL._SX324_BO1,204,203,200_.jpg",
    originalPrice: 699,
    discountedPrice: 467,
    badge: "New",
    discount: 30,
    author: "Suparna Chawla Bhasin",
    rating: "4.4",
    cover: "paperback",
    category: "horror",
  },
  {
    _id: uuid(),
    title: "Ghosts of The Silent Hills: Stories based on true hauntings",
    img: "https://m.media-amazon.com/images/I/51KSK8Jm95L._SX460_BO1,204,203,200_.jpg",
    originalPrice: 699,
    discountedPrice: 467,
    badge: "popular",
    discount: 30,
    author: "Anita Krishan",
    rating: "4.4",
    cover: "paperback",
    category: "horror",
  },
  {
    _id: uuid(),
    title: "Fingerprint! Publishing 50 Worlds Greatest Horror Stories",
    img: "https://m.media-amazon.com/images/I/51KSK8Jm95L._SX460_BO1,204,203,200_.jpg",
    originalPrice: 699,
    discountedPrice: 467,
    badge: "Bestseller",
    discount: 30,
    author: "Anita Krishan",
    rating: "4.4",
    cover: "paperback",
    category: "horror",
  },
  {
    _id: uuid(),
    title: "That Night: Four Friends, Twenty Years,",
    img: "https://m.media-amazon.com/images/I/41kRkqIt6aL._SX322_BO1,204,203,200_.jpg",
    originalPrice: 699,
    discountedPrice: 467,
    badge: "New",
    discount: 30,
    author: "Nidhi Upadhyay",
    rating: "4.4",
    cover: "Hardcover",
    category: "horror",
  },
];
