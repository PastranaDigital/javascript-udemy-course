"use strict";
// CONSTANTS
const winningScore = 50;

// VARIABLES
let totalScoreP1 = 0;
let totalScoreP2 = 0;
let currentScoreP1 = 0;
let currentScoreP2 = 0;
let activePlayer = 1;

const dice = document.querySelector(".dice");
const player1Section = document.querySelector(".player--1");
const player2Section = document.querySelector(".player--2");
const totalP1Box = document.querySelector("#score--1");
const totalP2Box = document.querySelector("#score--2");
const player1Trophy = document.querySelector(".trophy--1");
const player2Trophy = document.querySelector(".trophy--2");
const currentP1Box = document.querySelector("#current--1");
const currentP2Box = document.querySelector("#current--2");
const newGameButton = document.querySelector(".btn--new");
const rollDiceButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

dice.classList.add("hidden");
totalP1Box.textContent = `${totalScoreP1}`;
totalP2Box.textContent = `${totalScoreP2}`;

//? highlighting switch to next player
const changeActivePlayer = function () {
	if (player1Section.classList.contains("player--active")) {
		console.log("inside 1");
		player1Section.classList.remove("player--active");
		player2Section.classList.add("player--active");
		activePlayer = 2;
	} else {
		// if (player2Section.classList.contains("player--active")) {
		console.log("inside 2");
		player2Section.classList.remove("player--active");
		player1Section.classList.add("player--active");
		activePlayer = 1;
	}
	// dice.classList.add("hidden");
};

//! roll dice actions
//? randomly show dice
const randomDiceNumber = function () {
	return Math.trunc(Math.random() * 6) + 1;
};
//? change dice value with button press
let imageSrc = document.querySelector("img");

const checkForWinner = function () {
	if (totalScoreP1 >= winningScore || totalScoreP2 >= winningScore) {
		if (activePlayer === 1) {
			player1Section.classList.add("player--winner");
			player2Section.classList.remove("player--active");
			player1Trophy.classList.remove("hidden");
		} else {
			player2Section.classList.add("player--winner");
			player1Section.classList.remove("player--active");
			player2Trophy.classList.remove("hidden");
		}
		activePlayer = 0; // disable game actions
		// alert(`Player ${activePlayer} WINS!`);
	} else {
		changeActivePlayer();
	}
};

const resetCurrentScores = function () {
	currentScoreP1 = 0;
	currentScoreP2 = 0;
	currentP1Box.textContent = `${currentScoreP1}`;
	currentP2Box.textContent = `${currentScoreP2}`;
};

const resetTotalScores = function () {
	totalScoreP1 = 0;
	totalScoreP2 = 0;
	totalP1Box.textContent = `${totalScoreP1}`;
	totalP2Box.textContent = `${totalScoreP2}`;
};

rollDiceButton.addEventListener("click", function () {
	if (activePlayer !== 0) {
		let diceNumber = randomDiceNumber();
		console.log("button");
		dice.classList.remove("hidden");
		imageSrc.src = `dice-${diceNumber}.png`;
		//? dice value goes to "Current" score location
		if (diceNumber !== 1) {
			activePlayer === 1 ? (currentScoreP1 += diceNumber) : (currentScoreP2 += diceNumber);
		} else {
			//? if dice value is 1 then "Current" score is reset
			activePlayer === 1 ? (currentScoreP1 = 0) : (currentScoreP2 = 0);
			changeActivePlayer();
			resetCurrentScores();
		}
		activePlayer === 1
			? (currentP1Box.textContent = `${currentScoreP1}`)
			: (currentP2Box.textContent = `${currentScoreP2}`);
	}
});

//! hold game actions
//? "Current" score is added to Player score
holdButton.addEventListener("click", function () {
	// not the best solution but it works for now
	if (activePlayer !== 0) {
		totalScoreP1 += currentScoreP1;
		totalScoreP2 += currentScoreP2;
		totalP1Box.textContent = `${totalScoreP1}`;
		totalP2Box.textContent = `${totalScoreP2}`;
		checkForWinner();
		// changeActivePlayer();
		resetCurrentScores();
	}
});

//! highlighting game actions
//? current player is highlighted & tracked by variable
//? highlighting switch
//? if dice value is 1 then highlighting switches (check if class contains)

//! new game actions
//? store the original state values
newGameButton.addEventListener("click", function () {
	player2Section.classList.remove("player--active");
	player1Section.classList.add("player--active");
	activePlayer = 1;
	resetTotalScores();
	dice.classList.add("hidden");
	player1Trophy.classList.add("hidden");
	player2Trophy.classList.add("hidden");
	player1Section.classList.remove("player--winner");
	player2Section.classList.remove("player--winner");
	// set player 1 as current player
});
//? set all of the changed states back
//? hide the dice on start
