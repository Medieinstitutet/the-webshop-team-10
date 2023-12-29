//Skapa Navbar genom att genererar de med ts
const header = document.createElement('header');
header.className = 'header';
header.id = 'header';

const navbar = document.createElement('nav');
navbar.className = 'navbar';

const navbarLogoImage = document.createElement('img');
navbarLogoImage.className = 'navbar__logo-image';
navbarLogoImage.src = '#'; 
navbarLogoImage.alt = 'Logo';

const navbarLogoName = document.createElement('a');
navbarLogoName.className = 'navbar__logo-name';
navbarLogoName.href = '#'; 
navbarLogoName.innerHTML = 'Webshop Name...nått coolt';

const navbarUl = document.createElement('ul');
navbarUl.className = 'navbar__ul';

const navbarLi = document.createElement('li');
navbarLi.className = 'navbar__li';

const navbarLinkHome = document.createElement('a');
navbarLinkHome.href = '#';
navbarLinkHome.innerHTML = 'Home';

const cartButton = document.createElement('button');
cartButton.id = 'cartButton';
cartButton.innerHTML = 'Varukorg';

const hamburgerMenu = document.createElement('div');
hamburgerMenu.className = 'hamburger-menu';

navbarLi.appendChild(navbarLinkHome); 
navbarUl.appendChild(navbarLi);
navbarLogoName.appendChild(navbarLogoImage);
navbar.appendChild(navbarLogoName);
navbar.appendChild(navbarUl);
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

/*vet inte om man ska använda dom här eller om de bara funkar med home*/
/*const navbarLinkProduct = document.createElement('a');
navbarLinkProduct.href = '#';
navbarLinkProduct.innerHTML = 'Produkter';

const navbarLinkCart = document.createElement('a');
navbarLinkCart.href = '#';
navbarLinkCart.innerHTML = 'Kassa';

const navbarLinkAboutUs = document.createElement('a');
navbarLinkAboutUs.href = '#';
navbarLinkAboutUs.innerHTML = 'Om Oss';*/
