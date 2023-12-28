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
const createProductsHtml = () => {
  for (let i = 0; i < products.length; i++) {
    const productCard = document.createElement("div");
    const productCardImage = document.createElement("img");
    const productCardName = document.createElement("h3");
    const productCardPrice = document.createElement("span");
    const productCardButton = document.createElement("button");

    productCard.className = "product-card";
    productCardImage.className = "product-card__image";
    productCardName.className = "product-card__name";
    productCardPrice.className = "product-card__price";
    productCardButton.className = "product-card__button";

    productCardImage.src = products[i].image;
    productCardImage.alt = products[i].name;
    productCardName.innerHTML = products[i].name;
    productCardPrice.innerHTML = products[i].price.toString() + "&#x20bf;";
    productCardButton.innerHTML = "Lägg till i varukorg";

    productsContainer?.appendChild(productCard);
    productCard.appendChild(productCardImage);
    productCard.appendChild(productCardName);
    productCard.appendChild(productCardPrice);
    productCard.appendChild(productCardButton);

    productCardButton.addEventListener("click", () => {
      addToCart(products[i], 1);
    });
  }
};

createProductsHtml();
