"use strict";

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

const openingHours = {
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
};

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

// //! Sets
// //? A collection of unique values

// const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// console.log(ordersSet); // it only kept the unique values
// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread'); // this one won't be added
// ordersSet.delete('Pizza');
// // orderSet.clear(); // empties the set
// console.log(ordersSet);
// //? there are no indexes... there is no need to actually retrieve a value
// //? it is either in the set or not... use the has method or an array

// const stringSet = new Set("Omar");
// console.log(stringSet);

// for (const letter of stringSet) {
// 	console.log(letter);
// }

// //? Example of Use Case: used to remove duplicates in an array
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// // //? Make a set from the array of only unique values
// // const staffUnique = new Set(staff);
// // console.log(staffUnique);
// //? To make it an Array after making it unique, then we use the spread operator because they are iterable
// const staffUnique = [...new Set(staff)]; // now it is an Array
// console.log(staffUnique);
// //? if you just wanted to get the number of unique values
// console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
// console.log(new Set(staff).size);
// console.log(new Set('omarpastrana').size);

// //? best to use Arrays for everything unless you need just unique values

// //! Maps Fundamentals
// //? key value pairs with keys being of any type

// const restMap = new Map();
// restMap.set("name", "Classico Italiano");
// restMap.set(1, "Firenze, Italy");
// restMap.set(2, "Lisbon, Portugal");
// console.log(restMap);

// restMap
// 	.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
// 	.set("open", 11)
// 	.set("close", 23)
// 	.set(true, "We are open!")
// 	.set(false, "We are closed");

// console.log(restMap);
// //? pull the "value" by getting the "key"
// console.log(restMap.get("name"));
// console.log(restMap.get(true));
// console.log(restMap.get(1)); // has to be the same type as the key "1" won't work

// //? check the value because we have a true & false "key"
// const time = 21;
// console.log(restMap.get(time > restMap.get("open") && time < restMap.get("close"))); // should return true... therefore "We are open!"

// console.log(restMap.has("categories"));
// restMap.delete(2);
// console.log(restMap.size);
// restMap.clear();
// console.log(restMap);

// // //? Objects as map key
// // restMap.set([1, 2], "Test"); // assign an Array as the key
// // console.log(restMap);
// // console.log(restMap.get([1, 2])); // similar array but not the same array

// //? Objects as map key (Correctly)
// const arr = [1, 2];
// restMap.set(arr, "Test"); // assign an Array as the key
// console.log(restMap);
// console.log(restMap.get(arr)); // similar array but not the same array
// restMap.set(document.querySelector("h1"), "Heading");

// //! Maps Iteration
// //? better way than "set" to create a map
// const question = new Map([
// 	["question", "What is the best programming language?"],
// 	[1, "C"],
// 	[2, "Java"],
// 	[3, "JavaScript"],
// 	["correct", 3],
// 	[true, "Correct!"],
// 	[false, "Try Again"],
// ]);
// console.log(question);

// console.log(Object.entries(openingHours)); // looks the same as the Map
// //? Convert Object to Map
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //? loop through Map (since a map is already iterable, no need for Object.entries)
// console.log(question.get("question"));
// for (const [key, value] of question) {
// 	if (typeof key === "number") {
// 		console.log(`Answer ${key}: ${value}`);
// 	}
// }
// // const answer = Number(prompt("Your Answer"));
// const answer = 3;
// console.log(answer);
// console.log(question.get(answer === question.get("correct")));

// //? convert Map to Array
// console.log([...question]);
// // console.log([...question.entries()]); // same as above
// console.log([...question.keys()]);
// console.log([...question.values()]);

//! --------------------------------------------------------------
//! Which Data Structure to Use?
//! --------------------------------------------------------------
//? Sources of Data
// From the program itself (Data written directly in source code)
// From the UI (Data input from the user or data written in DOM)
// From external sources (Data fetched from web API... JSON)
// [API: Application Programming Interface]

//? Simple list? = Array or Set
//? Key/Value Pair? = Objects or Maps
// Keys allows us to describe values

