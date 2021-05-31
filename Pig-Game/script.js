"use strict";
// CONSTANTS
const winningScore = 50;

const player1Section = document.querySelector(".player--1");
const player2Section = document.querySelector(".player--2");
const totalP1Box = document.querySelector("#score--1");
const totalP2Box = document.querySelector("#score--2");
const player1Trophy = document.querySelector(".trophy--1");
const player2Trophy = document.querySelector(".trophy--2");
const currentP1Box = document.querySelector("#current--1");
const currentP2Box = document.querySelector("#current--2");

const dice = document.querySelector(".dice");
const newGameButton = document.querySelector(".btn--new");
const rollDiceButton = document.querySelector(".btn--roll");
const saveButton = document.querySelector(".btn--save");

// VARIABLES
let totalScore, currentScore, activePlayer, saveScoreActive;

const changeActivePlayer = function () {
	activePlayer = activePlayer === 1 ? 2 : 1;
	player1Section.classList.toggle("player--active");
	player2Section.classList.toggle("player--active");
};

const checkForWinner = function () {
	if (totalScore[activePlayer] >= winningScore) {
		document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
		document.querySelector(`.trophy--${activePlayer}`).classList.remove("hidden");
		document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
		activePlayer = 0; // disable game actions
	} else {
		changeActivePlayer();
	}
};

const resetCurrentScores = function () {
	currentScore = 0;
	saveScoreActive = false;
	currentP1Box.textContent = 0;
	currentP2Box.textContent = 0;
};

const setupGame = function () {
	totalScore = [0, 0, 0];
	activePlayer = 1;

	totalP1Box.textContent = 0;
	totalP2Box.textContent = 0;

	dice.classList.add("hidden");
	player1Section.classList.remove("player--winner");
	player2Section.classList.remove("player--winner");
	player1Section.classList.add("player--active");
	player2Section.classList.remove("player--active");
	resetCurrentScores();

	player1Trophy.classList.add("hidden");
	player2Trophy.classList.add("hidden");
};

setupGame();

// https://www.sitepoint.com/delay-sleep-pause-wait/
const sleep = function (ms) {
	// const date = Date.now();
	// let currentDate = null;
	// do {
	// 	currentDate = Date.now();
	// } while (currentDate - date < ms);
	return new Promise((resolve) => setTimeout(resolve, ms));
};

rollDiceButton.addEventListener("click", function () {
	if (activePlayer !== 0) {
		saveScoreActive = true;
		const diceNumber = Math.trunc(Math.random() * 6) + 1;
		dice.classList.remove("hidden");
		dice.src = `dice-${diceNumber}.png`;
		// dice.classList.add("animation");
		// dice.classList.add("hidden");
		// sleep(1000);
		// dice.classList.remove("hidden");
		// dice.classList.remove("animation");
		if (diceNumber !== 1) {
			currentScore += diceNumber;
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
		} else {
			changeActivePlayer();
			resetCurrentScores();
		}
	}
});

saveButton.addEventListener("click", function () {
	// not the best solution but it works for now
	if (activePlayer !== 0 && saveScoreActive) {
		totalScore[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent = totalScore[activePlayer];
		checkForWinner();
		resetCurrentScores();
	}
});

newGameButton.addEventListener("click", setupGame);
