"use strict";

const convertToCamelCase = function(string) {
    let tempArray1 = string.split('\n');
	// console.log(tempArray1);
    let wordCount = 1;
    tempArray1.forEach(string => {
        // convertToCamelCase(string);
        let tempArray2 = string.trim().toLowerCase().split("_");
        // console.log(tempArray2);
        let finalWord = [];
        let count = 0;
        tempArray2.forEach((word) => {
            let tempWord = word;
            if (count != 0) {
                tempWord = tempWord.replace(tempWord[0], tempWord[0].toUpperCase());
            }
            finalWord.push(tempWord);
            count++;
        });
        console.log(finalWord.join("").padEnd(20, ' ') + "✅".repeat(wordCount));
        wordCount++;
    });
}

const addFlare = function(string) {

}

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
document.querySelector("button").addEventListener("click", function () {
	const text = document.querySelector("textarea").value;
	convertToCamelCase(text);
});

/*
underscore_case
 first_name
Some_Variable
  calculate_AGE_Array
delayed_departure
*/
