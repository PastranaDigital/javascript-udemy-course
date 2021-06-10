'use strict';

// Data needed for a later exercise
const flights =
	"_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

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
		// console.log(
		// 	`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
		// );
	},

	//? spread operator
	orderPasta: function (ing1, ing2, ing3) {
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}.`);
	},

	//? rest operator
	orderPizza: function (mainIngredient, ...otherIngredients) {
		console.log(mainIngredient);
		console.log(otherIngredients);
	},
};

restaurant.orderDelivery({
	time: "22:30",
	address: "Via del Sol, 21",
	mainIndex: 2,
	starterIndex: 2,
});

//? using the default values from the function
restaurant.orderDelivery({
	address: "309 Caraway Lane",
	starterIndex: 1,
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

// //! SPREAD OPERATOR
// //? not the best way
// const arr = [7,8,9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //? a better way using the spread operator
// // opens up the array for us and takes all of the values
// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //? copy the array
// const mainMenuCopy = [...restaurant.mainMenu];

// //? join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// //? Iterables: arrays, strings, maps, sets & NOT objects
// const str = 'Pastrana';
// const letters = [...str, ' ', ', O.' ];
// console.log(letters);
// console.log(...str);
// // console.log(`${...str}, Omar`); //Unexpected token '...'

// // //? Real-world example
// // const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// // console.log(ingredients);
// // restaurant.orderPasta(...ingredients);

// //? Seperator for Objects???
// const newResturant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
// console.log(newResturant);

// const resturantCopy = {...restaurant};
// resturantCopy.name = 'Ristorante Roma';
// console.log(restaurant, resturantCopy);

// //! REST (opposite of Spread)
// //! Destructuring
// //? spread - new array from old array (on the RIGHT side of =)
// const arr = [1, 2, ...[3, 4]];

// //? REST - destructures and groups a sub array (on the LEFT side of =)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others); //others = unselected remaining elements

// //? does not include skipped elements
// //? REST must be at the end of the destructuring assignment
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, otherFood);

// //? Objects
// const {sat, ...weekdays} = {...restaurant.openingHours};
// console.log(sat, weekdays);

// //! Functions
// //? SPREAD - we used it to send an array of things into a function as separate arguments
// //? REST - we use it to send multiple unknown length of arguments in as an array
// // we want this function to be able to add 2 numbers or 5 numbers...
// const add = function(...numbers) { // takes multiple numbers and packs into 1 array
// 	let total = 0;
// 	for (let i = 0; i < numbers.length; i++) {
// 		total += numbers[i];
// 	}
// 	console.log(total);
// };

// add(2, 3);
// add(2, 4, 6, 1, 7);
// add(2, 5, 1, 4, 3, 7, 8, 9, 2, 3);

// const x = [23, 5, 7];
// add(...x); // use spread to unpack them to send in to our function

// //? orderPizza function handles 1+ arguments
// restaurant.orderPizza("Pepperoni", "Cheese", "Ham", "Sausage");
// restaurant.orderPizza("BBQ Chicken");

// //! Short Circuiting (|| operator)
// //? returns the first truthy value or if all falsey, then the last one 
// // Use ANY data type, return ANY data type, short circuit evaluation
// // 3 is a truthy value... so it doesn't evaluate the 2nd
// console.log(3 || 'Omar'); // 2 non boolean values
// console.log('' || 'Omar');
// console.log(true || 0);
// // undefined is a falsy value but so is null
// console.log(undefined || null);
// // 'Hello' is the first truthy value in the chain
// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // if it didn't exist then set the default value
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// const guests2 = restaurant.numGuests || 10;
// console.log(restaurant.numGuests); // undefined (falsey value)
// console.log(guests2);

// //! Short Cicuiting (&& operator)
// //? returns the first falsey value or if all truthy, then the last one
// // returns the first falsey value without evaluating the 2nd
// console.log(0 && 'Omar');
// console.log(3 && 'Omar');
// console.log(false && 'Truth');
// console.log(true && 'Lies');
// console.log('A' && 'B');
// console.log(true && 10 && 'Nope' && 'Hello' && 23 && null);

// // if statement is just checking that .orderPizza exists then executes
// if (restaurant.orderPizza) {
// 	restaurant.orderPizza('chicken', 'pineapple');
// }

// // same thing
// restaurant.orderPizza && restaurant.orderPizza('chicken', 'pineapple');

// //! Nullish Coalescing Operator (??)
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// //? Nullish = null and undefined (NOT 0 or '') those are falsey
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

//! the FOR-OF Loop
// can use the continue or break still
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //? basic
// for (const item of menu) console.log(item);

// //? working with the index
// for (const item of menu.entries()) {
// 	console.log(`${item[0] +1}: ${item[1]}`);
// }
// console.log([...menu.entries()]);

// //? more advanced version by destructuring the item array
// for (const [i, el] of menu.entries()) {
// 	console.log(`${i +1}: ${el}`);
// }

// //! Enhanced Object Literals
// const weekdays = ['mon','tue','wed','thu','fri','sat','sun'];

// const openingHoursNew = {
// 	[weekdays[3]]: {
// 		open: 12,
// 		close: 22,
// 	},
// 	[weekdays[4]]: {
// 		open: 11,
// 		close: 23,
// 	},
// 	sat: {
// 		open: 0, // Open 24 hours
// 		close: 24,
// 	},
// 	//? you can even compute the proprty names
// 	[`day-${2+5}`]: {
// 		open: 0, // Open 24 hours
// 		close: 24,
// 	},
// };
// console.log(openingHoursNew);

// const openingHours = {
// 	thu: {
// 		open: 12,
// 		close: 22,
// 	},
// 	fri: {
// 		open: 11,
// 		close: 23,
// 	},
// 	sat: {
// 		open: 0, // Open 24 hours
// 		close: 24,
// 	},
// };

// const restaurant2 = {
// 	name: "Classico Italiano",
// 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// 	categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
// 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// 	mainMenu: ["Pizza", "Pasta", "Risotto"],

// 	//? OLD WAY 
// 	order: function (starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	},

// 	//? ES6 Enhanced Object Literals
// 	// simply type the same name as the object you want to insert
// 	openingHours,

// 	//? ES6 Enhanced Object Function Declaration
// 	order2(starterIndex, mainIndex) {
// 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
// 	}, 
// };

// console.log(restaurant2);

// //! Optional Chaining (?)

// // console.log(restaurant.openingHours.mon); // we don't know if it is defined or not
// // console.log(restaurant.openingHours.mon.open); // fails since mon is undefined

// // checks before failing
// if (restaurant.openingHours.mon) {
// 	console.log(restaurant.openingHours.mon.open); 
// }

// //? ES 2020 with Optional Chaining
// // checks to see if mon exists then returns value or undefined (not error)
// // console.log(restaurant.openingHours.mon?.open);
// // console.log(restaurant.openingHours?.mon?.open);

// //? Real world example
// const days = ['mon','tue','wed','thu','fri','sat','sun'];

// for (const day of days) {
// 	// const open = restaurant.openingHours[day]?.open || "closed"; // makes Saturday closed but it opens at 0 (falsey value)
// 	const open = restaurant.openingHours[day]?.open ?? "closed"; // use nullish operator to fix it
// 	console.log(`On ${day}, we open at ${open}`);
// }

// //? Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRissotto?.(0,1) ?? 'Method does not exist');

// //? Arrays
// // const users = [{ name: 'Omar', email:'omar@omar.com' }];
// const users = [];

// console.log(users[0]?.name ?? "User array is empty");

// // OLD way
// if (users.length > 0) {
// 	console.log(users[0].name);
// } else {
// 	console.log("User array is empty");
// }

// //! Looping over Objects

// const openingHours = {
// 	thu: {
// 		open: 12,
// 		close: 22,
// 	},
// 	fri: {
// 		open: 11,
// 		close: 23,
// 	},
// 	sat: {
// 		open: 0, // Open 24 hours
// 		close: 24,
// 	},
// };

// //? Property Names
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
// 	openStr += `${day}, `;
// }
// console.log(openStr);

// //? Property Values
// const values = Object.values(openingHours);
// console.log(values);

// //? Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // before destructuring
// for (const x of entries) {
// 	console.log(x); // shoots out an array that has objects inside
// }

// // with destructuring
// for (const [key, {open, close}] of entries) {
// 	console.log(`on ${key} we open at ${open} and close at ${close}`);
// }
