const selects = document.querySelectorAll("select");

selects?.forEach(el => {
	new Choices(el, {
		searchEnabled: false,
		itemSelectText: "",
	});
})