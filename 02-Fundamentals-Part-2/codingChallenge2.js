// MY SOLUTION

let percent = [15, 20];
let tip;
let bill = [125, 550, 44];
const total = [];

const calcTip = (percent, bill) => (percent / 100) * bill;

for (let index = 0; index < bill.length; index++) {
	// bill = Number(prompt("How much was the bill?"));
	const percentForBill = bill[index] >= 50 && bill[index] <= 300 ? percent[0] : percent[1];
	// tip = (percent / 100) * bill[index];
	tip = calcTip(percentForBill, bill[index]);
	total.push(bill[index] + tip);

	console.log(`Bill:              $   ${bill[index].toFixed(2)}`);
	console.log(`Tip (${percentForBill}%):         $   ${tip.toFixed(2)}`);
	console.log(`Total:             $   ${total[index].toFixed(2)}`);
	console.log(``);
}

// HIS SOLUTION
// const calcTip = function (bill) {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 550, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);
