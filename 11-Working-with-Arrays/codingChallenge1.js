"use strict";

const checkDogs = function (array1, array2) {
    const array1fixed = array1.slice(1, -2);
    // console.log(array1, array1fixed);
    const arrayFinal = [...array1fixed, ...array2];
    //? OR
    // const arrayFinal = array1fixed.concat(array2);
    console.log(arrayFinal);
    arrayFinal.forEach(function(age, index, array) {
        if(age >= 3) {
            console.log(`Dog number ${index+1} is an adult, and is ${age} years old`);
        } else {
            console.log(`Dog number ${index+1} is still a puppy`);
        }
    });
}

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);

dogsJulia =  [9, 16, 6, 8, 3];
dogsKate =  [10, 5, 6, 1, 4];
checkDogs(dogsJulia, dogsKate);