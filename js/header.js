const catalogTrigger = document.querySelector(".header__catalog-trigger");
const dropdown = document.querySelector(".header .dropdown");
const closeButton = document.querySelector(".dropdown__close");

window.addEventListener("resize", function(e) {
	if (window.innerWidth >= 768) {
		document.body.classList.remove("lock");
	}
})

catalogTrigger.addEventListener("click", function(e) {
	e.stopPropagation();
	dropdown.classList.toggle("open");
	catalogTrigger.classList.toggle("active");

	if (window.innerWidth < 768) {
		document.body.classList.toggle("lock");
	}
});

document.addEventListener("click", function(e) {
	const closeButtonClick = e.target.closest(".dropdown__close");
	const outsideClick = !e.target.closest(".dropdown");

	if (closeButtonClick || outsideClick) {
		dropdown.classList.remove("open");
		catalogTrigger.classList.remove("active");
		document.body.classList.remove("lock");
	}
});