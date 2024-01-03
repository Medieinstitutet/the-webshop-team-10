import { cart } from "../main";
import { createCartHtml } from "./cartServices";
// import { Product } from "../models/Product";
// import { CartItem } from "../models/CartItem";
// import { addToCart } from "./cartServices";


//Hitta och skapa variabler som behövs för att konstruera checkouts
const checkoutContainer = document.getElementById("checkoutContainer");

const checkoutHeading = document.createElement("h3");
const checkoutEmpty = document.createElement("span");
const checkoutUl = document.createElement("ul");
const checkoutTotalPrice = document.createElement("h4");
const checkoutFormDiv = document.createElement("div")
const checkoutInfoSpan = document.createElement("span")
const checkoutForm = document.createElement("form")
const checkoutInputFname = document.createElement("input")
const checkoutInputLname = document.createElement("input")
const checkoutInputEmail = document.createElement("input")
const checkoutInputPhone = document.createElement("input")
const checkoutInputCountry = document.createElement("input")
const checkoutInputAdress = document.createElement("input")
const checkoutInputCity = document.createElement("input")
const checkoutInputZip = document.createElement("input")


const checkoutSaveBtn = document.createElement("input")
const checkoutSaveBtnLabel = document.createElement("label")
const checkoutInputDiscount = document.createElement("input")
const checkoutInputDiscountBtn = document.createElement("button")
//Swish
const checkoutSwishDiv = document.createElement("div")
const checkoutSwish = document.createElement("button")
const checkoutSwishLabel = document.createElement("label")
const checkoutSwishNumber = document.createElement("input")
//Visa
const checkoutVisaDiv = document.createElement("div")
const checkoutVisa = document.createElement("button")
const checkoutVisaLabel = document.createElement("label")
//Apple
const checkoutAppleDiv = document.createElement("div")
const checkoutApple = document.createElement("button")
const checkoutAppleLabel = document.createElement("label")
//Kort Information
const checkoutCardNumber = document.createElement("input")
const checkoutCardName = document.createElement("input")
const checkoutCardSecurityCode = document.createElement("input")
const checkoutCardExpire = document.createElement("input")
//Utcheckings knapp
const checkoutButton = document.createElement("button");
//Skapar grupp förcheckout delen
const checkoutDiv = document.createElement("div");
const checkoutCartDiv = document.createElement("div");
//Skapar grupp förcheckout alla dela
const checkoutAllDiv = document.createElement("div");

const checkoutSaveInfoDiv = document.createElement("div");

const checkoutSpinnerDiv = document.createElement("div")
const checkoutSpinnerImg = document.createElement("img")




checkoutHeading.className = "checkout-container__heading";
checkoutHeading.innerHTML = "Utcheckning";
checkoutEmpty.className = "checkout-contianer__empty";
checkoutUl.className = "checkout-items";
checkoutInfoSpan.className = "checkout-info__span";
checkoutInfoSpan.innerHTML = "Fyll i dina uppgifter:"
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

checkoutSwish.className = "checkout-button__swish";
checkoutSwishLabel.className = "checkout-input__checkout-swish-label";
checkoutSwishNumber.className = "checkout-input__checkoutSwisNumber"
checkoutVisa.className = "checkout-button__visa";
checkoutVisaLabel.className = "checkout-input__visa-label";
checkoutApple.className = "checkout-button__apple";
checkoutAppleLabel.className = "checkout-input__apple-label";
checkoutSaveBtn.className = "checkout-input__save-btn";
checkoutSaveBtnLabel.className = "checkout-input__save-btn-label";
checkoutInputDiscount.className = "checkout-input__input-discount";
checkoutInputDiscountBtn.className = "checkout-input__input-discount-btn";
checkoutFormDiv.className = "checkout-input__form-div";
checkoutVisaDiv.className = "checkout__visa-div invisible";
checkoutSwishDiv.className = "checkout__swish-div invisible";
checkoutAppleDiv.className = "checkout__apple-div invisible";

