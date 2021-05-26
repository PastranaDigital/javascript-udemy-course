const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

// `... ##C in # days ... ##C in # days ... ##C in # days ...`
// going to be a for loop of adding it to a string

const printForecast = function (arr) {
	let theString = "... ";
	for (let i = 0; i < arr.length; i++) {
		if (i === 0) {
			theString += `${arr[i]}C in ${i + 1} day ... `;
		} else {
			theString += `${arr[i]}C in ${i + 1} days ... `;
		}
	}
	return theString;
};
console.log(printForecast(testData1));

/*

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

*/
