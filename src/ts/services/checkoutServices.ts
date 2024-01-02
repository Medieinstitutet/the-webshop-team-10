import { cart } from "../main";
import { Product } from "../models/Product";
import { CartItem } from "../models/CartItem";

//Hitta och skapa variabler som behövs för att konstruera checkouts
const checkoutContainer = document.getElementById("checkoutContainer");

const checkoutHeading = document.createElement("h3");
const checkoutEmpty = document.createElement("span");
const checkoutUl = document.createElement("ul");
const checkoutTotalPrice = document.createElement("h4");
const checkoutForm = document.createElement("form")
const checkoutInputFname = document.createElement("input")
const checkoutInputLname = document.createElement("input")
const checkoutInputEmail = document.createElement("input")
const checkoutInputPhone = document.createElement("input")
const checkoutInputCountry = document.createElement("input")
const checkoutInputAdress = document.createElement("input")
const checkoutInputCity = document.createElement("input")
const checkoutInputZip = document.createElement("input")
const checkoutSwish = document.createElement("input")
const checkoutSwishLabel = document.createElement("label")
const checkoutVisa = document.createElement("input")
const checkoutVisaLabel = document.createElement("label")
const checkoutApple = document.createElement("input")
const checkoutAppleLabel = document.createElement("label")
const checkoutSaveBtn = document.createElement("input")
const checkoutSaveBtnLabel = document.createElement("label")

const checkoutButton = document.createElement("button");

checkoutHeading.className = "checkout-contianer__heading";
checkoutHeading.innerHTML = "Varukorg";
checkoutEmpty.className = "checkout-contianer__empty";
checkoutUl.className = "checkout-items";
checkoutTotalPrice.className = "checkout-contianer__total-price";
checkoutButton.className = "checkout-contianer__checkout-button";
checkoutButton.innerHTML = "Bekräfta köp";
checkoutForm.className = "checkout-contianer__checkout-form";
checkoutInputFname.className = "checkout-input__first-name";
checkoutInputLname.className = "checkout-input__last-name";
checkoutInputEmail.className = "checkout-input__email";
checkoutInputPhone.className = "checkout-input__phone";
checkoutInputCountry.className = "checkout-input__country";
checkoutInputAdress.className = "checkout-input__address";
checkoutInputCity.className = "checkout-input__city";
checkoutInputZip.className = "checkout-input__zip";
checkoutSwish.className = "checkout-input__swish";
checkoutSwishLabel.className = "checkout-input__checkout-swish-label";
checkoutVisa.className = "checkout-input__visa";
checkoutVisaLabel.className = "checkout-input__visa-label";
checkoutApple.className = "checkout-input__apple";
checkoutAppleLabel.className = "checkout-input__apple-label";
checkoutSaveBtn.className = "checkout-input__save-btn";
checkoutSaveBtnLabel.className = "checkout-input__save-btn-label";



checkoutInputFname.type = "text"
checkoutInputFname.placeholder = "Förnamn"
checkoutInputLname.type = "text"
checkoutInputLname.placeholder = "Efternamn"
checkoutInputEmail.type = "email"
checkoutInputEmail.placeholder = "Email"
checkoutInputPhone.type = "tel"
checkoutInputPhone.placeholder = "Telefon"
checkoutInputCountry.type = "text"
checkoutInputCountry.placeholder = "Land"
checkoutInputAdress.type = "text"
checkoutInputAdress.placeholder = "Adress"
checkoutInputCity.type = "text"
checkoutInputCity.placeholder = "Stad"
checkoutInputZip.type = "text"
checkoutInputZip.placeholder = "Postkod"
checkoutSwish.type = "radio"
checkoutSwishLabel.innerHTML = "Swish"
checkoutVisa.type = "radio"
checkoutVisaLabel.innerHTML = "Visa"
checkoutApple.type = "radio"
checkoutAppleLabel.innerHTML = "Apple Pay"
checkoutSaveBtn.type = "checkbox"
checkoutSaveBtnLabel.innerHTML = "Spara din kontakt information för nästa gång"


checkoutContainer?.appendChild(checkoutHeading);
checkoutContainer?.appendChild(checkoutEmpty);
checkoutContainer?.appendChild(checkoutUl);
checkoutContainer?.appendChild(checkoutTotalPrice);

checkoutForm.appendChild(checkoutInputFname);
checkoutForm.appendChild(checkoutInputLname);
checkoutForm.appendChild(checkoutInputEmail);
checkoutForm.appendChild(checkoutInputPhone);
checkoutForm.appendChild(checkoutInputCountry);
checkoutForm.appendChild(checkoutInputAdress);
checkoutForm.appendChild(checkoutInputCity);
checkoutForm.appendChild(checkoutInputZip);
checkoutForm.appendChild(checkoutSwish);
checkoutForm.appendChild(checkoutSwishLabel);
checkoutForm.appendChild(checkoutVisa);
checkoutForm.appendChild(checkoutVisaLabel);
checkoutForm.appendChild(checkoutApple);
checkoutForm.appendChild(checkoutAppleLabel);
checkoutForm.appendChild(checkoutSaveBtnLabel);

checkoutForm.appendChild(checkoutSaveBtn);


checkoutContainer?.appendChild(checkoutForm);
checkoutContainer?.appendChild(checkoutButton);



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
  createCheckoutHtml();
};




//Fuktion för att skapa html för cart.
export function createCheckoutHtml() {
  //Tömmer listan
  checkoutUl.innerHTML = "";
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
    checkoutUl.appendChild(cartItemLi);
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



//     //Funktionalitet för knappar
//     cartItemButtonIncrease.addEventListener("click", () => {
//       cart[i].quantity++;
//       createCartHtml();
//     });

//     cartItemButtonDecrease.addEventListener("click", () => {
//       //Om det bara finns en av produkten fråga om man vill ta bort
//       if (cart[i].quantity === 1) {
//         if (confirm("Vill du ta bort produkten från varukorgen?")) {
//           cart.splice(i, 1);
//         }
//         createCartHtml();
//       }
//       if (cart[i].quantity > 1) {
//         cart[i].quantity--;
//         createCartHtml();
//       }
//     });

//     cartItemButtonDelete.addEventListener("click", () => {
//       if (confirm("Vill du ta bort produkten från varukorgen?")) {
//         cart.splice(i, 1);
//       }
//       createCartHtml();
//     });
//   }
//   //Lägger till totalbeloppet för kassan
//   checkoutTotalPrice.innerHTML = "Total: " + cartTotal.toFixed(3) + "&#x20bf;";

//   //Kontrollerar om varukorgen är tom och skriver ut det
//   (checkoutEmpty as HTMLSpanElement).innerHTML = "";
//   if (cart.length === 0) {
//     (checkoutEmpty as HTMLSpanElement).innerHTML = "Varukorgen är tom";
//   }

//   //Sparar till LS
//   localStorage.setItem("Group10Cart", JSON.stringify(cart));
// }
