import "./../scss/style.scss";
import { Product } from "./models/Product";
import { CartItem } from "./models/CartItem";
import "./services/cartServices";
import { createCartHtml } from "./services/cartServices";
export const p1: Product = new Product(
  1,
  "Tiger",
  5,
  2,
  "cute Tiger",
  0,
  "src/img/tiger.jpg",
  "Indien"
);
export const p2: Product = new Product(
  1,
  "Lejon",
  4,
  3,
  "cute Lejon",
  0,
  "src/img/lejon.jpg",
  "Kenya"
);

export const products: Product[] = [p1, p2];
console.log(products);

export const cart: CartItem[] = [];
console.log(cart);

createCartHtml();
