const productMiniSwiper = document.querySelector(".slider-with-minimap__mini");

const productMiniSwiperParams = {
	spaceBetween: 14,
	slidesPerView: 3,
	breakpoints: {
		1401: {
			slidesPerView: 4
		},
		768: {
			spaceBetween: 20,
			slidesPerView: 3
		}
	}
}

Object.assign(productMiniSwiper, productMiniSwiperParams);
productMiniSwiper.initialize();

// ------------------------------------------------------------------------------------------------------------ 

const productMainSwiper = document.querySelector(".slider-with-minimap__main");

const productMainSwiperParams = {
	navigation: {
		prevEl: ".product-product__prev",
		nextEl: ".product-product__next",
	},
	pagination: {
		el: ".product-product__pagination"
	}
}

Object.assign(productMainSwiper, productMainSwiperParams);
productMainSwiper.initialize();

// ------------------------------------------------------------------------------------------------------------
const similarProductSwiper = document.getElementById("similar-swiper");
const similarProductSwiper2 = document.getElementById("similar-swiper-2");

const similarProductSwiperParams = {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		clickable: true,
		el: "#product-similar-pagination"
	},

	navigation: {
		prevEl: ".product-similar__navigation-prev",
		nextEl: ".product-similar__navigation-next"
	},
	
	breakpoints: {
		1801: {
			slidesPerView: 4,
		},
		1451: {
			slidesPerView: 3,
		},
		701: {
			slidesPerView: 2,
		},
		551: {
			slidesPerView: 2,
		}
	},
};

const similarProductSwiperParams2 = {
	slidesPerView: 1,
	spaceBetween: 20,
	pagination: {
		clickable: true,
		el: "#product-similar-pagination-2"
	},
	navigation: {
		prevEl: ".product-similar__navigation-prev-2",
		nextEl: ".product-similar__navigation-next-2"
	},
	breakpoints: {
		1801: {
			slidesPerView: 4,
		},
		1451: {
			slidesPerView: 3,
		},
		701: {
			slidesPerView: 2,
		},
		551: {
			slidesPerView: 2,
		}
	},
};

Object.assign(similarProductSwiper, similarProductSwiperParams);
similarProductSwiper.initialize();

Object.assign(similarProductSwiper2, similarProductSwiperParams2);
similarProductSwiper2.initialize();