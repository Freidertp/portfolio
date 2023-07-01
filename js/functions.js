const toggleMenu = () => {
   menu.getAttribute('aria-expanded') === 'false'
      ? menu.setAttribute('aria-expanded', 'true')
      : menu.setAttribute('aria-expanded', 'false')
   const isMenuOpen = menu.getAttribute('aria-expanded') === 'true';
   const isMobile = window.matchMedia('(max-width: 700px)').matches;

   isMenuOpen && isMobile
      ? menu.style.display = 'block'
      : (menu.classList.add('hidden'),
         setTimeout(() => {
            menu.style.display = 'none';
            menu.classList.remove('hidden');
         }, 500)
      );
   navLink.style.color = isMobile && isMenuOpen ? '#4831d4' : '#ccf381';

   menuIcon.classList.replace(
      isMobile && isMenuOpen ? 'menu-icon' : 'menu-icon--newcolor',
      isMobile && isMenuOpen ? 'menu-icon--newcolor' : 'menu-icon'
   );

   body.style.overflow = isMobile && isMenuOpen ? 'hidden' : 'auto';
}