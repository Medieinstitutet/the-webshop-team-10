import { cart } from "../main";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";

//Hitta och skapa variabler som behövs för att konstruera cart
const cartContainer = document.getElementById("cartContainer");

const cartHeading = document.createElement("h3");
const cartEmpty = document.createElement("span");
const cartUl = document.createElement("ul");
const cartTotalPrice = document.createElement("h4");
const cartCheckoutLink = document.createElement("a");

cartHeading.className = "cart-contianer__heading";
cartHeading.innerHTML = "Varukorg";
cartEmpty.className = "cart-contianer__empty";
cartUl.className = "cart-items";
cartTotalPrice.className = "cart-contianer__total-price";
cartCheckoutLink.className = "cart-contianer__checkout-link";
cartCheckoutLink.href = "#";
cartCheckoutLink.innerHTML = "Checkout";

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

    //Funktionalitet för knappar
    cartItemButtonIncrease.addEventListener("click", () => {
      cart[i].quantity++;
      createCartHtml();
    });

    cartItemButtonDecrease.addEventListener("click", () => {
      //Om det bara finns en av produkten fråga om man vill ta bort
      if (cart[i].quantity === 1) {
        if (confirm("Vill du ta bort produkten från varukorgen?")) {
          cart.splice(i, 1);
        }
        createCartHtml();
      }
      if (cart[i].quantity > 1) {
        cart[i].quantity--;
        createCartHtml();
      }
    });

    cartItemButtonDelete.addEventListener("click", () => {
      if (confirm("Vill du ta bort produkten från varukorgen?")) {
        cart.splice(i, 1);
      }
      createCartHtml();
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
