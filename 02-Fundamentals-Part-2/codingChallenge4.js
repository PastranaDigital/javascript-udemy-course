const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
const percentForBill = [];
// const calcTip = (bill, tip) =>

let percent = [15, 20];

const calcTip = (percent, bill) => (percent / 100) * bill;

for (let index = 0; index < bills.length; index++) {
	percentForBill.push(bills[index] >= 50 && bills[index] <= 300 ? percent[0] : percent[1]);
	tips.push(calcTip(percentForBill[index], bills[index]));
	totals.push(bills[index] + tips[index]);

	console.log(`Bill:             $   ${bills[index].toFixed(2)}`);
	console.log(`Tip (${percentForBill[index]}%):        $   ${tips[index].toFixed(2)}`);
	console.log(`Total:            $   ${totals[index].toFixed(2)}`);
	console.log(``);
}

//? BONUS
const calcAverage = function (arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total / arr.length;
};
console.log(calcAverage(totals));
