let js = "amazing";
// console.log(40 + 8 + 23 - 10);

let firstName = "Omar";
let lastName = "Pastrana";
// console.log(firstName + " " + lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

// console.log(ageJonas, ageSarah);

// const firstName = "Omar";
const job = "Coder";
const birthYear = 1982;
const year = 2021;

const omar = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(omar);

const omarTemplate = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`; // the back ticks identify this as a template
// console.log(omarTemplate);

// console.log(`Just a regular string...`);
// console.log(`String of
// multiple
// lines`);



// 5 falsy values: 0, '', undefined, null, NaN
// all of these will become false if converted to Boolean
// Boolean(undefined);


// const money = 0;
// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log("You should get a job!");
// }


const age = 18;
// if (age === 18 ) console.log('adult');

// try to avoid == (loose) equality operator OR != (loose) different operator because it type coercion for you

// const favoriteNumber = Number(prompt("What is your favorite number?"));
// console.log(favoriteNumber, typeof favoriteNumber);