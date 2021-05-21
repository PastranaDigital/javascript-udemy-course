let percent = 0;
let tip = 0;
let bill;

for (let index = 0; index < 4; index++) {
	bill = Number(prompt("How much was the bill?"));
	percent = bill >= 50 && bill <= 300 ? 15 : 20;
	tip = (percent / 100) * bill;

	console.log(``);
	console.log(`Bill:              $   ${bill.toFixed(2)}`);
	console.log(`Tip (${percent}%):         $   ${tip.toFixed(2)}`);
	console.log(`--------------------------------`);
	console.log(`Total:             $   ${(bill + tip).toFixed(2)}`);
	console.log(``);
}
