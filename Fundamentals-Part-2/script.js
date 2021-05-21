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
