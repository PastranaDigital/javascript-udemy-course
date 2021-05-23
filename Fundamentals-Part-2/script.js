"use strict";
// forbids security items
// surfaces more errors to help debug

// let hasDriversLicense = false;
// const passTest = true;

// misspelled / undefined variables
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// Reserved Word
// const interface = 'Audio';

function logger(incomingText) {
	console.log(`Hurray ${incomingText}`);
}

// calling / running / invoking function
// logger("TODAY");

function fruitProcessor(apples, oranges) {
	// console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

// function with 2 arguments as parameters
const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(3, 3);
// console.log(appleOrangeJuice);

// FUNCTION DECLARATION
// these can be accessed before or after definition
function calcAge1(birthYear) {
	return 2021 - birthYear;
}
const age1 = calcAge1(1982);

// FUNCTION EXPRESSION
// these cannot be accessed before definition
// helps developer put functions at the top then use them
const calcAge2 = function (birthYear) {
	return 2021 - birthYear;
};
const age2 = calcAge2(1982);

// console.log(age1, age2);

// ARROW FUNCTION
// [ 1 parameter ] => [ what you want to execute ]
// example of 1 liner & therefore no need for a return statement
const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1982);
// console.log(age3);

// example of multi line execution
// const yearsUntilRetirement = (birthYear) => {
// 	const age = 2021 - birthYear;
// 	const retirment = 62 - age;
// 	return retirment;
// };
// console.log(yearsUntilRetirement(1982));

// example of multi arguments & multi line execution
// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2021 - birthYear;
// 	const retirement = 62 - age;
// 	return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1982, "Omar"));

// ARRAYS & ARRAY METHODS
const friends = ["Mick", "Dalton", "Jonathan"];
// Add elements methods
friends.push("Brett"); // adds to the end
const newLength = friends.push("Brian"); // push calculates the length too
friends.unshift("Julian"); // adds to the beginning
// console.log(friends);

// Subtract elements methods
friends.pop(); // removes last element
const popped = friends.pop(); // pop returns the removed element
friends.shift(); // removes the first element
// console.log(friends);

// Other helpful methods
// console.log(friends.indexOf("Mick")); // returns the location in array
// console.log(friends.indexOf("Bob")); // returns -1 since it isn't present

friends.push(23);
// console.log(friends.includes("Mick")); // true
// console.log(friends.includes("Bob")); // false
// console.log(friends.includes("23")); // false (includes uses strict equality)

if (friends.includes("Mick")) {
	// console.log("You have a friend named Mick");
}
