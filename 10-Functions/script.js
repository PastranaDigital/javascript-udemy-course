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

// //! The call and apply method

// const lufthansa = {
// 	airline: "Lufthansa",
// 	iataCode: "LH",
// 	bookings: [],
// 	// book: funtion() {}
// 	book(flightNum, name) {
// 		// this is calling to the object from which the function was called
// 		console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
// 		this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
// 	},
// };

// lufthansa.book(239, "Omar Pastrana");
// lufthansa.book(635, "Emily Pastrana");
// // console.log(lufthansa);

// const eurowings = {
// 	airline: "Eurowings",
// 	iataCode: "EW",
// 	bookings: [],
// 	//? adding the function again here would be against DRY method of programming... so abstract it
// };

// const book = lufthansa.book; // copies the function
// // book(230, 'Eva Pastrana'); // will not work because this is undefined

// //? call method
// book.call(eurowings, 230, "Eva Pastrana"); // first argument defines the 'this' keyword
// book.call(lufthansa, 635, "Eva Pastrana"); // first argument defines the 'this' keyword

// //? apply method
// const flightData = [428, "Gabriel Pastrana"];
// // book.apply(eurowings, flightData); // old way of doing this since we have the spread operator now

// book.call(eurowings, ...flightData);
// // console.log(eurowings);

// //! the bind method
// const bookLH = book.bind(lufthansa); // binds the eurowings as the "this" keyword for a new function
// bookLH(581, 'Steven Lo'); // "this" keyword is eurowings
// const bookEW = book.bind(eurowings); // binds the eurowings as the "this" keyword for a new function
// bookEW(223, 'Steven Lo'); // "this" keyword is eurowings

// //? partial application
// const bookEW223 = book.bind(eurowings, 223); // this will only need a name as a parameter. We preset the flight number
// bookEW223('Omar Pastrana');

// //? with event listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);  // in this setup, "this" references the element you are clicking
//     // <button class="buy">Buy new plane 🛩</button>
//     this.planes++;
//     console.log(this.planes);
// };
// // we need to manually define the "this" keyword
// // should we use "call" or "bind"? 
// // "call" calls a function so we have to use "bind" because it returns a function

// // Wrong this defined
// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// // Correct way
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// //? another partial application
// // presetting parameters
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.10, 200));

// const addVAT = addTax.bind(null, 0.23); // null because we don't care about the "this" keyword
// console.log(addVAT(200));
// // created a simply more specific function


// //? challenge to make it using a function calling another function
// const addTax2 = function (rate) {
//     return function (value) {
//         console.log(value + value * rate);
//     };
// };

// const addVAT2 = addTax2(0.23); // This is now a function with the greeting pre-loaded
// addVAT2(2000);

// //! Immediately Invoked Function Expressions (IIFE) pronounced iffy
// // functions that are called once and only once then disappear
// // can be used to block scope access to variables

// const runOnce = function() {
//     console.log('only running once');
// };
// //? can actually be called again somewhere, nothing is stopping it
// runOnce(); 

// //? option 1
// (function () {
//     console.log('this WILL never run again');
// })();

// //? option 2
// (() => console.log('This will ALSO never run again'))();


// //! Closures
// // happens automatically in certain situations, we need to be able to identify when that is
// //! great explaination in video 136


// const secureBooking = function() {
//     let passengerCount = 0; // only accessible inside the function

//     return function() {
//         passengerCount++;
//         console.log(`${passengerCount} passengers`);
//     }
// }

// const booker = secureBooking();

// booker(); // 1 passengers
// booker(); // 2 passengers
// booker(); // 3 passengers
// // this incriments the passengers variable... but how? it is set inside the function that is called
// // once secureBooking is used in booker, it is pulled off the stack and gone (execution context is gone)

// // a function has access to the variable environment (VE) of the execution context in which the function was created
// //? Closure = VE attached to the function, exactly as it was at the time and place the function was created
// // If there was a global "passengerCount" variable, JS would look to the closure before the scope chain
// //* Closure = give a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time
// //? a closure makes sure that a function doesn't lose connection to variables that existed at the function's birth place (ex: Your connection with where you were born still exists if you move away)
// //* a closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were present in the environment where the function was created

// console.dir(booker); // shows the closure // [[ ]] = inner property that we cannot access


// //! More closure examples
// //? example 1
// let f;

// const g = function() {
//     const a = 23;
//     f = function() {
//         console.log(a * 2);
//     }
// }

// const h = function() {
//     const b = 77;
//     f = function() {
//         console.log(b * 2);
//     }
// }


// g();
// f(); // was defined outside, but as we define it as a function, then it has a closure with the "a" variable
// console.dir(f);

// h(); // reassigns f function
// f();
// console.dir(f);

// //? example 2
// const boardPassengers = function(n, wait) {
//     const perGroup = n / 3;

//     //? this will capture (via closure) the variables involved and then will run 
//     setTimeout(function(){
//         console.log(`We are now boarding all ${n} passengers`);
//         console.log(`There are 3 groups, each with ${perGroup} passengers`);
//     }, wait * 1000); // after 3 seconds the function runs

//     console.log(`Will start boarding in ${wait} seconds`);
// }
// const perGroup = 999; // to show that the closure has priority over scope chain
// boardPassengers(180, 3);