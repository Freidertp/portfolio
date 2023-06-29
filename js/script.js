const container = document.querySelector('.container')
const navLink = document.querySelector('.nav__link')
const menuIcon = document.querySelector('.menu-icons__icon')
const section = document.querySelector('.section')
const menu = document.querySelector('.menu')
const figure = document.querySelector('.figure-background')
const image = document.querySelector('.figure-background__img')

const toggleMenu = () => {
   container.getAttribute('aria-hidden') === 'false'
      ? container.setAttribute('aria-hidden', 'true')
      : container.setAttribute('aria-hidden', 'false');

   const isMobile = window.innerWidth < 700;
   const isContainerHidden = container.getAttribute('aria-hidden') === 'true';

   menu.style.display = isMobile && isContainerHidden ? 'flex' : 'none';
   navLink.style.color = isMobile && isContainerHidden ? '#4831d4' : '#ccf381';
   menuIcon.classList.replace(
      isMobile && isContainerHidden ? 'menu-icons__icon' : 'menu-icons__icon--newcolor',
      isMobile && isContainerHidden ? 'menu-icons__icon--newcolor' : 'menu-icons__icon'
   );

   figure.style.display = isMobile && isContainerHidden ? 'none' : 'block';
   image.style.display = isMobile && isContainerHidden ? 'none' : 'block';
   section.style.display = isMobile && isContainerHidden ? 'none' : 'flex';

};


menu.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);


