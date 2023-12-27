let dol1 = [44, 23, 71];
let koa1 = [65, 54, 49];

let dol2 = [85, 54, 41];
let koa2 = [23, 34, 27];

let calcAverage = (a, b, c) => {
	return (a + b + c) / 3;
};

let scoreDolphins = calcAverage(...dol1);
let scoreKoalas = calcAverage(...koa1);

console.log(scoreDolphins);
console.log(scoreKoalas);

let checkWinner = (avgDolphins, avgKoalas) => {
	let winner = [];
	if (avgDolphins >= avgKoalas * 2) winner = ['Dolphins', avgDolphins, avgKoalas];
	if (avgKoalas >= avgDolphins * 2) winner = ['Koalas', avgKoalas, avgDolphins];
	let string = winner.length > 0 ? `${winner[0]} win (${winner[1]} vs. ${winner[2]})` : 'No team wins...';
	console.log(string);
};

checkWinner(scoreDolphins, scoreKoalas);
