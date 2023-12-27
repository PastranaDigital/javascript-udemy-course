'use strict';
/* Write your code below. Good luck! 🙂 */

let bills = [125, 555, 44];

let calcTip = (value) => {
	if (value > 50 && value < 300) {
		return value * 0.15;
	} else {
		return value * 0.2;
	}
};

let tips = [];
let totals = [];
bills.forEach((v, i) => {
	tips.push(calcTip(bills[i]));
	console.log(v, ' => ', calcTip(bills[i]));
	totals.push(tips[i] + v);
});

console.log(tips);
console.log(totals);
