"use strict";

const convertToCamelCase = function (string) {
	let tempArray = string.trim().toLowerCase().split("_");
	console.log(tempArray);
	let finalResult = [];
	let count = 0;
	tempArray.forEach((word) => {
		let tempWord = word;
		if (count != 0) {
			tempWord = tempWord.replace(tempWord[0], tempWord[0].toUpperCase());
		}
		finalResult.push(tempWord);
		count++;
	});
	console.log(finalResult.join(""));
};

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
	const text = document.querySelector("textarea").value;
	convertToCamelCase(text);
});

// convertToCamelCase("underscore_case");
// convertToCamelCase(" first_name");
// convertToCamelCase("Some_Variable");
// convertToCamelCase("  calculate_AGE_Array");

/*

underscore_case
 first_name
Some_Variable
  calculate_AGE_Array
delayed_departure


*/
