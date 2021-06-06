"use strict";

const game = {
	team1: "Bayern Munich",
	team2: "Borrussia Dortmund",
	players: [
		[
			"Neuer",
			"Pavard",
			"Martinez",
			"Alaba",
			"Davies",
			"Kimmich",
			"Goretzka",
			"Coman",
			"Muller",
			"Gnarby",
			"Lewandowski",
		],
		["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
	],
	score: "4:0",
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
	date: "Nov 9th, 2037",
	odds: { team1: 1.33, x: 3.25, team2: 6.5 },
};

// //? task 1
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1);
// console.log(players2);
// console.log(game.players.length);
//! task 1 solution
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// //? task 2
// const [gk, ...fieldPlayers] = [...players1];
// console.log(gk, fieldPlayers);
//! task 2 solution
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//? task 3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
//! task 3 solution
//! same as mine

//? task 4
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
//! task 4 solution
//! same as mine

//? task 5
// // const [team1, draw, team2] = [...game.odds.team1]; //? maybe?
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;
// console.log(team1, draw, team2);
//! task 5 solution
// nested destructure
const {
	odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// //? task 6
// const printGoals = function (...array) {
// 	for (let i = 0; i < array.length; i++) {
// 		console.log(array[i]);
// 	}
// 	console.log(array.length);
// };
//! task 6 solution
const printGoals = function (...array) {
	console.log(array);
	console.log(array.length);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

// //? task 7
// console.log(team1 < team2 || team2 < team1 || draw);
//! task 7 solution
// use Short circuit
team1 < team2 && console.log("Team 1 is more likely to win!");
team2 < team1 && console.log("Team 2 is more likely to win!");
//! shorter solutions from Q&A
console.log(`${(team1 < team2 && game.team1) || (team2 < team1 && game.team2)} is more likely to win!`);
// if we assume that a team has to win then the second logic check is redundant and can be removed
console.log(`${(team1 < team2 && game.team1) || game.team2} is more likely to win!`);
