"use strict";
// //? forbids security items
// //? surfaces more errors to help debug

// let hasDriversLicense = false;
// const passTest = true;

// //? misspelled / undefined variables
// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// //? Reserved Word
// const interface = 'Audio';

// function logger(incomingText) {
// 	console.log(`Hurray ${incomingText}`);
// }

// //? calling / running / invoking function
// logger("TODAY");

// function fruitProcessor(apples, oranges) {
// 	// console.log(apples, oranges);
// 	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// 	return juice;
// }

// //? function with 2 arguments as parameters
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 3);
// console.log(appleOrangeJuice);

// //? FUNCTION DECLARATION
// //? these can be accessed before or after definition
// function calcAge1(birthYear) {
// 	return 2021 - birthYear;
// }
// const age1 = calcAge1(1982);

// //? FUNCTION EXPRESSION
// //? these cannot be accessed before definition
// //? helps developer put functions at the top then use them
// const calcAge2 = function (birthYear) {
// 	return 2021 - birthYear;
// };
// const age2 = calcAge2(1982);

// console.log(age1, age2);

// //? ARROW FUNCTION
// //? [ 1 parameter ] => [ what you want to execute ]
// //? example of 1 liner & therefore no need for a return statement
// const calcAge3 = (birthYear) => 2021 - birthYear;
// const age3 = calcAge3(1982);
// console.log(age3);

// //? example of multi line execution
// const yearsUntilRetirement = (birthYear) => {
// 	const age = 2021 - birthYear;
// 	const retirment = 62 - age;
// 	return retirment;
// };
// console.log(yearsUntilRetirement(1982));

// //? example of multi arguments & multi line execution
// const yearsUntilRetirement = (birthYear, firstName) => {
// 	const age = 2021 - birthYear;
// 	const retirement = 62 - age;
// 	return `${firstName} retires in ${retirement} years`;
// };
// console.log(yearsUntilRetirement(1982, "Omar"));

// //? ARRAYS & ARRAY METHODS
// const friends = ["Mick", "Dalton", "Jonathan"];
// //? Add elements methods
// friends.push("Brett"); // adds to the end
// const newLength = friends.push("Brian"); // push calculates the length too
// friends.unshift("Julian"); // adds to the beginning
// console.log(friends);

// //? Subtract elements methods
// friends.pop(); // removes last element
// const popped = friends.pop(); // pop returns the removed element
// friends.shift(); // removes the first element
// console.log(friends);

// //? Other helpful methods
// console.log(friends.indexOf("Mick")); // returns the location in array
// console.log(friends.indexOf("Bob")); // returns -1 since it isn't present

// friends.push(23);
// console.log(friends.includes("Mick")); // true
// console.log(friends.includes("Bob")); // false
// console.log(friends.includes("23")); // false (includes uses strict equality)

// if (friends.includes("Mick")) {
// console.log("You have a friend named Mick");
// }

// //? OBJECTS
// //? example of arrays
// const jonasArray = ["Jonas", "Schmedtmann", 2021 - 1991, "teacher", ["Michael", "Peter", "Steven"]];

// //? example of objects
// const jonasObject = {
// 	firstName: "Jonas", // this is a property of the object
// 	lastName: "Schmedtmann",
// 	age: 2021 - 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// };

// console.log(jonasObject);

// //? DOT NOTATION
// const nameKey = "Name";
// console.log(jonasObject.firstName);
// //? Bracket Notation
// console.log(jonasObject["lastName"]);
// console.log(jonasObject["first" + nameKey]);

// //? Bracket Notation can use an expression
// const interestedIn = prompt("Choose one: firstName, lastName, age, job & friends");

// if (jonasObject[interestedIn]) {
// 	console.log(jonasObject[interestedIn]);
// } else {
// 	console.log("Invalid request. Choose one: firstName, lastName, age, job & friends");
// }

// //? adding to the object
// jonasObject.location = "Portugal";
// jonasObject["twitter"] = "@jonas";
// console.log(jonasObject);

// //? Mini Challenge
// console.log(
// 	`${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is ${jonasObject.friends[0]}`
// );

// //? OBJECT METHODS
// const jonasObject = {
// 	firstName: "Jonas", // this is a property of the object
// 	lastName: "Schmedtmann",
// 	birthYear: 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// 	hasDriversLicense: true,
// 	// calcAge: function (birthYear) {
// 	// 	//? function expression inside
// 	// 	return 2021 - birthYear;
// 	// },
// 	//? using the this. method
// 	calcAge: function () {
// 		//? calculates and adds it to the object
// 		this.age = 2021 - this.birthYear;
// 		return this.age;
// 	},
// 	getSummary: function () {
// 		return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${
// 			this.hasDriversLicense ? "a" : "no"
// 		} driver's license.`;
// 	},
// };

// // console.log(jonasObject.calcAge(1991)); // without this
// console.log(jonasObject.calcAge()); // with this
// console.log(jonasObject.age);
// console.log(jonasObject.age);
// console.log(jonasObject.getSummary());

// //? FOR LOOP
// for (let rep = 0; rep < 10; rep++) {
// 	console.log("Hang Clean Rep " + (rep + 1));
// }

//? LOOPING ARRAYS, BREAKING & CONTINUING
