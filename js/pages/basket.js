// Инициализация свайперов
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

// Выбор всех чекбоксов
const selectAllCheckbox = document.querySelector(".basket-products__checkbox input");
const checkboxes = document.querySelectorAll(".product-card__checkbox input");

selectAllCheckbox.addEventListener("change", () => {
	checkboxes.forEach(el => {
		el.checked = selectAllCheckbox.checked;
	})
})

checkboxes.forEach(el => {
	el.addEventListener("change", () => {
		let isAllSelected;

		for (element of checkboxes) {
			if (element.checked === false) {
				isAllSelected = false;
				break;
			} else {
				isAllSelected = true;
			}
		}

		selectAllCheckbox.checked = isAllSelected;
	})
})

// Панель

document.addEventListener('DOMContentLoaded', () => {
	const panel = document.querySelector(".basket-panel");
	const board = document.querySelector(".basket-products__right");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const boardTop = board.getBoundingClientRect().top;

			if (entry.isIntersecting) {
				panel.classList.remove("active")
				// Дополнительные действия, если элемент в зоне видимости
			} else if (boardTop > 0) {
				panel.classList.add("active")
				// Дополнительные действия, если элемент вне зоны видимости
			}
		});
	});

	observer.observe(board);
});