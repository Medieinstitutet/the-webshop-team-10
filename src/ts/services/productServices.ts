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
    const productCardImage = document.createElement("img");
    const productCardName = document.createElement("h3");
    const productCardPrice = document.createElement("span");
    const productCardButton = document.createElement("button");

    //Tilldelar klasser
    productCard.className = "product-card";
    productCardImage.className = "product-card__image";
    productCardName.className = "product-card__name";
    productCardPrice.className = "product-card__price";
    productCardButton.className = "product-card__button";

    //Lägger till produktinformation
    productCardImage.src = products[i].image;
    productCardImage.alt = products[i].name;
    productCardName.innerHTML = products[i].name;
    productCardPrice.innerHTML = products[i].price.toString() + "&#x20bf;";
    productCardButton.innerHTML = "Lägg till i varukorg";

    //Placerar elementen
    productsContainer?.appendChild(productCard);
    productCard.appendChild(productCardImage);
    productCard.appendChild(productCardName);
    productCard.appendChild(productCardPrice);
    productCard.appendChild(productCardButton);

    //Funktionalitet för knapp
    productCardButton.addEventListener("click", () => {
      addToCart(products[i], 1);
    });
  }
};

createProductsHtml();
