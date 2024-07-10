const foodMiniSwiper = document.querySelector(".slider-with-minimap__mini");
const foodMainSwiper = document.querySelector(".slider-with-minimap__main");
const similarEventSwiper = document.getElementById("similar-swiper");

const foodMiniSwiperParams = {
	spaceBetween: 14,
	slidesPerView: 3,
	breakpoints: {
		651: {
			spaceBetween: 20,
		}
	}
}

const foodMainSwiperParams = {
	navigation: {
		prevEl: ".event-food-info__prev",
		nextEl: ".event-food-info__next",
	}
}

const similarEventSwiperParams = {
	slidesPerView: 1,
	spaceBetween: 16,
	pagination: {
		clickable: true
	},
	navigation: {
		prevEl: ".event-similar__navigation-prev",
		nextEl: ".event-similar__navigation-next"
	},
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

Object.assign(foodMiniSwiper, foodMiniSwiperParams);
Object.assign(foodMainSwiper, foodMainSwiperParams);
Object.assign(similarEventSwiper, similarEventSwiperParams);

foodMiniSwiper.initialize();
foodMainSwiper.initialize();
similarEventSwiper.initialize();