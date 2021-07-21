const arrayOfPersons = [
	{
		firstName: "Mark",
		lastName: "Miller",
		height: 1.69,
		weight: 78,
		calcBMI: function () {
			this.bmi = (this.weight / (this.height * this.height)).toFixed(1);
			return this.bmi;
		},
	},
	{
		firstName: "John",
		lastName: "Smith",
		height: 1.95,
		weight: 92,
		calcBMI: function () {
			this.bmi = (this.weight / (this.height * this.height)).toFixed(1);
			return this.bmi;
		},
	},
];

//? add in the fullName & bmi
for (let j = 0; j < arrayOfPersons.length; j++) {
	arrayOfPersons[j].fullName = `${arrayOfPersons[j].firstName} ${arrayOfPersons[j].lastName}`;
	// arrayOfPersons[j].bmi = arrayOfPersons[j].calcBMI(); //replaced by 1st line in function
	arrayOfPersons[j].calcBMI(); // have to call function to populate bmi
}

console.log(arrayOfPersons[0].bmi);
console.log(arrayOfPersons[0]);
console.log(arrayOfPersons[1]);

const indexA = arrayOfPersons[0].bmi > arrayOfPersons[1].bmi ? 0 : 1;
const indexB = indexA === 1 ? 0 : 1;

console.log(
	`${arrayOfPersons[indexA].fullName}'s BMI (${arrayOfPersons[indexA].bmi}) is higher than ${arrayOfPersons[indexB].fullName}'s BMI (${arrayOfPersons[indexB].bmi})`
);