checkoutCardNumber.className = "checkout__card-number";
checkoutCardName.className = "checkout__card-name";
checkoutCardExpire.className = "checkout__card-expire";
checkoutCardSecurityCode.className = "checkout__card-security-code";
checkoutAllDiv.className = "checkout__all-div";



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
checkoutSwish.innerHTML = "Swish"
checkoutSwish.type = "button"
checkoutSwishNumber.type = "number"
checkoutSwishNumber.placeholder = "Tel: 072 333 02 96"
checkoutVisa.innerHTML = "Visa"
checkoutVisa.type = "button"
checkoutApple.innerHTML = "Apple Pay"
checkoutApple.type = "button"
checkoutSaveBtnLabel.innerHTML = "Spara kontaktinformation"
checkoutSaveBtn.type = "checkbox"
checkoutInputDiscount.type = "text"
checkoutInputDiscount.innerHTML = "Ange presentkort kod eller rabattkod"
checkoutInputDiscountBtn.innerHTML = "Använd"
checkoutInputDiscountBtn.type = "button"
checkoutInputDiscount.placeholder = "Rabattkod"
checkoutCardNumber.type = "number"
checkoutCardNumber.placeholder = "1234 5678 90123456"
checkoutCardName.type = "text"
checkoutCardName.placeholder = "Ex. John Doe"
checkoutCardExpire.type = "text"
checkoutCardExpire.placeholder = "MM/YY"
checkoutCardSecurityCode.type = "number"
checkoutCardSecurityCode.placeholder = "* * *"
checkoutSpinnerDiv.className = "checkout__spinner-div"
document.body?.appendChild(checkoutSpinnerDiv);

checkoutSpinnerImg.className = "checkout__spinner-img"
checkoutSpinnerImg.src = "/src/img/logo2.png"
document.body?.appendChild(checkoutSpinnerImg);


checkoutContainer?.appendChild(checkoutHeading);
checkoutDiv.className = "checkout__div";
checkoutCartDiv.className = "checkout__cart-div";

checkoutContainer?.appendChild(checkoutDiv);
checkoutContainer?.appendChild(checkoutCartDiv);

checkoutCartDiv?.appendChild(checkoutUl)

checkoutCartDiv.appendChild(checkoutInputDiscount);
checkoutCartDiv.appendChild(checkoutInputDiscountBtn);
checkoutCartDiv?.appendChild(checkoutTotalPrice)


checkoutContainer?.appendChild(checkoutEmpty);
checkoutContainer?.appendChild(checkoutAllDiv);
// checkoutContainer?.appendChild(checkoutUl);
// checkoutContainer?.appendChild(checkoutTotalPrice);
checkoutContainer?.appendChild(checkoutFormDiv);
checkoutContainer?.appendChild(checkoutVisaDiv);
// checkoutContainer?.appendChild(checkoutSwishDiv);
// checkoutContainer?.appendChild(checkoutButton);


checkoutFormDiv?.appendChild(checkoutInfoSpan)

checkoutAllDiv.appendChild(checkoutFormDiv);
checkoutAllDiv.appendChild(checkoutCartDiv);

checkoutFormDiv.appendChild(checkoutForm);



checkoutFormDiv.appendChild(checkoutSwishDiv)
checkoutSwishDiv.appendChild(checkoutSwishNumber);

checkoutForm.appendChild(checkoutInputFname);
checkoutForm.appendChild(checkoutInputLname);
checkoutForm.appendChild(checkoutInputEmail);
checkoutForm.appendChild(checkoutInputPhone);
checkoutForm.appendChild(checkoutInputCountry);
checkoutForm.appendChild(checkoutInputAdress);
checkoutForm.appendChild(checkoutInputCity);
checkoutForm.appendChild(checkoutInputZip);

// checkoutForm.appendChild(checkoutSaveBtn);
// checkoutForm.appendChild(checkoutSaveBtnLabel);

checkoutForm.appendChild(checkoutSaveInfoDiv)
checkoutSaveInfoDiv.appendChild(checkoutSaveBtn)
checkoutSaveInfoDiv.appendChild(checkoutSaveBtnLabel)


checkoutVisaDiv.appendChild(checkoutCardName);
checkoutVisaDiv.appendChild(checkoutCardNumber);
checkoutVisaDiv.appendChild(checkoutCardExpire);
checkoutVisaDiv.appendChild(checkoutCardSecurityCode); 



