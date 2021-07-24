"use strict";

const calcAverageHumanAge = function (ages) {
    // const arrayHuman = ages.map(function(dogAge, i, arr) {
    //     if(dogAge <= 2) {
    //         return dogAge * 2;
    //     } else {
    //         return 16 + dogAge * 4;
    //     }
    // });
    const adults = ages
        .map((dogAge) => dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4)
        .filter((element) => element >= 18)
        .reduce((acc, element, i, array) => acc + element / array.length , 0);
    console.log(adults);
}

calcAverageHumanAge( [5, 2, 4, 1, 15, 8, 3] );
calcAverageHumanAge( [16, 6, 10, 5, 6, 1, 4] );