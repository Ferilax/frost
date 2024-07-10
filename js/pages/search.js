const search = document.querySelector(".search-search__body");
const searchInput = search.querySelector("input");
const searchClear = search.querySelector(".search-search__clear");
const searchResultSection = document.querySelector(".search-result");
const searchNoResultSection = document.querySelector(".search-no-result");

search.addEventListener("click", (e) => {
	if (e.target.closest(".search-search__clear")) {
		search.querySelector("input").value = "";
		searchClear.classList.remove("show");
	}
})

searchInput.addEventListener("keyup", () => {
	if (searchInput.value) {
		searchClear.classList.add("show");
	} else {
		searchClear.classList.remove("show");
	}

	if (searchInput.value !== "Ассортимент") {
		searchResultSection.classList.add("hide");
		searchNoResultSection.classList.add("show");
	} else {
		searchResultSection.classList.remove("hide");
		searchNoResultSection.classList.remove("show");
	}
});

if (searchInput.value) {
	searchClear.classList.add("show");
} else {
	searchClear.classList.remove("show");
}