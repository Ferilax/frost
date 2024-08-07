const ru = {
	days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
	daysShort: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
	daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
	months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
	monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
	today: "Сегодня",
	clear: "Очистить",
	titleFormat: "MM y",
	format: "dd/mm/yyyy",
	weekStart: 1
}
Datepicker.locales["ru"] = ru;

// Настройки
function initDatepicker(element) {
	if (element) {
		const datepicker = new Datepicker(element, {
			language: "ru",
			maxView: 1,
			prevArrow: '<img src="img/svg/chevron-left.svg" alt="ben" />',
			nextArrow: '<img src="img/svg/chevron-right.svg" alt="ben" />',
		});

		element.addEventListener('changeView', keepFirstWord);
		element.addEventListener('changeMonth', keepFirstWord);
	}
}

// Инициализация
const allDatepickers = document.querySelectorAll(".datepicker-component");

allDatepickers.forEach(el => {
	initDatepicker(el);

	el.addEventListener("blur", () => {
		if (el.value) {
			el.parentElement.classList.add("filled");
		} else {
			el.parentElement.classList.remove("filled");
		}
	})
})

// Изменять надписи
const titles = document.querySelectorAll(".datepicker-controls .view-switch");
function keepFirstWord() {
	titles.forEach(el => {
		const words = el.innerHTML.split(' ');
		el.innerHTML = words.slice(0, 1).join(' ');
	})
}
keepFirstWord();