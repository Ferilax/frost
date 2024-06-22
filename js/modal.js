// Установить логику модальному окну
function preventTab(e) {
	if (e.key === "Tab") {
		e.preventDefault();
	}
};

function setModal(modal, trigger) {
	const body = document.body;

	if (trigger) {
		trigger.addEventListener("click", () => {
			modal.classList.add("open");
			body.classList.add("lock");
			document.addEventListener("keydown", preventTab)
		});
	}

	modal?.addEventListener("click", e => {
		const closeButton = e.target.closest(".m-close");
		const modalBody = e.target.closest(".m-body");
		const datepicker = e.target.closest(".datepicker-view");


		if (closeButton || !modalBody && !datepicker) {
			modal.classList.remove("open");
			body.classList.remove("lock");
			document.removeEventListener("keydown", preventTab);
		}

		const input = e.target.closest(".modal__input");

		if (input) {
			input.classList.remove("error");
		}
	});
}

const headerModal = document.querySelector(".modal-header");
const headerModalTrigger = document.getElementById("header-search");

const applicationProductsModal = document.getElementById("modal-application-product");
const applicationProductsModalTrigger = document.getElementById("modal-application-trigger");

const applicationManagerModal = document.getElementById("modal-application-manager");
const applicationManagerModalTrigger = document.getElementById("modal-application-manager-trigger");

setModal(headerModal, headerModalTrigger);
setModal(applicationProductsModal, applicationProductsModalTrigger);
setModal(applicationManagerModal, applicationManagerModalTrigger);