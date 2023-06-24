const container = document.querySelector('.container');
const menuIcon = document.querySelector('.menu-icons');
const containerNoScroll = document.querySelector('.container-noscroll');

menuIcon.addEventListener('click', () => {
   container.classList.replace('container', 'container-noscroll');
   containerNoScroll.style.display = 'block';

});
