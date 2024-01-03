import { Product } from "../models/Product";
import { addToCart } from "./cartServices";

export const p1: Product = new Product(1,"Tiger", 5, 2,"Tiger är ett stort och majestätiskt kattdjur som lever främst i Asien. Deras orange och svart mönstrade päls samt deras karakteristiska vertikala ränder gör dem till omedelbart igenkännliga djur.", 0, "src/img/tiger.jpg","Indien");
export const p2: Product = new Product(2,"Lejon", 4, 3,"Kungar i djungeln.Med sin kraftfulla kroppsbyggnad och imponerande man är lejon perfekta för samlare av exotiska arter.", 0, "src/img/lejon.jpg","Kenya");
export const p3: Product = new Product(3,"Kameleont",5,0.05 , "En färgstark reptil med förmågan att ändra färg beroende på sin omgivning. Perfekt som sällskapsdjur för de som är fascinerade av djur med unika anpassningar", 0,"/src/img/chameleon.jpg","Madagaskar");
export const p4: Product = new Product(4,"Tarsier",3.5, 0.035, "En liten primat med stora ögon och en smidig kropp. Denna nattaktiva art är känd för sitt fantastiska hoppande och är ett utmärkt val för dem som önskar sig en apart men snäll vän.", 0,"/src/img/tarsier.jpg","Borneo och Sumatra");
export const p5: Product = new Product(5,"Quokka",4, 3, "En lekfull och socialt djur som är inhemskt för Australien. Med sitt charmiga leende och vänliga natur är kvokkan det perfekta valet för alla som älskar att ha roligt och sprida glädje.", 0,"/src/img/quokka.jpg","Australien");
export const p6: Product = new Product(6,"Lunnefågel",4, 3, "En färgglad och charmerande sjöfågel som är känd för sitt karaktäristiska utseende och sitt vackra flyg. Med sin unika personlighet är lunnefågeln ett utmärkt val för de som älskar naturen och det marina livet.", 0,"/src/img/puffin.jpg","Island");
export const p7: Product = new Product(7,"Räv",4, 3, "Rävar tillhör familjen hunddjur och är kända för sina slanka kroppar och busiga personligheter. De finns i många delar av världen, inklusive Europa, Asien, Nordamerika och Afrika. Rävar har en varierande kost och kan äta allt från små däggdjur, fåglar, insekter, frukt och bär. Dessa djur är kända för sina smidiga rörelser och snabbhet när de jagar sitt byte.De är också mycket anpassningsbara och kan anpassa sig till både lantliga och urbana miljöer. Rävar är oftast aktiva på natten och kan vara högljudda med sina karakteristiska skrik och skall.", 0,"/src/img/fox.jpg","Nordamerika");
export const p8: Product = new Product(8,"Sköldpadda",8, 0.003, " En tålig och långlivad sköldpadda som är en populär favorit bland reptilälskare. Denna landsköldpadda är en perfekt för dem som vill ha ett sällskapsdjur som ger stillsamhet och lugn.", 0,"/src/img/tortoise.jpg","Seyshellerna");
export const p9: Product = new Product(9,"Puma",5, 0.06, "En majestätisk stor katt som är känd för sin kraft och smidighet. Med sitt eleganta utseende och sin jägarkompetens är puman ett fantastiskt val för dem som har en passion för vilda katter.", 0,"/src/img/cougar-275946_640.jpg","Syd- och Nordamerika");
export const p10: Product = new Product(10,"Leopard",4, 0.05, "En vacker och kraftfull stor katt som är känd för sina vackra fläckar och smidighet. Leoparden är den ultimata symbolen för elegans och styrka och är ett fantastiskt val för dem som vill ha ett unikt sällskapsdjur.", 0,"/src/img/leopard-1.jpg","Kenya");
export const p11: Product = new Product(11,"Fennek Räv",1.5, 0.005, "Cute Fennec", 0,"/src/img/mammals-3218028_640.jpg","Nord Afrika");
export const p12: Product = new Product(12,"Amur Tiger",4, 0.06, "Amurtiger är en underart av tigrar och är känd för sin starka och robusta kropp. Dessa vackra kattdjur är infödda i östra Sibirien och Nordkina och har vanligtvis en gulaktig-orange päls med svarta ränder. Amurtiger anses vara hotade och kan vara en ovanlig och värdefull tillgång för entusiaster av exotiska djur.", 0,"/src/img/tigeramur.jpg","Östra Sibirien och Nordkina");
export const p13: Product = new Product(13,"Leopard",6, 0.08, "Leoparder tillhör familjen katter och är kända för sin eleganta kroppsbyggnad och snygga fläckade päls. Dessa stora katter finns i olika delar av världen, inklusive Afrika och Asien. Leoparden är känd som en skicklig jägare och är specialiserad på att smyga sig på sitt byte innan de slår till. De har kraftfulla kroppar och är skickliga klättrare, vilket gör dem kapabla att bära med sig sina byten upp i träd för att skydda dem från andra rovdjur. Leoparden är ensamlevande och territorial och jagar oftast nattetid. Förutom att vara rovdjur är leoparder också utmärkta simmare och kan till och med simma i floder.", 0,"/src/img/leopard-2.jpg","Tanzania");
export const p14: Product = new Product(14,"Lemur",3, 0.015, " En exotisk primat från Madagaskar med stora, uttrycksfulla ögon och en lång svans. Med sin lekfulla personlighet och sin unika levnadsmiljö är lemur en perfekt vän för de som älskar att utforska och upptäcka.", 0,"/src/img/lemurs-1010643_640.jpg","Madagaskar");
export const p15: Product = new Product(15,"Koala",1.5, 0.045, "En ikonisk björn med ett mjukt, plyschigt utseende och en söt noshörning. Med sin avslappnade livsstil och sin kärvänliga natur är koalan ett underbart sällskapsdjur för alla som vill ha en gosig och tillgiven vän.", 0,"/src/img/koalas-61189_640.jpg","Avstralien");
export const p16: Product = new Product(16,"Tvättbjörn",5, 0.085, "Intelligent, nyfiken och skicklig på att använda sina tassar för att manipulera föremål.", 0,"/src/img/raccoon.jpg","Nordamerika");
export const p17: Product = new Product(17,"Apa",2, 0.050, "Apor tillhör familjen primater och är kända för sin förmåga att klättra och hoppa mellan träd. Dessa intelligenta djur finns i olika typer över hela världen, inklusive asiatiska, afrikanska och medelhavsarter. Aporna hittas i olika levnadsmiljöer, såsom regnskogar, bergen och savanner. De har långa svansar som ofta används som ett balansverktyg, och deras klor och fötter är anpassade för att bära deras kroppsvikt när de klättrar. Apor är mycket sociala djur och lever i grupper  som består av flera individer. De har varierande kostvanor och kan äta allt från frukt och blad till insekter och smådjur.", 0,"/src/img/monkey.jpg","Asien");
export const p18: Product = new Product(18,"Meerkat",1.9, 0.035, "En charmig och social liten gnagare som är känd för sin förmåga att leva i kolonier och för sin vaksamhet. Surikaten är ett fantastiskt sällskapsdjur för dem som älskar att ha aktivitet runt omkring sig och som värdesätter gemenskap och samhörighet.",0, "/src/img/meerkat.jpg","Södra Afrika");
export const p19: Product = new Product(19,"Röd Panda ",1.2,0.08 , "Röda pandor, även kallade små pandor, är små, trädlevande djur som är inhemska i Himalaya-regionen. Med sin unika kombination av rödbrun päls, långa svans och roliga ansiktsuttryck ses de ofta som en hybrid mellan räv och panda. Dessa livliga varelser har blivit populära för sin gullighet och charm.)", 0,"/src/img/red-panda.jpg","Kina");
export const p20: Product = new Product(20,"Flamingo",2, 0.025, "Flamingos är stora fåglar med långa, böjda nackar och färgglada fjädrar. Deras karakteristiska rosa färg kommer från det pigment de får genom sin kost. Flamingos är kända för sina eleganta kroppshållningar och flockbeteende.", 0,"/src/img/flamingo.jpg","Sydamerika");



