"use strict";

// function calcAge(birthYear) {
// 	const age = 2021 - birthYear;
// 	console.log(firstName);
// 	function printAge() {
// 		const output = `you are ${age}, born in ${birthYear}`;
// 		console.log(output);

// 		if (birthYear >= 1981 && birthYear <= 1996) {
// 			var millenial = true;
// 			const str = `Oh, and you are a millenial, ${firstName}`;
// 			console.log(str);

// 			function add(a, b) {
// 				return a + b;
// 			}
// 		}
// 		console.log(millenial); // works because it was declared as a var
// 		// console.log(str); // won't work
// 		// console.log(add(2, 3)); // only works if 'use sctrict' is removed
// 	}
// 	printAge();

// 	return age;
// }

// const firstName = "Omar";
// calcAge(1982);

// //? HOISTING with variables

// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "Omar";
// let job = "coder";
// const year = 1982;

// //? HOISTING with functions

// // console.log(addDecl(2, 3));
// // console.log(addExpr(2, 3));
// // console.log(addArrow(2, 3));

// function addDecl(a, b) {
// 	return a + b;
// }

// const addExpr = function (a, b) {
// 	return a + b;
// };

// const addArrow = (a, b) => a + b;

// //? PITFALL OF HOISTING
// if (!numOfProducts) deleteShoppingCart();
// console.log(numOfProducts);

// // Don't use var
// //! declare variables & functions before using them
// // numOfProducts is actually undefined above
// var numOfProducts = 10;

// function deleteShoppingCart() {
// 	console.log("All products deleted!");
// }

//? THIS KEYWORD
// console.log(this);
var firstName = "Matilda";

const calcAge = function (birthYear) {
	console.log(2021 - birthYear);
	console.log(this);
};
calcAge(1982);

const omar = {
	firstName: "Omar",
	year: 1982,
	calcAge: function () {
		console.log(this);
		console.log(2021 - this.year);

		// //! Old way of doing this
		// const self = this; // temp variable (self or that) for using this inside function
		// const isMillenial = function () {
		// 	console.log(self);
		// 	console.log(self.year >= 1981 && self.year <= 1996);
		// 	// console.log(this);
		// 	// console.log(this.year >= 1981 && this.year <= 1996);
		// };
		// isMillenial();

		//! New way... use the Arrow Function [it doesn't have its own this so it inherits the parent this]
		const isMillenial = () => {
			console.log(this);
			console.log(this.year >= 1981 && this.year <= 1996);
			// console.log(this);
			// console.log(this.year >= 1981 && this.year <= 1996);
		};
		isMillenial();
	},

	greet: () => {
		console.log(this);
		console.log(`Hey ${this.firstName}`);
	},
};
// omar.greet();
// omar.calcAge();

// const addExpr = function (a, b) {
// 	console.log(arguments);
// 	return a + b;
// };
// addExpr(2, 3);
// addExpr(3, 5);
// addExpr(4, 6, 8, 12); // show up in the arguments but are not acted upon in the function

// var addArrow = (a, b) => {
// 	console.log(arguments);
// 	return a + b;
// };

// addArrow(1, 5);

//? PRIMITIVES & OBJECTS (REFERENCE)
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName);
console.log(oldLastName);

const jessica = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
};

const marriedJessica = jessica; // not a new object, but has the same reference in the heap
marriedJessica.lastName = 'Davis';
console.log(`Before marriage: `, jessica);
console.log(`After marriage: `, marriedJessica);

//! How to properly copy object
const jessica2 = {
	firstName: "Jessica",
	lastName: "Williams",
	age: 27,
	family: ['Alice', 'Bob'],
};

const jessica2Copy = Object.assign({}, jessica2); // Only works on the first level (shallow copy)
jessica2Copy.lastName = 'Davis';
// these are changing 2nd level so it happens to both objects
jessica2Copy.family.push('Mary'); 
jessica2Copy.family.push('John');

console.log('How to properly copy object');
console.log(`Before marriage: `, jessica2);
console.log(`After marriage: `, jessica2Copy);