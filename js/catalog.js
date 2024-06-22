// Каталог продуктов на главной странице ------------------------
const production = document.querySelector(".menu-catalog");
const productionShowHide = document.querySelector(".menu-catalog__show");

productionShowHide.addEventListener("click", () => {
	production.classList.toggle("show")
});

// Слайдеры ----------------------------------------------------