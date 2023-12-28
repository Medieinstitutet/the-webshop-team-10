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
  2,
  "Lejon",
  4,
  3,
  "cute Lejon",
  0,
  "src/img/lejon.jpg",
  "Kenya"
);

export const products: Product[] = [p1, p2];

export const cart: CartItem[] = [];

if (localStorage.getItem("Group10Cart")) {
  const storedCart = JSON.parse(localStorage.getItem("Group10Cart") || "");
  //cart.push(...storedCart);
  for (let i = 0; i < storedCart.length; i++) {
    cart.push(
      new CartItem(
        new Product(
          storedCart[i].product.id,
          storedCart[i].product.name,
          storedCart[i].product.age,
          storedCart[i].product.price,
          storedCart[i].product.description,
          storedCart[i].product.stock,
          storedCart[i].product.image,
          storedCart[i].product.country
        ),
        storedCart[i].quantity
      )
    );
  }
}

console.log(cart);

createCartHtml();
