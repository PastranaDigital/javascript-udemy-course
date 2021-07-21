// TEST DATA
// const dolphins = [96, 108, 89];
// const koalas = [88, 91, 110];

// TEST DATA BONUS 1
// const dolphins = [97, 112, 101];
// const koalas = [109, 95, 123];

//TEST DATA BONUS 2
const dolphins = [97, 112, 101];
const koalas = [109, 95, 106];

const avgDolphins = average(dolphins);
const avgKoalas = average(koalas);
// const avgKoalas = avgDolphins + 1;

function average(incomingList) {
	let total = 0;
	for (let index = 0; index < incomingList.length; index++) {
		total += incomingList[index];
	}
	return total / incomingList.length;
}

// Challenge Part 1
// if (avgDolphins > avgKoalas) {
// 	console.log("Dolphins Win");
// } else if (avgDolphins < avgKoalas) {
// 	console.log("Koalas Win");
// } else {
// 	console.log("DRAW");
// }

// Bonus 1
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
	console.log(`Dolphins Win ${avgDolphins.toFixed(2)} to ${avgKoalas.toFixed(2)}`);
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
	console.log(`Koalas Win ${avgKoalas.toFixed(2)} to ${avgDolphins.toFixed(2)}`);
} else if (avgDolphins < 100 && avgKoalas < 100) {
	console.log(`No one wins ${avgDolphins.toFixed(2)} to ${avgKoalas.toFixed(2)}`);
} else {
	console.log(`DRAW ${avgDolphins.toFixed(2)} to ${avgKoalas.toFixed(2)}`);
}

// SCENARIOS

// D: 105 & K: 100  -- D wins
// D: 95 & K: 100   -- K wins
// D: 95 & K: 98    -- no one
// D: 105 & K: 105  -- Draw
