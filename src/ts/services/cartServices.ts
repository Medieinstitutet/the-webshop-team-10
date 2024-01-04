import { cart } from "../main";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";
import { createCheckoutHtml } from "./checkoutServices";

//Hitta och skapa variabler som behövs för att konstruera cart
const cartContainer = document.getElementById("cartContainer");

const cartHeading = document.createElement("h3");
const cartEmpty = document.createElement("span");
const cartUl = document.createElement("ul");
const cartTotalPrice = document.createElement("h4");
const cartCheckoutLink = document.createElement("a");

cartHeading.className = "cart-container__heading";
cartHeading.innerHTML = "Varukorg";
cartEmpty.className = "cart-container__empty";
cartUl.className = "cart-items";
cartTotalPrice.className = "cart-container__total-price";
cartCheckoutLink.className = "cart-container__checkout-link";
cartCheckoutLink.href = "checkout.html";
cartCheckoutLink.innerHTML = "Gå till kassan";

cartContainer?.appendChild(cartHeading);
cartContainer?.appendChild(cartEmpty);
cartContainer?.appendChild(cartUl);
cartContainer?.appendChild(cartTotalPrice);
cartContainer?.appendChild(cartCheckoutLink);

// Funktion för att lägga till produkter i cart. Tar emot produkt och antal.
export const addToCart = (product: Product, quantity: number) => {
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

//Funktion för att göra cart synlig eller inte
export const toggleCart = () => {
  cartContainer?.classList.toggle("cart-container__visible");
};

//Fuktion för att skapa html för cart.
export function createCartHtml() {
  //Tömmer listan
  cartUl.innerHTML = "";
  //Variabel för att räkna ut totalpris
  let cartTotal = 0;
  //Loopar igenom hela cart och genererar html.
  for (let i = 0; i < cart.length; i++) {
    //Skapar element
    const cartItemLi = document.createElement("li");
    const cartItemImgLink = document.createElement("a");
    const cartItemImg = document.createElement("img");
    const cartItemLink = document.createElement("a");
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
    cartItemImgLink.className = "cart-item__image-link";
    cartItemImg.className = "cart-item__image";
    cartItemLink.className = "cart-item__link";
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
    cartItemImgLink.href = "product.html?id=" + cart[i].product.id;
    cartItemImg.src = cart[i].product.image;
    cartItemImg.alt = cart[i].product.name;
    cartItemLink.href = "product.html?id=" + cart[i].product.id;
    cartItemTitle.innerHTML = cart[i].product.name;
    cartItemPriceEach.innerHTML =
      "Styckpris: " + cart[i].product.price.toFixed(3) + "&#x20bf;";
    cartItemButtonDecrease.innerHTML = "-";
    cartItemAmount.innerHTML = cart[i].quantity.toString();
    cartItemButtonIncrease.innerHTML = "+";
    //Produktens totalpris
    const productTotalPrice: number = cart[i].product.price * cart[i].quantity;
    //Lägger till produktens totalpris till varukorgens totalpris
    cartTotal += productTotalPrice;
    cartItemPriceTotal.innerHTML =
      "Totalpris: " + productTotalPrice.toFixed(3) + "&#x20bf;";
    cartItemButtonDelete.innerHTML = "Ta bort";

    //Placerar elementen
    cartUl.appendChild(cartItemLi);
    cartItemLi.appendChild(cartItemImgLink);
    cartItemImgLink.appendChild(cartItemImg);
    cartItemLi.appendChild(cartItemLink);
    cartItemLink.appendChild(cartItemTitle);
    cartItemLi.appendChild(cartItemBottomDiv);
    cartItemBottomDiv.appendChild(cartItemPriceEach);
    cartItemBottomDiv.appendChild(cartItemButtonsDiv);
    cartItemButtonsDiv.appendChild(cartItemButtonDecrease);
    cartItemButtonsDiv.appendChild(cartItemAmount);
    cartItemButtonsDiv.appendChild(cartItemButtonIncrease);
    cartItemBottomDiv.appendChild(cartItemPriceTotal);
    cartItemBottomDiv.appendChild(cartItemButtonDelete);

    //Funktionalitet för knappar
    cartItemButtonIncrease.addEventListener("click", () => {
      cart[i].quantity++;
      createCartHtml();
      createCheckoutHtml();
    });

    cartItemButtonDecrease.addEventListener("click", () => {
      //Om det bara finns en av produkten fråga om man vill ta bort
      if (cart[i].quantity === 1) {
        if (confirm("Vill du ta bort produkten från varukorgen?")) {
          cart.splice(i, 1);
        }
        createCartHtml();
        createCheckoutHtml();
      }
      if (cart[i].quantity > 1) {
        cart[i].quantity--;
        createCartHtml();
        createCheckoutHtml();
      }
    });

    cartItemButtonDelete.addEventListener("click", () => {
      if (confirm("Vill du ta bort produkten från varukorgen?")) {
        cart.splice(i, 1);
      }
      createCartHtml();
      createCheckoutHtml();
    });
  }
  //Lägger till totalbeloppet för kassan
  cartTotalPrice.innerHTML = "Total: " + cartTotal.toFixed(3) + "&#x20bf;";

  //Kontrollerar om varukorgen är tom och skriver ut det
  (cartEmpty as HTMLSpanElement).innerHTML = "";
  if (cart.length === 0) {
    (cartEmpty as HTMLSpanElement).innerHTML = "Varukorgen är tom";
  }

  //Sparar till LS
  localStorage.setItem("Group10Cart", JSON.stringify(cart));
}
