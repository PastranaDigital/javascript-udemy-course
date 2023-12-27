'use strict';

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

/* Write your code below. Good luck! 🙂 */

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips = [];
let totals = [];

bills.forEach((bill, index) => {
	tips.push(calcTip(bill));
	totals.push(tips[index] + bill);
});

let calcAverage = (arr) => {
	return arr.reduce((a, b) => a + b, 0) / arr.length;
};

console.log(calcAverage([1, 2, 4, 5]));
calcAverage(totals);
console.log(calcAverage(totals));
