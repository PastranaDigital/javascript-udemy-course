"use strict";

// FUNCTIONS
function describeCountry(country, population, capitalCity) {
	const responseString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
	return responseString;
}

const answer = describeCountry("Finland", 6, "Helsinki");
// console.log(`answer: ${answer}`);

// ARROW FUNCTIONS
const percentageOfWorld3 = (population) => (population / 7900) * 100;
// console.log(`${percentageOfWorld3(325).toFixed(2)}%`);

// FUNCTION CALLING FUNCTION
function describePopulation(country, population) {
	return `${country} has ${population} million people, which is about ${percentageOfWorld3(population).toFixed(
		2
	)}% of the world.`;
}
console.log(describePopulation("US", 325));
