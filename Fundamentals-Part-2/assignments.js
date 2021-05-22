"use strict";

// FUNCTIONS
function describeCountry(country, population, capitalCity) {
	const responseString = `${country} has ${population} million people and its capital city is ${capitalCity}`;
	return responseString;
}

const answer = describeCountry("Finland", 6, "Helsinki");
// console.log(`answer: ${answer}`);
