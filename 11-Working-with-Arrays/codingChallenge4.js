"use strict";

const dogs = [
	{ weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
	{ weight: 8, curFood: 200, owners: ["Matilda"] },
	{ weight: 13, curFood: 275, owners: ["Sarah", "John"] },
	{ weight: 32, curFood: 340, owners: ["Michael"] },
];

//? Task #1
dogs.forEach((dog) => {
	dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);

	//? Task #2
	if (dog.owners.includes("Sarah")) {
		console.log(dog.curFood > dog.recommendedFood ? "More" : "Less");
	}
});
console.log(dogs);

// const owners = dogs.flatMap((dog) => dog.owners);
// console.log(owners);

//? Task 3
const { ownersEatTooMuch, ownersEatTooLittle } = dogs.reduce(
	(result, dog) => {
		dog.curFood > dog.recommendedFood
			? result.ownersEatTooMuch.push(...dog.owners)
			: result.ownersEatTooLittle.push(...dog.owners);
		return result;
	},
	{ ownersEatTooMuch: [], ownersEatTooLittle: [] }
);
console.log(`ownersEatTooMuch: ${ownersEatTooMuch}`);
console.log(`ownersEatTooLittle: ${ownersEatTooLittle}`);

// const arrA = ["a", "b", "c"];
// const strA = "d";
// const finalArr = [];
// finalArr.push(...strA);
// finalArr.push(...arrA);
// console.log(finalArr);
// console.log(arrA.flat());
// console.log(...arrA);

//? Task #4
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little!`);

//? Task #5
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

//? Task #6
console.log(dogs.some((dog) => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1));

//? Task #7
const eatingOkay = dogs.filter(
	(dog) => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1
);
console.log(eatingOkay);

//? Task #8
// slice will let us copy the array
// we are doing ASC because we are displaying from the bottom to top
// const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

// movements.sort((a, b) => {
//   if( a > b )
//     return 1;
//   if( b > a )
//     return -1;
// });
// movements.sort((a, b) => a - b); // Sorts ASC
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);
