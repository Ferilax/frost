const mainSwiper = document.getElementById("event-swiper");

const productsSwiper = document.getElementById("products-swiper");
const productsSwiper2 = document.getElementById("products-swiper-2");

const partnerSwiper = document.getElementById("partner-swiper");
const partnerSwiper2 = document.getElementById("partner-swiper-2");

const products = document.querySelectorAll(".product");

const mainSwiperParams = {
	slidesPerView: 1,
	spaceBetween: 16,
	breakpoints: {
		1650: {
			slidesPerView: 4,
		},
		1151: {
			slidesPerView: 3,
		},
		701: {
			spaceBetween: 20,
			slidesPerView: 2,
		},
		461: {
			slidesPerView: 2,
		}
	},
};

const partnerSwiperParams = {
	slidesPerView: 2,
	spaceBetween: 20,
	breakpoints: {
		1701: {
			slidesPerView: 6,
		},
		1401: {
			slidesPerView: 5,
		},
		751: {
			slidesPerView: 4,
		},
		601: {
			slidesPerView: 3,
		},
		471: {
			slidesPerView: 2.5,
		},
	},
};

const productsSwiperParams = {
	slidesPerView: 1,
	spaceBetween: 20,

	breakpoints: {
		1901: {
			slidesPerView: 6,
		},
		1601: {
			slidesPerView: 5,
		},
		1401: {
			slidesPerView: 4,
		},
		951: {
			slidesPerView: 3,
		},
		471: {
			slidesPerView: 2,
		},
	},
}

// Инициализация всех свайперов в продукте
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

Object.assign(mainSwiper, mainSwiperParams);
Object.assign(productsSwiper, productsSwiperParams);
Object.assign(productsSwiper2, productsSwiperParams);
Object.assign(partnerSwiper, partnerSwiperParams);
Object.assign(partnerSwiper2, partnerSwiperParams);

mainSwiper.initialize();
productsSwiper.initialize();
productsSwiper2.initialize();
partnerSwiper.initialize();
partnerSwiper2.initialize();

// Фильтры продуктов ----------------------
const productsFilters = document.querySelector(".products__filters");

productsFilters.addEventListener("click", function (e) {
	clickedFilter = e.target.closest(".products__filter");

	this.querySelectorAll(".products__filter").forEach(el => {
		el.classList.remove("active");
	})

	clickedFilter.classList.add("active");
})

// Каталог продуктов на главной странице ------------------------
const production = document.querySelector(".production");
const productionShowHide = document.querySelector(".production__show");

productionShowHide.addEventListener("click", () => {
	production.classList.toggle("show")
});
