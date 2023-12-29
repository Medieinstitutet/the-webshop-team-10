// Skapar header elementet
const header = document.createElement('header');
header.className = 'header';
header.id = 'header';

// Skapar navbar elementet
const navbar = document.createElement('nav');
navbar.className = 'navbar';

// Skapar logo bilden
const navbarLogoImage = document.createElement('img');
navbarLogoImage.className = 'navbar__logo-image';
navbarLogoImage.src = '#';
navbarLogoImage.alt = 'Logo';

// Skapar länk till logans namn (hemsidans namn)
const navbarLogoName = document.createElement('a');
navbarLogoName.className = 'navbar__logo-name';
navbarLogoName.href = '#';
navbarLogoName.innerHTML = 'Webbshop Namn...något coolt';

// Skapa ul elementet
const navbarUl = document.createElement('ul');
navbarUl.className = 'navbar__ul';

// Skapar Home länk och html på navbaren
const navbarLiHome = document.createElement('li');
navbarLiHome.className = 'navbar__li';

const navbarLinkHome = document.createElement('a');
navbarLinkHome.href = '#';
navbarLinkHome.innerHTML = 'Hem';
navbarLiHome.appendChild(navbarLinkHome);
navbarUl.appendChild(navbarLiHome);

// Skapar Produkter länk och html på navbaren
const navbarLiProduct = document.createElement('li');
navbarLiProduct.className = 'navbar__li';

const navbarLinkProduct = document.createElement('a');
navbarLinkProduct.href = '#';
navbarLinkProduct.innerHTML = 'Produkter';
navbarLiProduct.appendChild(navbarLinkProduct);
navbarUl.appendChild(navbarLiProduct);

// Skapar Kassa länk och html på navbaren
const navbarLiCart = document.createElement('li');
navbarLiCart.className = 'navbar__li';

const navbarLinkCart = document.createElement('a');
navbarLinkCart.href = '#';
navbarLinkCart.innerHTML = 'Kassa';
navbarLiCart.appendChild(navbarLinkCart);
navbarUl.appendChild(navbarLiCart);

// Skapar Om Oss länk och html på navbaren
const navbarLiAboutUs = document.createElement('li');
navbarLiAboutUs.className = 'navbar__li';

const navbarLinkAboutUs = document.createElement('a');
navbarLinkAboutUs.href = '#';
navbarLinkAboutUs.innerHTML = 'Om Oss';
navbarLiAboutUs.appendChild(navbarLinkAboutUs);
navbarUl.appendChild(navbarLiAboutUs);

// Skapar knapp för varukorg
const cartButton = document.createElement('button');
cartButton.id = 'cartButton';
cartButton.innerHTML = 'Varukorg';

// Skapar hamburgermenu
const hamburgerMenu = document.createElement('div');
hamburgerMenu.className = 'hamburger-menu';

// Lägg till element för att bygga navbar
navbar.appendChild(navbarLogoImage);
navbar.appendChild(navbarLogoName);
navbar.appendChild(navbarUl);
navbar.appendChild(cartButton);
navbar.appendChild(hamburgerMenu);

// Lägg till navbar i header och header i bodyn
header.appendChild(navbar);
document.body.appendChild(header);



/*<header class="header" id="header">
<nav class="navbar">
  <img class="navbar__logo-image" src="" alt="Logo" />
  <a class="navbar__logo-name" href="">Animals catalogue</a>

  <ul class="navbar__ul">
    <li class="navbar__li"><a class="navbar__link" href="#">Home</a></li>
    <li class="navbar__li">
      <a class="navbar__link" href="#">Produkter</a>
    </li>
    <li class="navbar__li"><a class="navbar__link" href="#">Kassa</a></li>
    <li class="navbar__li">
      <a class="navbar__link" href="#">Om oss</a>
    </li>
  </ul>
  <button id="cartButton">Varukorg</button>
  <div class="hamburger-menu">
    <span class="hamburger-menu__bar1"></span>
    <span class="hamburger-menu__bar2"></span>
    <span class="hamburger-menu__bar3"></span>
  </div>
</nav>
</header>*/


