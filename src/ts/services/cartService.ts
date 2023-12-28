import { cart } from "../main";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";
import { p1 } from "../main";
// import { p2 } from "../main";

// Funktion för att lägga till produkter i cart. Tar emot produkt och antal.
const addToCart = (product: Product, quantity: number) => {
  let alreadyInCart = false;
  //Kontrollerar om produkt med samma id redan finns i cart. Adderar då ny quantity.
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === product.id) {
      cart[i].quantity += quantity;
      alreadyInCart = true;
    }
  }
  //Om produkten inte redan finns i cart lägger den till en helt ny produkt i varukorgen.
  if (alreadyInCart === false) cart.push(new CartItem(product, quantity));
  console.log(cart);
  createCartHtml();
};

const cartButton = document.getElementById("cartButton");
cartButton?.addEventListener("click", () => {
  addToCart(p1, 1);
});

const cartUl = document.getElementById("cartItems");
//Fuktion för att skapa html för cart.
export function createCartHtml() {
  //Loopar igenom hela cart och genererar html.
  for (let i = 0; i < cart.length; i++) {
    //Skapar element
    const cartItemLi = document.createElement("li");
    const cartItemImg = document.createElement("img");
    const cartItemTitle = document.createElement("span");
    const cartItemBottomDiv = document.createElement("div");
    const cartItemPriceEach = document.createElement("span");
    const cartItemButtonsDiv = document.createElement("div");
    const cartItemButtonDecrease = document.createElement("button");
    const cartItemAmount = document.createElement("span");
    const cartItemButtonIncrease = document.createElement("button");
    const cartItemPriceTotal = document.createElement("span");
    const cartItemButtonDelete = document.createElement("button");

    //Tilldelar klasser
    cartItemLi.className = "cart-item";
    cartItemImg.className = "cart-item__image";
    cartItemTitle.className = "cart-item__title";
    cartItemBottomDiv.className = "cart-item__bottom";
    cartItemPriceEach.className = "cart-item__price";
    cartItemButtonsDiv.className = "cart-item__buttons";
    cartItemButtonDecrease.className = "cart-item__button";
    cartItemAmount.className = "cart-item__amount";
    cartItemButtonIncrease.className = "cart-item__button";
    cartItemPriceTotal.className = "cart-item__price-total";
    cartItemButtonDelete.className = "cart-item__remove";

    //Lägger till produktinformation
    cartItemImg.src = cart[i].product.image;
    cartItemImg.alt = cart[i].product.name;
    cartItemTitle.innerHTML = cart[i].product.name;
    cartItemPriceEach.innerHTML =
      "Styckpris: " + cart[i].product.price.toString() + "&#x20bf;";
    cartItemButtonDecrease.innerHTML = "-";
    cartItemAmount.innerHTML = cart[i].quantity.toString();
    cartItemButtonIncrease.innerHTML = "+";
    cartItemPriceTotal.innerHTML =
      ("Totalpris: " + cart[i].product.price * cart[i].quantity).toString() +
      "&#x20bf;";
    cartItemButtonDelete.innerHTML = "Ta bort";

    //Placerar elementen
    cartUl?.appendChild(cartItemLi);
    cartItemLi.appendChild(cartItemImg);
    cartItemLi.appendChild(cartItemTitle);
    cartItemLi.appendChild(cartItemBottomDiv);
    cartItemBottomDiv.appendChild(cartItemPriceEach);
    cartItemBottomDiv.appendChild(cartItemButtonsDiv);
    cartItemButtonsDiv.appendChild(cartItemButtonDecrease);
    cartItemButtonsDiv.appendChild(cartItemAmount);
    cartItemButtonsDiv.appendChild(cartItemButtonIncrease);
    cartItemBottomDiv.appendChild(cartItemPriceTotal);
    cartItemBottomDiv.appendChild(cartItemButtonDelete);
  }
}
