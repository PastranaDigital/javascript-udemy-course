"use strict";

// //? FUNCTIONS
// function describeCountry(country, population, capitalCity) {
// 	const responseString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
// 	return responseString;
// }

// const answer = describeCountry("Finland", 6, "Helsinki");
// // console.log(`answer: ${answer}`);

// //? ARROW FUNCTIONS
// const percentageOfWorld1 = (population) => ((population / 7900) * 100).toFixed(2);
// // console.log(`${percentageOfWorld1(325).toFixed(2)}%`);

// //? FUNCTION CALLING FUNCTION
// function describePopulation(country, population) {
// 	return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(
// 		2
// 	)}% of the world.`;
// }
// // console.log(describePopulation("US", 325));

// //? ARRAYS
// const populations = ["United States", "England", "Germany", "Italy"];
// // console.log(populations.length === 4);
// const percentages = [percentageOfWorld1(325), percentageOfWorld1(100), percentageOfWorld1(125), percentageOfWorld1(75)];
// // console.log(percentages);

// //? ARRAY METHODS
// const neighbors = ["Nambia", "Zimbabwe", "South Africa"];
// neighbors.push("Utopia");
// neighbors.pop();

// if (!neighbors.includes("Germany")) {
// 	// console.log("Probably not a central European country :D");
// }

// const newNeighbors = ["Angola", "Zambia", "Mozambique", "Congo", "Tanzania"];
// if (neighbors.length < newNeighbors.length) {
// 	for (let index = 0; index < neighbors.length; index++) {
// 		neighbors[index] = newNeighbors[index];
// 	}
// 	// console.log("neighbors: ", neighbors, "newNeighbors: ", newNeighbors);
// }

// //? skipped to the For Loop example
// for (let v = 0; v < 50; v++) {
//     console.log(`Voter number ${v+1} is voting`);
// }

// //? Looping Arrays, Breaking and Continuing
// const countries = ["United States", "England", "Germany", "Italy"];
// const populations = [325, 100, 125, 75];
// const percentages2 = [];
// const percentageOfWorld1 = (population) => ((population / 7900) * 100).toFixed(2);

// for (let i = 0; i < populations.length; i++) {
// 	percentages2.push(`${percentageOfWorld1(populations[i])} %`);
// }
// console.log(percentages2);

// //? Looping Backwards and Loops in Loops
// const listOfNeighbors = [
//     ['Canada', 'Mexico'], 
//     ['Spain'], 
//     ['Norway','Sweden', 'Russia']
// ];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//     for (let j = 0; j < listOfNeighbors[i].length; j++) {
//         console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
//     }
// }

//? While Loop
// const populations = [325, 100, 125, 75];
// const percentageOfWorld1 = (population) => ((population / 7900) * 100).toFixed(2);

// const percentages3 = [];
// let i = 0;

// while (i < populations.length) {
// 	const perc = percentageOfWorld1(populations[i]);
// 	percentages3.push(perc);
// 	i++;
// }
// console.log(percentages3);