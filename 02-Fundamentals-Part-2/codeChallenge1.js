const dolphins = [97, 112, 201];
const koalas = [109, 95, 106];

const calcAverage = (incomingList) => {
	let total = 0;
	for (let index = 0; index < incomingList.length; index++) {
		total += incomingList[index];
	}
	return total / incomingList.length;
};

const checkWinner = function (team1Scores, team2Scores) {
	const avgTeam1 = calcAverage(team1Scores);
	const avgTeam2 = calcAverage(team2Scores);

	if (avgTeam1 > avgTeam2 && avgTeam1 >= 100) {
		console.log(`Dolphins Win ${avgTeam1.toFixed(2)} to ${avgTeam2.toFixed(2)}`);
	} else if (avgTeam1 < avgTeam2 && avgTeam2 >= 100) {
		console.log(`Koalas Win ${avgTeam2.toFixed(2)} to ${avgTeam1.toFixed(2)}`);
	} else if (avgTeam1 < 100 && avgTeam2 < 100) {
		console.log(`No one wins ${avgTeam1.toFixed(2)} to ${avgTeam2.toFixed(2)}`);
	} else {
		console.log(`DRAW ${avgTeam1.toFixed(2)} to ${avgTeam2.toFixed(2)}`);
	}
};

checkWinner(dolphins, koalas);
