// Каталог продуктов на главной странице ------------------------
const production = document.querySelector(".menu-catalog");
const productionShowHide = document.querySelector(".menu-catalog__show");

productionShowHide.addEventListener("click", () => {
	production.classList.toggle("show")
});

// Фильтры ----------------------------------------------------
const filter = document.querySelector(".catalog-filters");
const filterTrigger = document.querySelector(".catalog-filter-trigger");
const filterClose = document.querySelector(".catalog-filters__close");

filterTrigger.addEventListener("click", () => {
	filter.classList.add("open");
	document.body.classList.add("lock");
});

filterClose.addEventListener("click", () => {
	filter.classList.remove("open");
	document.body.classList.remove("lock");
})