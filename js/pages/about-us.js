

const swiper = document.getElementById("history-swiper");

const swiperParams = {
	pagination: {
		clickable: true,
		el: ".history-section__pagination",

		renderBullet: function (index, className) {
			return `<span class="history-section__date ${className}">${2023 - index}</span>`;
		},
	},

	navigation: {
		prevEl: ".history-section_navigation-prev",
		nextEl: ".history-section_navigation-next"
	},
}

Object.assign(swiper, swiperParams);

swiper.initialize();