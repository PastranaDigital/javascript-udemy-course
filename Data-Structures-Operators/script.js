'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24,
		},
	},

	//? destructuring inside the object
	// orderDelivery: function(obj){
	//   console.log(obj);
	// }
	// orderDelivery: function({time, address, mainIndex, starterIndex}){
	//? you can also set default values in the function destructuring
	orderDelivery: function ({ time = "20:00", address, mainIndex = 0, starterIndex = 1 }) {
		// console.log(time, mainIndex);
		console.log(
			`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		);
	},

	//? spread operator
	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
	},
};

restaurant.orderDelivery ({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2
});

//? using the default values from the function
restaurant.orderDelivery ({
  address: '309 Caraway Lane',
  starterIndex: 1
});


// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //! Destructuring the array
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , third] = restaurant.categories; // skipped the 2nd item
// console.log(main, third);

// //? switch the two variables
// [main, third] = [third, main];
// console.log(main, third);

// //? Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //? Nested Destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// //? default values
// // const [p,q,r] = [8,9]; // r would be undefined
// const [p, q, r = 1] = [8, 9];
// // set a default value for the variables in case the array didn't have it defined
// // helpful when you are pulling information from an API
// console.log(p, q, r);


// //! Destructuring an Object
// // no need to worry about order just spelling
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// //? changing the names of the values
// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
// console.log(restaurantName, hours, tags);

// //? setting default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// //? mutating variables
// let a = 111;
// let b = 98;
// const obj = {a: 23, b: 7, c: 14};

// ({a, b} = obj); // had to wrap in parenthesis so it would compile because it began with a curly bracket
// console.log(a, b);

// //? nested destructuring
// const {name: restaurantName2, openingHours: {thu, fri, sat}} = restaurant;
// console.log(restaurantName2, thu, fri, sat);

// const {fri: {open, close}} = openingHours;
// const {sat: {open: o, close: c}} = openingHours;
// console.log(fri);
// console.log(open, close);
// console.log(o, c);

//! SPREAD OPERATOR
//? not the best way
const arr = [7,8,9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//? a better way using the spread operator
// opens up the array for us and takes all of the values
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//? copy the array
const mainMenuCopy = [...restaurant.mainMenu];

//? join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//? Iterables: arrays, strings, maps, sets & NOT objects
const str = 'Pastrana';
const letters = [...str, ' ', ', O.' ];
console.log(letters);
console.log(...str);
// console.log(`${...str}, Omar`); //Unexpected token '...'

// //? Real-world example
// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//? Seperator for Objects???
const newResturant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newResturant);

const resturantCopy = {...restaurant};
resturantCopy.name = 'Ristorante Roma';
console.log(restaurant, resturantCopy);