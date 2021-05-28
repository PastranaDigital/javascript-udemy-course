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

// grabbing the original values from the HTML just in case they are changed. Not hard coding the values
const orignalScore = document.querySelector(".score").textContent;
const orginalStartMessage = document.querySelector(".message").textContent;
const originalBGColor = document.querySelector("body").style.backgroundColor;
const originalWidth = document.querySelector(".number").style.width;

//? Math.random() gives us a decimal between 0 & 1. we multiply that by the number we want, truncate it then add 1 to get 1 to 20
let secretNumber = Math.trunc(Math.random() * orignalScore) + 1;
let score = orignalScore;
let highScore = 0;


document.querySelector(".again").addEventListener("click", function () {
	score = orignalScore;
	document.querySelector(".score").textContent = score;
	secretNumber = Math.trunc(Math.random() * orignalScore) + 1;
	document.querySelector(".message").textContent = orginalStartMessage;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";
	console.log("RESET Complete");
	document.querySelector("body").style.backgroundColor = originalBGColor;
	document.querySelector(".number").style.width = originalWidth;
});

document.querySelector(".check").addEventListener("click", function () {
	// console.log(document.querySelector(".guess").value);
	const guess = Number(document.querySelector(".guess").value);
	console.log(guess);
	// When there is no input
	if (!guess) {
		document.querySelector(".message").textContent = "⛔️ No Number Found!";

		// When player wins
	} else if (guess === secretNumber) {
		document.querySelector(".message").textContent = "👏🏽 Correct Number!";
		document.querySelector(".number").textContent = secretNumber;
		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";
		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}

		// When the guess is too high
	} else if (guess > secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "📈 Guess too high!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "You Lose!";
			score--;
			document.querySelector(".score").textContent = score;
		}

		// When the guess is too high
	} else if (guess < secretNumber) {
		if (score > 1) {
			document.querySelector(".message").textContent = "📉 Guess too low!";
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			document.querySelector(".message").textContent = "You Lose!";
			score--;
			document.querySelector(".score").textContent = score;
		}
	}
});
