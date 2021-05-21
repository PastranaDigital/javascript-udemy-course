// BMI = mass / height ** 2
// BMI = mass / (height * height)

// TEST DATA 1
let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn);

let markHigherBMI = bmiMark > bmiJohn;
console.log("TEST DATA 1");
console.log(bmiMark, bmiJohn, markHigherBMI);

// TEST DATA 2
massMark = 95;
heightMark = 1.88;

massJohn = 85;
heightJohn = 1.76;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

markHigherBMI = bmiMark > bmiJohn;
console.log("TEST DATA 2");
console.log(bmiMark, bmiJohn, markHigherBMI);
