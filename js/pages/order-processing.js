
// Переключить контент при отправке
const submitButton = document.querySelector(".basket-panel__button");
const form = document.querySelector(".processing-main-form");
const complete = document.querySelector(".processing-complete");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	form.classList.add("hidden");
	complete.classList.add("visible");
});


// Выбор пособа оплаты
const deliveryMethods = document.getElementById("processing-delivery-method").querySelectorAll(".processing-method__item");
const paymentMethods = document.getElementById("processing-payment-method").querySelectorAll(".processing-method__item");

deliveryMethods.forEach(el => {
	el.addEventListener("click", () => {
		deliveryMethods.forEach(el => {
			el.classList.remove("active");
		})
		el.classList.add("active");
	})
})

paymentMethods.forEach(el => {
	el.addEventListener("click", () => {
		paymentMethods.forEach(el => {
			el.classList.remove("active");
		})
		el.classList.add("active");
	})
})


// Панель
document.addEventListener('DOMContentLoaded', () => {
	const panel = document.querySelector(".basket-panel");
	const board = document.querySelector(".processing-board");

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const boardTop = board.getBoundingClientRect().top;

			if (entry.isIntersecting) {
				panel.classList.remove("active");
				// Дополнительные действия, если элемент в зоне видимости
			} else if (boardTop > 0) {
				panel.classList.add("active");
				// Дополнительные действия, если элемент вне зоны видимости
			}
		});
	});

	observer.observe(board);
});