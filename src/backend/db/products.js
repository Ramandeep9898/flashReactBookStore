import { v4 as uuid } from "uuid";

export const products = [
  {
    _id: uuid(),
    title: "12 Rules for Life: An Antidote to Chaos",
    subTitle: "Paperback – 2 March 2021",
    img: "https://images-na.ssl-images-amazon.com/images/I/41kspFBwVxL._SX331_BO1,204,203,200_.jpg",
    originalPrice: "2000",
    discountedPrice: 1900,
    author: "Jordan B. Peterson",
    rating: "4.5",
    categoryName: "Self-help",
  },
  {
    _id: uuid(),
    title: "Beyond Order: 12 More Rules for Life",
    subTitle: "Paperback – 2 March 2021",
    img: "https://images-na.ssl-images-amazon.com/images/I/41Bhl964Z3L._SX325_BO1,204,203,200_.jpg",
    originalPrice: "600",
    discountedPrice: 250,
    author: "Jordan B. Peterson",
    rating: "4.5",
    categoryName: "Self-help",
  },
  {
    _id: uuid(),
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    subTitle: "Paperback – 30 October 2018",
    img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg",
    originalPrice: "600",
    discountedPrice: 350,
    author: "James Clear",
    rating: "4.6",
    categoryName: "Self-help",
  },
];
