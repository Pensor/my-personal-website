const mainNav = document.getElementById('menu');
const navbarToggle = document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click', () => {
  
  mainNav.classList.toggle('visible');

});