//? WHY Arrays
// when you need "ordered" list of values
// when duplicates can exist
// when you need to "manipulate" data

//? WHY Sets
// when you need to work with "unique" values
// when "high-performance" is really important
// when you need to remove "duplicates" from arrays

//? WHY Objects
// more "traditional" key/value store
// easier to write and access values with . and []
// when you need to include "functions" as values (methods)
// use when working with JSON (can convert to Map later, not usual)

//? WHY Maps
// better performance
// keys can be of "any" data type
// easy to iterate
// easy to compute size
// use when you simply need to map key to values
// use when you need keys that are not strings (true/false)

//! Working with Strings Part 1
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// for (let i = 0; i < plane.length; i++) {
// 	console.log(plane[i]);
// }
// console.log('');
// console.log('B737'[0]);
// console.log('B737'.length);

// console.log('');
// console.log(airline.length);
// // Gives the first occurence
// console.log(airline.indexOf('r'));
// // Gives the last occurence
// console.log(airline.lastIndexOf('r'));
// // Search for a word (case sensitive)
// console.log(airline.indexOf('Portugal'));
// console.log(airline.indexOf('portugal')); // -1 because doesn't exist
// // index of the beginning (, end) & length of the final substring is end - beginning
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7)); // substring length is 7-4=3

// console.log('');
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-7));
// console.log(airline.slice(4, -2));

// //? Example in a function
// const checkMiddleSeat = function (seat) {
// 	// B & E are middle seats
// 	const s = seat.slice(-1); // gets the last value only
// 	if (s === 'B' || s === 'E') {
// 		console.log('You got a middle seat');
// 	} else {
// 		console.log('You got lucky');
// 	}
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// //! Working with Strings Part 2
// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //? Fix Capitalization in Name
// const passenger = "kaTHerIne";
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //? Comparing Emails
// const email = "hello@jonas.io";
// const loginEmail = "   Hello@Jonas.Io \n";
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // clears leading and trailing white space
// console.log(trimmedEmail);
// console.log(trimmedEmail === email);

// const allInOneStepEmail = loginEmail.toLowerCase().trim();
// console.log(allInOneStepEmail);

// //? Replacing parts
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement = "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replace("door", "gate")); // only did 1
// console.log(announcement.replace(/door/g, "gate")); // with regex
// console.log(announcement.replaceAll("door", "gate"));

// //? Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
// 	console.log("part of the New Airbus Family");
// }

// //? Practice exercise
// const checkBaggage = function (items) {
// 	const baggage = items.toLowerCase(); // must compare at lowercase
// 	if (baggage.includes("knife") || baggage.includes("gun")) {
// 		console.log("You are not allowed to board");
// 	} else {
// 		console.log("Welcome aboard");
// 	}
// };

// checkBaggage("I have a laptop, some Food and a pocket KNIFE");
// checkBaggage("Socks and camera");

//! Working with Strings Part 3
//? split & join
console.log("a+very+nice+string".split("+")); // converts to an array
console.log("Omar Pastrana".split(" "));
//? using destructuring
const [firstName, lastName] = "Omar Pastrana".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
	const nameParts = name.split(" ");
	console.log(nameParts);
	let finalResult = [];
	nameParts.forEach((element) => {
		//? option 1
		// let tempName = element[0].toUpperCase() + element.slice(1);
		// finalResult.push(tempName);
		//? other way to do it
		finalResult.push(element.replace(element[0], element[0].toUpperCase()));
	});
	console.log(finalResult.join(" "));
};

capitalizeName("jessica ann smith davis");

//? padding a string (to get it to a specific length)
const message = "Go to gate 23!";
console.log(message.padStart(25, "+"));
console.log(message.padEnd(25, "+"));

//? real world example
const maskCreditCard = function (number) {
	// const str = String(number);
	// or
	const str = number + "";
	const last = str.slice(-4);
	return last.padStart(str.length, "*");
};
console.log(maskCreditCard(1234567890123456));

//? Repeat
const message2 = "Bad weather... All Departures Delayed...  ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
	console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};

planesInLine(5);
