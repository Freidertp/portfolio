const body = document.querySelector('body');
const container = document.querySelector('.container')
const navLink = document.querySelector('.nav__link')
const menuIcon = document.querySelector('.menu-icon')
const sections = document.querySelector('.sections')
const menu = document.querySelector('.menu')
const figure = document.querySelector('.figure-background')
const image = document.querySelector('.figure-background__img')



const toggleMenu = () => {
   container.getAttribute('aria-hidden') === 'false'
      ? container.setAttribute('aria-hidden', 'true')
      : container.setAttribute('aria-hidden', 'false');

   const isMobile = window.innerWidth < 700;
   const isContainerHidden = container.getAttribute('aria-hidden') === 'true';


   body.style.overflow = isMobile && isContainerHidden ? 'hidden' : 'auto';
   menu.style.display = isMobile && isContainerHidden ? 'flex' : 'none';
   navLink.style.color = isMobile && isContainerHidden ? '#4831d4' : '#ccf381';
   menuIcon.classList.replace(
      isMobile && isContainerHidden ? 'menu-icon' : 'menu-icon--newcolor',
      isMobile && isContainerHidden ? 'menu-icon--newcolor' : 'menu-icon'
   );
   sections.style.display = isMobile && isContainerHidden ? 'none' : 'block';
   figure.style.display = isMobile && isContainerHidden ? 'none' : 'block';
   image.style.display = isMobile && isContainerHidden ? 'none' : 'block';
};

menu.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);

