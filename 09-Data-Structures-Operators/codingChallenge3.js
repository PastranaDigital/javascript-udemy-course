"use strict";

const gameEvents = new Map([
	[17, "⚽GOAL"],
	[36, "🔁Substitution"],
	[47, "⚽GOAL"],
	[61, "🔁Substitution"],
	[64, "🔶Yellow card"],
	[69, "🔴Red card"],
	[70, "🔁Substitution"],
	[72, "🔁Substitution"],
	[76, "⚽GOAL"],
	[80, "⚽GOAL"],
	[92, "🔶Yellow card"],
]);

// //? task 1
// const events = [new Set([...gameEvents.values()])];
// console.log(events);
//! task 1 solution
const events2 = [...new Set(gameEvents.values())];
console.log(events2);

//? task 2
gameEvents.delete(64);
console.log(gameEvents);
//! task 2 solution = same

//? task 3
console.log(`An event happened, on average, every ${Math.round(90 / gameEvents.size)} minutes`);
//! task 3 solution = same

// //? task 4
// for (const [key, value] of gameEvents) {
// 	key < 46 ? console.log(`[FIRST HALF] ${key}: ${value}`) : console.log(`[SECOND HALF] ${key}: ${value}`);
// }
//! task 4 solution
for (const [min, event] of gameEvents) {
	const half = min <= 45 ? "FIRST" : "SECOND";
	console.log(`[${half} HALF] ${min}: ${event}`);
}
