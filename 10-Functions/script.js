'use strict';

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

//! Functions Accepting Callback Functions
