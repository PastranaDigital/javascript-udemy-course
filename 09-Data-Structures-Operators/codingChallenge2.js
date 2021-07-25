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
	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels (OG)"],
	date: "Nov 9th, 2037",
	odds: { team1: 1.33, x: 3.25, team2: 6.5 },
	// odds: { team1: 3, x: 5, team2: 4 },
};

//? task 1
console.log("task 1");
for (const [i, scorer] of Object.entries(game.scored)) {
	console.log(`Goal ${Number(i) + 1}: ${scorer}`);
}
//! task 1 solution
//! Same as mine

//? task 2
console.log("");
console.log("task 2");
let total = 0;
let count = 0;
for (const odd of Object.values(game.odds)) {
	count++;
	total += odd;
}
console.log(total / count);
//! task 2 solution
let average = 0;
for (const odd of Object.values(game.odds)) {
	average += odd;
}
console.log(average / Object.values(game.odds).length);

//? task 3
console.log("");
console.log("task 3");
const [team1, team2] = Object.values(game);
const arrayOfInfo = [team1, , team2];
// console.log(Object.keys(game.odds));
// console.log(arrayOfInfo);
// console.log(team2);
let j = 0;
for (const odd of Object.values(game.odds)) {
	arrayOfInfo[j] ? console.log(`Odd of victory for ${arrayOfInfo[j]}: ${odd}`) : console.log(`Odd of draw: ${odd}`);
	// console.log(`Odd of victory for ${arrayOfInfo[j]}: ${odd}`);
	j++;
}
//! task 3 solution
//! very simlar to mine
for (const [team, odds] of Object.entries(game.odds)) {
	const teamStr = team === "x" ? "draw" : `victory for ${game[team]}`;
	console.log(`Odd of ${teamStr}: ${odds}`);
}

//? task 4 BONUS
console.log("");
console.log("task 4");
const scorers = [];
for (const [i, player] of Object.entries(game.scored)) {
	console.log(player);
}
//! task 4 solution from Q&A section
const theScorers = {};

// for (let x of game.scored) {
//   if (theScorers[x]) {
//     theScorers[x]++;
//   } else {
//     theScorers[x] = 1;
//   }
// }

for (let x of game.scored) {
	theScorers[x]++ || (theScorers[x] = 1);
}

console.log(theScorers);
