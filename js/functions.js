const toggleMenu = () => {
   menu.setAttribute('aria-expanded', String(menu.getAttribute('aria-expanded') === 'false'))
   const isMenuOpen = menu.getAttribute('aria-expanded') === 'true';
   const isMobile = window.matchMedia('(max-width: 699px)').matches;
   const isOpenInMobile = isMobile && isMenuOpen

   if (isOpenInMobile) {
      menu.style.display = 'block'
      menuIcon.setAttribute("disabled", "");
   } else {
      menu.classList.add('hidden')
      setTimeout(() => {
         menu.style.display = 'none';
         menu.classList.remove('hidden');
         menuIcon.removeAttribute("disabled")
      }, 500)
   }
   navLink.style.color = isOpenInMobile ? '#4831d4' : '#ccf381';

   menuIcon.classList.replace(
      isOpenInMobile ? 'menu-icon' : 'menu-icon--newcolor',
      isOpenInMobile ? 'menu-icon--newcolor' : 'menu-icon'
   );

   body.style.overflow = isOpenInMobile ? 'hidden' : 'auto';
}