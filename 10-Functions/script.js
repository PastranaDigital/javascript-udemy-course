"use strict";

//! Default Parameters
// const bookings = [];

// const createBooking = function(
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
//     ) {
//     //? old way of defaulting parameters
//     // numPassengers = numPassengers || 1;
//     // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 5);
// createBooking('LH123', 2, 495);
// createBooking('LH123', undefined, 495); // will accept the default value

// //! How passing Arguments works: Value vs Reference
// const flight = 'LH234';
// const omar = {
//     name: 'Omar Pastrana',
//     passport: 1234567890
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name; // since this is referencing the original object

//     if(passenger.passport === 1234567890) {
//         alert('checked in');
//     } else {
//         alert('wrong passport');
//     }
// }

// checkIn(flight, omar);
// console.log(flight);
// console.log(omar);

// const newPassport = function(person) {
//     person.passport = Math.trunc(Math.random() * 10000000000);
// }

// newPassport(omar);
// checkIn(flight, omar);
// console.log(flight);
// console.log(omar);

// //? JS is only passing by value NOT reference
// //? Objects will be referenced

//! First Class and Higher Order functions
//? High Order Functions: a function that receives another function as an argument, that returns a new function of both
//? this is only possible because of first-class functions

// //! Functions Accepting Callback Functions
// const oneWord = function (str) {
// 	return str.replace(/ /g, "").toLowerCase(); // "/ /g" is regex for any spaces
// };

// const upperFirstWord = function (str) {
// 	const [first, ...others] = str.split(" ");
// 	console.log([first.toUpperCase(), ...others].join(" "));
// 	return [first.toUpperCase(), ...others].join(" ");
// };

// //? Higher Order function (like addEventListener)
// //? this allows "abstraction" - removing the details from one function to another "lower level" function
// const transformer = function (str, fn) {
// 	console.log(`Original string: ${str}`);
// 	console.log(`Transformed string: ${fn(str)}`);

// 	console.log(`Transformed by: ${fn.name} function`);
// 	console.log("");
// };

// transformer("JavaScript is the best!", upperFirstWord);
// transformer("JavaScript is the best!", oneWord);

// //? example example (addEventListener)
// const high5 = function () {
// 	console.log("5");
// };
// document.body.addEventListener("click", high5);

// //? example callback (forEach)
// ["Alpha", "Bravo", "Charlie"].forEach(upperFirstWord);

// //! Functions returning Functions
// //? used in functional programming
// const greet = function (greeting) {
// 	return function (name) {
// 		console.log(`${greeting} ${name}`);
// 	};
// };

// const greeterHey = greet("Hey"); // This is now a function with the greeting pre-loaded
// greeterHey("Omar");
// greeterHey("Maya");

// greet("Hello")("Jonas");

// // writing only as arrow functions
// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);

// greetArrow("Wassup")("Emily");

//! The call and apply method

const lufthansa = {
	airline: "Lufthansa",
	iataCode: "LH",
	bookings: [],
	// book: funtion() {}
	book(flightNum, name) {
		// this is calling to the object from which the function was called
		console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
	},
};

lufthansa.book(239, "Omar Pastrana");
lufthansa.book(635, "Emily Pastrana");
console.log(lufthansa);

const eurowings = {
	airline: "Eurowings",
	iataCode: "EW",
	bookings: [],
	//? adding the function again here would be against DRY method of programming... so abstract it
};

const book = lufthansa.book; // copies the function
// book(230, 'Eva Pastrana'); // will not work because this is undefined

//? call method
book.call(eurowings, 230, "Eva Pastrana"); // first argument defines the 'this' keyword
book.call(lufthansa, 635, "Eva Pastrana"); // first argument defines the 'this' keyword

//? apply method
const flightData = [428, "Gabriel Pastrana"];
// book.apply(eurowings, flightData); // old way of doing this since we have the spread operator now

book.call(eurowings, ...flightData);
console.log(eurowings);
