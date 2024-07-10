const selects = document.querySelectorAll(".default-select");

selects?.forEach(el => {
	new Choices(el, {
		searchEnabled: false,
		itemSelectText: "",
	});
})

const allChoices = document.querySelectorAll(".choices");

allChoices?.forEach(el => {
	const select = el.querySelector("select")
	select.addEventListener("change", () => {
		if (select.value) {
			el.classList.add("filled");
		} else {
			el.classList.remove("filled");
		}
	});
})