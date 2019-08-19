const mainNav = document.getElementById('menu');
const navbarToggle = document.getElementById('navbar-toggle');
const navbar = document.querySelector('.nav-bar');

navbarToggle.addEventListener('click', () => {
  
  mainNav.classList.toggle('visible');
  navbarToggle.classList.toggle('active');
  navbar.classList.toggle('visible');
});