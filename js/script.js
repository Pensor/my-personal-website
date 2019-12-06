const mainNav = document.getElementById('menu');
const navbarToggle = document.getElementById('navbar-toggle');
const navbar = document.querySelector('.nav-bar');

navbarToggle.addEventListener('click', () => {
	mainNav.classList.toggle('visible');
	navbarToggle.classList.toggle('active');
	navbar.classList.toggle('visible');
});

const myDescriptions = document.querySelectorAll('.show-on-scroll');

observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('slide');
		} //else {
		//entry.target.classList.remove('slide');
		//}
	});
});

myDescriptions.forEach(description => {
	observer.observe(description);
});
