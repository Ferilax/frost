const videos = document.querySelectorAll(".lazy-video");

videos.forEach(el => {
	const videoId = el.dataset.id;
	const preview = el.dataset.src;
	const playButton = el.querySelector(".play-button");

	el.style.background = `rgba(0, 0, 0, 0.4) url(${preview}) 50%/cover no-repeat` || `url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg) 50%/cover no-repeat`;

	playButton.addEventListener("click", () => {
		el.innerHTML = `
			<iframe
				src="https://www.youtube.com/embed/${videoId}?autoplay=1"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
		`;

		el.classList.add("ready");
	})
})