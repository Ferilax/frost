const methods = document.querySelectorAll(".delivery-payment__method");
const methodTabs = document.querySelectorAll(".delivery-payment__tab");
const methodTabsContent = document.querySelectorAll(".delivery-payment__tab-content");
const payMethodSwiper = document.getElementById("pay-method-swiper");
const payMethodSwiper2 = document.getElementById("pay-method-swiper-2");

// Выбор пособа оплаты
methods.forEach(el => {
	el.addEventListener("click", () => {
		methods.forEach(el => {
			el.classList.remove("active");
		})
		el.classList.add("active");
	})
})


// Свайперы
const payMethodSwiperParams = {
	slidesPerView: "auto",
	spaceBetween: 14,
	watchSlidesProgress: true,

	scrollbar: {
		el: "#pay-method-swiper-scrollbar",
	},

	breakpoints: {
		601: {
			spaceBetween: 20,
		}
	}
}

Object.assign(payMethodSwiper, payMethodSwiperParams);
Object.assign(payMethodSwiper2, payMethodSwiperParams);
payMethodSwiper.initialize();
payMethodSwiper2.initialize();

// Выбор таба
methodTabs.forEach((el, idx) => {
	el.addEventListener("click", () => {
		methodTabs.forEach((element, idx) => {
			element.classList.remove("active");
			methodTabsContent[idx].classList.remove("active");
		})

		el.classList.add("active");
		methodTabsContent[idx].classList.add("active");
	})
})