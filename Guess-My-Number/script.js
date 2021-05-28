"use strict";
console.log(document.querySelector(".message").textContent);

//? DOM manipulation
//? DOM = connection point between Js and HTML
//? DOM structure creates a tree with parent and children

// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// //? put value into the input field
// document.querySelector(".guess").value = 23;

document.querySelector(".check").addEventListener("click", function () {
	// console.log(document.querySelector(".guess").value);
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess);
	if (!guess) {
		document.querySelector(".message").textContent = "⛔️ No Number Found!";
	}
});
