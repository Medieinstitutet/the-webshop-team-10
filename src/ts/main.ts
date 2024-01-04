import "./../scss/style.scss";
import { Product } from "./models/Product";
import { CartItem } from "./models/CartItem";
import "./services/cartServices";
import "./services/checkoutServices";
import "./services/navbarServices";
import { createCartHtml } from "./services/cartServices";
import {
  createProductHtml,
  createProductsHtml,
} from "./services/productServices";
import { createCheckoutHtml } from "./services/checkoutServices"


export const cart: CartItem[] = [];

//Kontrollera om det finns något sparat i local storage.
if (localStorage.getItem("Group10Cart")) {
  const storedCart = JSON.parse(localStorage.getItem("Group10Cart") || "");
  //Loopar igenom det som är sparat och lägger till i cart.
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
createProductsHtml();
createProductHtml();
createCheckoutHtml();

