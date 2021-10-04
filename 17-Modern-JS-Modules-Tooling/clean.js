//! Modified Code

"strict mode";

//? makes this Object immutable
//? Only freezes the top level, not a deep freeze, it won't stop the budget[0].value from being changed though
let budget = Object.freeze([
	{ value: 250, description: "Sold old TV 📺", user: "jonas" },
	{ value: -45, description: "Groceries 🥑", user: "jonas" },
	{ value: 3500, description: "Monthly salary 👩‍💻", user: "jonas" },
	{ value: 300, description: "Freelancing 👩‍💻", user: "jonas" },
	{ value: -1100, description: "New iPhone 📱", user: "jonas" },
	{ value: -20, description: "Candy 🍭", user: "matilda" },
	{ value: -125, description: "Toys 🚂", user: "matilda" },
	{ value: -1800, description: "New Laptop 💻", user: "jonas" },
]);

//? makes this Object immutable
let spendingLimits = Object.freeze({
	jonas: 1500,
	matilda: 100,
});

const getLimit = (limits, user) => limits?.[user] ?? 0;

//? Pure function
const addExpense = function (state, limits, value, description, user = "jonas") {
	const cleanUser = user.toLowerCase();

	//? adds the new object to the existing array
	return value <= getLimit(limits, cleanUser)
		? [...state, { value: -value, description: description, user: cleanUser }]
		: state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, "Pizza 🍕");
const newBudget2 = addExpense(newBudget1, spendingLimits, 110, "Going to movies 🍿", "Matilda");
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, "Stuff", "Jay");

//? now this function is PURE, it doesn't mutate budget
const checkExpenses = (state, limits) => {
	//? will make a new array add the new property to it
	return state.map((entry) => (entry.value < -getLimit(limits, entry.user) ? { ...entry, flag: "limit" } : entry));
};
const finalBudget = checkExpenses(newBudget3, spendingLimits);

//? IMPURE because it causes a side effect, the console.log (but it is necessary)
const logBigExpenses = function (state, bigLimit) {
	//? Declarative way
	const bigExpenses = state
		.filter((entry) => entry.value <= -bigLimit)
		.map((entry) => entry.description.slice(-2))
		.join(` / `);
	// .reduce((str, cur) => `${str} / ${cur.description.slice(-2)}`, "");

	console.log(bigExpenses);
	//? Imperative way
	// let output = "";
	// for (const entry of budget) {
	// 	output += entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : ""; // Emojis are 2 chars
	// }
	// output = output.slice(0, -2); // Remove last '/ '
	// console.log(output);
};

console.log(finalBudget);

logBigExpenses(finalBudget, 1000);