checkoutForm.appendChild(checkoutSwish);
checkoutForm.appendChild(checkoutVisa);
checkoutForm.appendChild(checkoutVisaDiv);
checkoutForm.appendChild(checkoutApple);
checkoutFormDiv.appendChild(checkoutVisaDiv);


// checkoutAllDiv?.appendChild(checkoutButton)
checkoutContainer?.appendChild(checkoutButton)



const visaCard = document.querySelector('.checkout-button__visa') as HTMLElement;
const swishCard = document.querySelector('.checkout-button__swish') as HTMLElement;
const appleCard = document.querySelector('.checkout-button__apple') as HTMLElement;

const visaCardDiv = document.querySelector('.checkout__visa-div') as HTMLElement;
const swishCardDiv = document.querySelector('.checkout__swish-div') as HTMLElement;
const appleCardDiv = document.querySelector('.checkout__apple-div') as HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
  visaCard?.addEventListener('click', () => {
    visaCardDiv.className = "checkout__visa-div visible"
    swishCardDiv.className = "checkout__swish-div invisible"//Visa Card
    appleCardDiv.className = "checkout__apple-div invisible"
  });
  swishCard?.addEventListener('click', () => {
    visaCardDiv.className = "checkout__visa-div invisible"
    swishCardDiv.className = "checkout__swish-div visible"//Swish Card
    appleCardDiv.className = "checkout__apple-div invisible"
  });
  appleCard?.addEventListener('click', () => {
    visaCardDiv.className = "checkout__visa-div visible"
    swishCardDiv.className = "checkout__swish-div invisible"//Apple Card
    appleCardDiv.className = "checkout__apple-div invisible"       
  });
});





// export const addToCart = (product: Product, quantity: number) => {
//   let alreadyInCart = false;
//   //Kontrollerar om produkt med samma id redan finns i cart. Adderar då ny quantity.
//   for (let i = 0; i < cart.length; i++) {
//     if (cart[i].product.id === product.id) {
//       cart[i].quantity += quantity;
//       alreadyInCart = true;
//     }
//   }

  
//   //Om produkten inte redan finns i cart lägger den till en helt ny produkt i varukorgen.
//   if (alreadyInCart === false) cart.push(new CartItem(product, quantity));
//   console.log(cart);
//   createCheckoutHtml();
// };

//spinner

checkoutButton?.addEventListener("click", async () => {
  // console.log("hej")
  checkoutSpinnerDiv.style.display = "block";
  checkoutSpinnerImg.style.display = "block";
   await new Promise(resolve => setTimeout(resolve, 2000));
  checkoutSpinnerDiv.style.display = "none";
  checkoutSpinnerImg.style.display = "none";
  window.location.href = "ordercomplete.html"

});
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


    
      //Funktionalitet för knappar
      cartItemButtonIncrease.addEventListener("click", () => {
        cart[i].quantity++;
        createCheckoutHtml();
        createCartHtml();
      });
  
      cartItemButtonDecrease.addEventListener("click", () => {
        //Om det bara finns en av produkten fråga om man vill ta bort
        if (cart[i].quantity === 1) {
          if (confirm("Vill du ta bort produkten från varukorgen?")) {
            cart.splice(i, 1);
          }
          createCheckoutHtml();
          createCartHtml();

        }
        if (cart[i].quantity > 1) {
          cart[i].quantity--;
          createCheckoutHtml();
          createCartHtml();

        }
      });
  
      cartItemButtonDelete.addEventListener("click", () => {
        if (confirm("Vill du ta bort produkten från varukorgen?")) {
          cart.splice(i, 1);
        }
        createCheckoutHtml();
        createCartHtml();

      });
    }
    //Lägger till totalbeloppet för kassan
    checkoutTotalPrice.innerHTML = "Total: " + cartTotal.toFixed(3) + "&#x20bf;";
  
    //Kontrollerar om varukorgen är tom och skriver ut det
    (checkoutEmpty as HTMLSpanElement).innerHTML = "";
    if (cart.length === 0) {
      (checkoutEmpty as HTMLSpanElement).innerHTML = "Varukorgen är tom";
    }
  
    //Sparar till LS
    localStorage.setItem("Group10Cart", JSON.stringify(cart));
  }
  

  


  
  
  


  
