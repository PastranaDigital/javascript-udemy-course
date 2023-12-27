'use strict';
class Person {
	constructor(fullName, mass, height) {
		this.fullName = fullName;
		this.mass = mass;
		this.height = height;
		// this.bmi = this.calcBMI();
		this.calcBMI();
	}
	calcBMI() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

let mark = new Person('Mark Miller', 78, 1.69);
let john = new Person('John Smith', 92, 1.95);
// console.log(JSON.stringify(mark));
// console.log(JSON.stringify(john));
// console.log(john.bmi, mark.bmi);

if (john.bmi > mark.bmi) {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
}
