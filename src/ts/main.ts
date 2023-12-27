import "./../scss/style.scss";
import { Product } from "./services/Product";

const p1: Product = new Product(
  1,
  "Tiger",
  5,
  0.1,
  "cute Tiger",
  0,
  "src/img/tiger.jpg",
  "Indien"
);
const p2: Product = new Product(
  1,
  "Lejon",
  4,
  0.2,
  "cute Lejon",
  0,
  "src/img/lejon.jpg",
  "Kenya"
);

const product: Product[] = [p1, p2];
console.log(product);

/* public id: number,
public name: string,
public age: number,
public price: number,
public description: string,
public quantity: number,
public image: string,
public country: string */
