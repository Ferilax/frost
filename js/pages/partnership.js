const partnershipReviewsSwiper = document.getElementById("partnership-reviews-swiper");

const partnershipReviewsSwiperParams = {
	slidesPerView: 1,
	spaceBetween: 20,
	navigation: {
		prevEl: ".partnership-reviews__prev",
		nextEl: ".partnership-reviews__next",
	},
	pagination: {
		el: ".partnership-reviews__pagination"
	},

	breakpoints: {
		901: {
			slidesPerView: 2,
		}
	}
}

Object.assign(partnershipReviewsSwiper, partnershipReviewsSwiperParams);
partnershipReviewsSwiper.initialize();