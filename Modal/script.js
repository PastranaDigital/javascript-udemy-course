"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
//? because there are 3 elements with this class name, we must use querySelectorAll
const btnShowModal = document.querySelectorAll(".show-modal");

const openModal = function () {
	modal.classList.remove("hidden");
	// modal.classList.remove("hidden", "modal");
	overlay.classList.remove("hidden");
};

const closeModal = function () {
	modal.classList.add("hidden");
	overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++) {
	btnShowModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal); // notice we are not calling the function NOT closeModal()
overlay.addEventListener("click", closeModal);

//? listening for an event on the entire page
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
        console.log('key');
    }
})

//! My attempt at distinguishing between the buttons when they all have the same class
// document.querySelectorAll(".show-modal").addEventListener("click", function () {
// 	let text = document.querySelectorAll(".show-modal");
// 	console.log(text);
// 	for (let i = 0; i < text.length; i++) {
// 		switch (text[i].textContent) {
// 			case "Show modal 1":
// 				document.querySelector(".hidden").style.display = "block";
// 				console.log("1");
// 				break;
// 			case "Show modal 2":
// 				console.log("2");
// 				break;
// 			case "Show modal 3":
// 				console.log("3");
// 				break;

// 			default:
// 				break;
// 		}
// 	}
// });
