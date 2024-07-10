
const products = document.querySelectorAll(".product");

products.forEach(el => {
	const swiper = el.querySelector(".product-swiper");
	const pagination = el.querySelector(".product__pagination");
	const button = el.querySelector(".product__button");
	const head = el.querySelector(".product__header");

	head.addEventListener("click", (e) => {
		e.preventDefault();
	})

	button.addEventListener("click", (e) => {
		e.preventDefault();
	})

	const swiperParams = {
		pagination: {
			el: pagination
		}
	}

	Object.assign(swiper, swiperParams);
	swiper.initialize();

})