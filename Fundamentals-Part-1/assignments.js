let country = "United States";
let continent = "North America";
let population = 325;

// console.log("country: " + country);
// console.log("continent: " + continent);
// console.log("population: " + population);

const isIsland = false;
const language = "English";
const finlandPopulation = 6;
const description1 = "Portugal is in Europe, and its 11 million people speak portuguese";

// const description2 = country + " is in " + continent + ", and its " + population + " million people speak " + language;
const description2 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;

// console.log(description2);

// console.log(isIsland);
// population += 1;
// console.log("population: " + population);
// console.log("country: " + country);
// console.log(language);
// console.log(typeof isIsland);

// console.log("1/2 population: " + population / 2);
// console.log(population > finlandPopulation);

if (population > 33) {
	// console.log(`${country}' population is above average`);
} else {
	// console.log(`${country}' population is ${33 - population} million below average`);
}

"9" - "5"; // number 4
"19" - "13" + "17"; // string 617
"19" - "13" + 17; // number 23
"123" < 57; // boolean false
5 + 6 + "4" + 9 - 4 - 2; // number 1143
// 11 + "4" + 9 - 4 - 2
// "114" + 9 - 4 - 2
// "1149" - 4 - 2
// 1145 - 2
// 1143

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);



// const numNeighbours = Number(prompt("How many neighbor countries does your Country have?"));

// if (numNeighbours === 1) {
// 	console.log("only 1 border");
// } else if (numNeighbours > 1) {
// 	console.log("more than 1 border");
// } else {
// 	console.log("no borders");
// }

// if (language === "English" && population < 50 && !isIsland) {
// 	console.log(`you should live in ${country}!`);
// } else {
// 	console.log(`${country} does not meet your criteria`);
// }



// Switch statement. Strict comparison
// switch (language) {
//     case 'Chinese':
//     case 'Mandarin':
//         console.log('MOST speakers');
//         break;
//     case 'Spanish':
//         console.log('2nd');
//         break;
//     case 'English':
//         console.log('3rd');
//         break;

//     default:
//         console.log('not valid');
//         break;
// }

// IF-ELSE version
// if (language === 'Chinese' || language === 'Mandarin'){
//     console.log('MOST speakers');
// } else if (language === 'Spanish') {
//     console.log('2nd');
// } else if (language === 'English') {
//     console.log('3rd');
// } else {
//     console.log('not valid');
// }





// Ternary Operator
// [ Condition ]  ?  [ Single action if TRUE ] : [ Single action if FALSE ]

// population > 33 ? console.log('above average') : console.log('below average');

// OR

// const result = population > 33 ? 'above' : 'below';
// console.log(`${country}' population is ${result} average`);

// OR

// console.log(`${country}' population is ${population > 33 ? 'above' : 'below'} average`);
