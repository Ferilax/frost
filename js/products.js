const products = document.querySelectorAll(".product");

products.forEach(el => {
	const swiper = el.querySelector(".product-swiper");
	const pagination = el.querySelector(".product__pagination")

	const swiperParams = {
		pagination: {
			el: pagination
		}
	}

	Object.assign(swiper, swiperParams);
	swiper.initialize();
})