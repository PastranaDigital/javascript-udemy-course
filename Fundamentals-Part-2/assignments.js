"use strict";

// FUNCTIONS
function describeCountry(country, population, capitalCity) {
	const responseString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
	return responseString;
}

const answer = describeCountry("Finland", 6, "Helsinki");
// console.log(`answer: ${answer}`);

// ARROW FUNCTIONS
const percentageOfWorld1 = (population) => ((population / 7900) * 100).toFixed(2);
// console.log(`${percentageOfWorld1(325).toFixed(2)}%`);

// FUNCTION CALLING FUNCTION
function describePopulation(country, population) {
	return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(
		2
	)}% of the world.`;
}
// console.log(describePopulation("US", 325));

// ARRAYS
const populations = ["United States", "England", "Germany", "Italy"];
// console.log(populations.length === 4);
const percentages = [percentageOfWorld1(325), percentageOfWorld1(100), percentageOfWorld1(125), percentageOfWorld1(75)];
// console.log(percentages);

// ARRAY METHODS
const neighbors = ["Nambia", "Zimbabwe", "South Africa"];
neighbors.push("Utopia");
neighbors.pop();

if (!neighbors.includes("Germany")) {
	console.log("Probably not a central European country :D");
}

const newNeighbors = ["Angola", "Zambia", "Mozambique", "Congo", "Tanzania"];
if (neighbors.length < newNeighbors.length) {
	for (let index = 0; index < neighbors.length; index++) {
		neighbors[index] = newNeighbors[index];
	}
	console.log("neighbors: ", neighbors, "newNeighbors: ", newNeighbors);
}
