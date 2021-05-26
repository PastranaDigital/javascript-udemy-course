// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// const findAmplitude = function (array) {
// 	let max;
// 	let min;
// 	for (let i = 0; i < array.length; i++) {
// 		if (typeof array[i] === "number") {
// 			if (i === 0) {
// 				max = min = array[i];
// 			} else if (array[i] >= max) {
// 				max = array[i];
// 			} else if (array[i] <= min) {
// 				min = array[i];
// 			}
// 		}
// 	}
// 	return max - min;
// };
// console.log(findAmplitude(temperatures));

// const findAmplitude2 = function (array1, array2) {
// 	let max;
// 	let min;
// 	let newArray = array1.concat(array2);
// 	for (let i = 0; i < newArray.length; i++) {
// 		if (typeof newArray[i] === "number") {
// 			if (i === 0) {
// 				max = min = newArray[i];
// 			} else if (newArray[i] >= max) {
// 				max = newArray[i];
// 			} else if (newArray[i] <= min) {
// 				min = newArray[i];
// 			}
// 		}
// 	}
// 	return max - min;
// };
// console.log(findAmplitude2(temperatures, [14, -8, 0]));

// const temperatures = [5, 3, 2, 1];
// let temperaturesSorted = [];

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

// const sortArray2 = function (array) {
// 	const tempArray = array;
// 	for (let i = 0; i < array.length; i++) {
// 		for (let j = 1; j < array.length; j++) {
// 			if (array[i] > array[j]) {
// 				break;
// 			} else if (array[i] < array[j]) {
// 				tempArray[i] = array[j];
// 				tempArray[i + 1] = array[i];
// 				break;
// 			}
// 		}
// 	}
// 	return tempArray;
// };

// temperaturesSorted = sortArray2(temperatures);
// // console.log(temperatures);
// console.log(temperaturesSorted);
