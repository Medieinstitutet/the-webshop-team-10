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
export const p3: Product = new Product(3,"Chameleon",4, 3, "Cute Chameleon", 0,"/src/img/chameleon.jpg","Kenya");
export const p4: Product = new Product(4,"Tarsier",4, 3, "Cute Chameleon", 0,"/src/img/tarsier.jpg","Kenya");
export const p5: Product = new Product(5,"Quokka",4, 3, "Cute Quokka", 0,"/src/img/quokka.jpg","Kenya");
export const p6: Product = new Product(6,"Puffin",4, 3, "Cute Puffin", 0,"/src/img/puffin.jpg","Kenya");
export const p7: Product = new Product(7,"Fox",4, 3, "Cute Fox", 0,"/src/img/fox.jpg","Kenya");
export const p8: Product = new Product(8,"Tortoise",4, 3, "Cute Tortoise", 0,"/src/img/tortoise.jpg","Kenya");
export const p9: Product = new Product(9,"Cougar",4, 3, "Cute Fox", 0,"/src/img/cougar-275946_640.jpg","Kenya");
export const p10: Product = new Product(10,"Leopard",4, 3, "Cute Fox", 0,"/src/img/leopard-1.jpg","Kenya");
export const p11: Product = new Product(11,"Mammals",4, 3, "Cute Mammals", 0,"/src/img/mammals-3218028_640.jpg","Kenya");
export const p12: Product = new Product(12,"Amur Tiger",4, 3, "Cute Tiger", 0,"/src/img/tigeramur.jpg","Kenya");
export const p13: Product = new Product(13,"Leopard",4, 3, "Cute Leopard", 0,"/src/img/leopard-2.jpg","Kenya");
export const p14: Product = new Product(14,"Lemur",4, 3, "Cute Le", 0,"/src/img/lemurs-1010643_640.jpg","Kenya");
export const p15: Product = new Product(15,"Koala",4, 3, "Cute coala", 0,"/src/img/koalas-61189_640.jpg","Kenya");
export const p16: Product = new Product(16,"Raccon",4, 3, "Cute raccoon", 0,"/src/img/raccoon.jpg","Kenya");
export const p17: Product = new Product(17,"Monkey",4, 3, "Cute Monkey", 0,"/src/img/monkey.jpg","Kenya");
export const p18: Product = new Product(18,"Meerkat",4, 3, "Cute Meerkat",0, "/src/img/meerkat.jpg","Kenya");
export const p19: Product = new Product(19,"Red Panda (baby)",4, 3, "Cute Panda", 0,"/src/img/red-panda.jpg","Kenya");
export const p20: Product = new Product(20,"Flamingo",4, 3, "Cute Leopard", 0,"/src/img/flamingo.jpg","Kenya");









export const products: Product[] = [p1, p2, p3,p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20];

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
