"use strict";

// my definitions
////////////////////////////////////////////////////////////

//! Abstraction:
//? removing functions from code to handle details somewhere else (ex: addEventlistener... we know how to use it but the details are not essential for us to know about)

//! Encapsulation:
//? keeping certain functions private from use outside of specifically intended purposes. Only essential methods should be public

//! Inheritance:
//? a template for methods to be created upon. Child class extends Parent class (Admin extends User) You can add to them for your new method but not remove the essential items

//! Polymorphism:
//? a child class can overwrite a method it inherited from a parent class

////////////////////////////////////////////////////////////

//! Constructor Functions and the new Operator
//? constructors should always start with a Captial
const Person = function (firstName, birthYear) {
	// console.log(this);
	this.firstName = firstName;
	this.birthYear = birthYear;

	// //! NEVER create a function inside of a constructor
	// //! EACH instance would have a copy of this function
	// this.calcAge = function () {
	// 	console.log(2037 - this.birthYear);
	// };
};

const omar = new Person("Omar", 1982);
console.log(omar);

//* 1. a new {} is created
//* 2. function is called, this = {}
//* 3. {} is linked to prototype
//* 4. function automatically return {}

const matilda = new Person("Matilda", 1984);
const jack = new Person("Jack", 1983);
console.log(matilda, jack);

const arrayTest = [];
const jay = "Jay";

console.log(omar instanceof Person); // returns true
console.log(jay instanceof Person); // returns false
console.log(arrayTest instanceof Array);

//! Prototypes
//? every object that is created by constructor function will now have access to all the prototype function
console.log(Person.prototype);

// add a method to it (but it is the only copy of it) through inheritance
Person.prototype.calcAge = function () {
	console.log(2021 - this.birthYear);
};

omar.calcAge(); // has access because of prototypal inheritance
jack.calcAge();

console.log(omar.__proto__); // what is inherited //* this is set on step #3
console.log(omar.__proto__ === Person.prototype); // returns true
console.log(Person.prototype.isPrototypeOf(omar));
console.log(Person.prototype.isPrototypeOf(Person));

// define a new property
Person.prototype.species = "Homo Sapiens";
console.log(omar.species, matilda.species);
// this property is not inside the object but it has access to it because of prototypal inheritance
console.log(omar.hasOwnProperty("firstName"));
console.log(omar.hasOwnProperty("species"));
