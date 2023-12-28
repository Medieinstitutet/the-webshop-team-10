import { cart } from "../main";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";
import { p1 } from "../main";
// import { p2 } from "../main";

const addToCart = (product: Product, quantity: number) => {
  cart.push(new CartItem(product, quantity));
  console.log(cart);
};

const cartButton = document.getElementById("cartButton");
cartButton?.addEventListener("click", () => {
  addToCart(p1, 1);
});
