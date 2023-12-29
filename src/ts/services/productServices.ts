import { Product } from "../models/Product";
import { addToCart } from "./cartServices";

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

const productsContainer = document.getElementById("productsContainer");
//Fuktion för att skapa html för produkter.
const createProductsHtml = () => {
  //Loopar igenom hela products och genererar html.
  for (let i = 0; i < products.length; i++) {
    //Skapar element
    const productCard = document.createElement("div");
    const productCardLink = document.createElement("a");
    const productCardImage = document.createElement("img");
    const productCardName = document.createElement("h3");
    const productCardPrice = document.createElement("span");
    const productCardButton = document.createElement("button");

    //Tilldelar klasser
    productCard.className = "product-card";
    productCardLink.className = "product-card__link";
    productCardImage.className = "product-card__image";
    productCardName.className = "product-card__name";
    productCardPrice.className = "product-card__price";
    productCardButton.className = "product-card__button";

    //Lägger till produktinformation
    productCardLink.href = "/?id=" + products[i].id;
    productCardImage.src = products[i].image;
    productCardImage.alt = products[i].name;
    productCardName.innerHTML = products[i].name;
    productCardPrice.innerHTML = products[i].price.toString() + "&#x20bf;";
    productCardButton.innerHTML = "Lägg till i varukorg";

    //Placerar elementen
    productsContainer?.appendChild(productCard);
    productCard.appendChild(productCardLink);
    productCardLink.appendChild(productCardImage);
    productCardLink.appendChild(productCardName);
    productCardLink.appendChild(productCardPrice);
    productCard.appendChild(productCardButton);

    //Funktionalitet för knapp
    productCardButton.addEventListener("click", () => {
      addToCart(products[i], 1);
    });
  }
};

createProductsHtml();

//Skapa html för enskilda produktsidor

//Kontrollera och hitta produktid från query i url:en
if (document.location.search) {
  //Ta fram vad som finns i queryn "id". Ger 0 ifall det inte finns någonting.
  let params: URLSearchParams = new URLSearchParams(document.location.search);
  let productQueryId: number = parseInt(params.get("id") || "0");

  const productPage = document.getElementById("productPage");
  //Loopar igenom alla produkter
  for (let i = 0; i < products.length; i++) {
    //Om det finns en produkt som har samma id som i queryn så genererar den html för den produkten.
    if (productQueryId === products[i].id) {
      (productPage as HTMLDivElement).innerHTML = "";

      //Skapar element
      const productHeading = document.createElement("h2");
      const productContainer = document.createElement("section");
      const productContainerImage = document.createElement("img");
      const productContainerInfo = document.createElement("div");
      const productContainerHeading = document.createElement("h3");
      const productContainerDescription = document.createElement("p");
      const productContainerPrice = document.createElement("span");
      const productContainerForm = document.createElement("form");
      const productContainerFormInput = document.createElement("input");
      const productContainerFormButton = document.createElement("button");

      //Tilldelar klasser
      productHeading.className = "heading__main";
      productContainer.className = "product-container";
      productContainerImage.className = "product-container__image";
      productContainerInfo.className = "product-container__info";
      productContainerHeading.className = "product-container__heading";
      productContainerDescription.className = "product-container__description";
      productContainerPrice.className = "product-container__price";
      productContainerForm.className = "product-container__form";
      productContainerFormInput.className = "product-container__form-input";
      productContainerFormButton.className = "product-container__form-button";

      //Lägger till produktinformation
      productHeading.innerHTML = products[i].name;
      productContainerImage.src = products[i].image;
      productContainerImage.alt = products[i].name;
      productContainerHeading.innerHTML = products[i].name;
      productContainerDescription.innerHTML = products[i].description;
      productContainerPrice.innerHTML =
        products[i].price.toString() + "&#x20bf;";
      productContainerFormInput.type = "number";
      productContainerFormInput.min = "1";
      productContainerFormInput.value = "1";
      productContainerFormButton.innerHTML = "Lägg till i varukorgen";

      //Placerar elementen
      productPage?.appendChild(productHeading);
      productPage?.appendChild(productContainer);
      productContainer?.appendChild(productContainerImage);
      productContainer?.appendChild(productContainerInfo);
      productContainerInfo?.appendChild(productContainerHeading);
      productContainerInfo?.appendChild(productContainerDescription);
      productContainerInfo?.appendChild(productContainerPrice);
      productContainerInfo?.appendChild(productContainerForm);
      productContainerForm?.appendChild(productContainerFormInput);
      productContainerForm?.appendChild(productContainerFormButton);

      //Avsluta for-loopen
      break;
    }
  }
}
