// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures = [5, 3, 2, 1];
let temperaturesSorted = [];

// temperatures.splice(2, 0, 99);

// const sortArray = function (array) {
// 	const tempArray = [];
// 	for (let i = 0; i < array.length; i++) {
// 	// for (let i = 0; i < 3; i++) {
// 		if (typeof array[i] == "number") {
// 			if (i === 0) {
// 				tempArray.push(array[i]);
// 			} else {
// 				// console.log("before 2nd for loop");
// 				// 	console.log("2nd for loop");
// 				for (let j = 0; j < tempArray.length; j++) {
// 					if (array[i] > tempArray[j]) {
// 						// if (array[i] > array[i - 1]) {
// 						tempArray.unshift(array[i]);
//                         break;
// 					} else if (array[i] > tempArray[j+1]) {
// 						// if (array[i] > tempArray[j+1]) {
// 						// console.log("hit 2nd else", array[i]);
// 						tempArray.splice(j+1, 0, array[i]);
// 						break;
// 						// tempArray.push(array[i]);
// 						// }
// 					}
// 				}
// 			}
//             console.log(tempArray);
// 		}
// 	}
// 	return tempArray;
// };

const sortArray = function (array) {
	const tempArray = array;
	for (let i = 0; i < array.length; i++) {
		for (let j = 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				break;
			} else if (array[i] < array[j]) {
                tempArray[i] = array[j];
                tempArray[j] = array[i];
                break;
            }
		}
	}
	return tempArray;
};

temperaturesSorted = sortArray(temperatures);
// console.log(temperatures);
console.log(temperaturesSorted);

// temperaturesSorted = sortArray(temperaturesSorted);
// console.log(temperaturesSorted);