export const products: Product[] = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
];

//Fuktion för att skapa html för produkter.
export const createProductsHtml = () => {
  const productsContainer = document.getElementById("productsContainer");

  //Loopar igenom hela products och genererar html.
  for (let i = 0; i < products.length; i++) {
    //Skapar element
    const productCard = document.createElement("a");
    // const productCardLink = document.createElement("a");
    const productCardImage = document.createElement("img");
    const productCardName = document.createElement("h3");
    const productCardountry = document.createElement("p");
    const productCardPrice = document.createElement("span");
    const productCardButton = document.createElement("button");

    //Tilldelar klasser
    productCard.className = "product-card";
    // productCardLink.className = "product-card__link";
    productCardImage.className = "product-card__image";
    productCardName.className = "product-card__name";
    productCardountry.className = "product-card__country";
    productCardPrice.className = "product-card__price";
    productCardButton.className = "product-card__button";

    //Lägger till produktinformation
    productCard.href = "/?id=" + products[i].id;
    productCardImage.src = products[i].image;
    productCardImage.alt = products[i].name;
    productCardName.innerHTML = products[i].name;
    productCardountry.innerHTML = products[i].country;
    productCardPrice.innerHTML = products[i].price.toFixed(3) + "&#x20bf;";
    productCardButton.innerHTML = "Lägg till i varukorg";

    //Placerar elementen
    productsContainer?.appendChild(productCard);
    // productCard.appendChild(productCardLink);
    productCard.appendChild(productCardImage);
    productCard.appendChild(productCardName);
    productCard.appendChild(productCardountry);
    productCard.appendChild(productCardPrice);
    productCard.appendChild(productCardButton);

    //Funktionalitet för knapp
    productCardButton.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(products[i], 1);
    });
  }
};

//Skapa html för enskilda produktsidor
export const createProductHtml = () => {
  //Kontrollera och hitta produktid från query i url:en
  if (document.location.search) {
    //Ta fram vad som finns i url-queryn "id". Ger 0 ifall det inte finns någonting.
    let params: URLSearchParams = new URLSearchParams(document.location.search);
    let productQueryId: number = parseInt(params.get("id") || "0");

    //Om det inte finns någon giltig query skickas man till index
    if (productQueryId === 0) {
      window.location.assign("index.html");
    }

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
        productContainerDescription.className =
          "product-container__description";
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
          products[i].price.toFixed(3) + "&#x20bf;";
        productContainerFormInput.type = "number";
        //Gör så att minsta värde på inputen är 1
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

        //Funktionalitet för att lägga till produkten i varukorgen
        productContainerForm.addEventListener("submit", (e) => {
          e.preventDefault();

          //Hämtar numret från productContainerFormInput. Ger värdet 1 ifall något blir fel.
          const quantity: number =
            parseInt(productContainerFormInput.value) || 1;

          addToCart(products[i], quantity);
        });

        //Avsluta for-loopen
        break;
      }
      // --- SLUT PÅ for-LOOP ---

      //Om alla produkter har loopats och ingenting har hittats skickas användaren till index.html
      if (i === products.length - 1) {
        window.location.assign("index.html");
      }
    }
  }
};
