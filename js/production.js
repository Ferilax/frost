const production = document.querySelector(".production");
const productionShowHide = document.querySelector(".production__show");

productionShowHide.addEventListener("click", () => {
	production.classList.toggle("show")
});
