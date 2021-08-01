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

// //! Constructor Functions and the new Operator
// //? constructors should always start with a Captial
// const Person = function (firstName, birthYear) {
// 	// console.log(this);
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;

// 	//! NEVER create a function inside of a constructor
// 	//! EACH instance would have a copy of this function
// 	// this.calcAge = function () {
// 	// 	console.log(2037 - this.birthYear);
// 	// };
// };

// const omar = new Person("Omar", 1982);
// console.log(omar);

// //* 1. a new {} is created
// //* 2. function is called, this = {}
// //* 3. {} is linked to prototype
// //* 4. function automatically return {}

// const matilda = new Person("Matilda", 1984);
// const jack = new Person("Jack", 1983);
// console.log(matilda, jack);

// const arrayTest = [];
// const jay = "Jay";

// console.log(omar instanceof Person); // returns true
// console.log(jay instanceof Person); // returns false
// console.log(arrayTest instanceof Array);

// //! Prototypes
// //? every object that is created by constructor function will now have access to all the prototype function
// console.log(Person.prototype);

// // add a method to it (but it is the only copy of it) through inheritance
// Person.prototype.calcAge = function () {
// 	console.log(2021 - this.birthYear);
// };

// omar.calcAge(); // has access because of prototypal inheritance
// jack.calcAge();

// console.log(omar.__proto__); // what is inherited //* this is set on step #3
// console.log(omar.__proto__ === Person.prototype); // returns true
// console.log(Person.prototype.isPrototypeOf(omar));
// console.log(Person.prototype.isPrototypeOf(Person));

// // define a new property
// Person.prototype.species = "Homo Sapiens";
// console.log(omar.species, matilda.species);
// // this property is not inside the object but it has access to it because of prototypal inheritance
// console.log(omar.hasOwnProperty("firstName"));
// console.log(omar.hasOwnProperty("species"));

// //! Prototypal Inheritance and the Prototype Chain
// //? Prototype Chain:
// //? the direct properties given to it from the Object and all the prototypal inheritance methods

// //! Prototypal Inheritance on Built-In Objects
// console.log(omar.__proto__);
// console.log(omar.__proto__.__proto__); // Object.prototype
// console.log(omar.__proto__.__proto__.__proto__); // null
// //? any function is an object therefore it has a prototype too
// console.dir(Person.prototype.constructor);

// const arr = [3,5,3,6,3,9,9,9]; // length = 8
// console.log(arr.__proto__); // lists out all the inherited prototype methods
// console.log(arr.__proto__.__proto__);

// //? creating a new method on the Array prototype
// //! generally not a good idea
// 	// 1. next version of Js might add method with same name & maybe a different way
// 	// 2. when you are working on a team, it will complicate code
// Array.prototype.unique = function() {
// 	return [...new Set(this)];
// }
// //? all arrays will now inherit that method
// console.log(arr.unique()); // length = 4

// const h1 = document.querySelector('h1');
// // Results show prototypes: HTMLHeaderElement -> HTMLElement -> Element -> Node -> EventTarget -> Object

// console.dir(x => x+1);

// //! Using Class Declaration (ES6)
// //? designed to better match how other programming languages are written
// //? classes are just functions. We use a special keyword (class) but they are the same

// //? Class expression
// const PersonClE = class {

// }

// //? Class declaration
// class PersonCl {
// 	constructor(fullName, birthYear) { // must be called constructor
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}

// 	//* Instance Methods
// 	//? this can be found now under the [[Prototype]] results in the console when logging jessica
// 	calcAge() { // similar to prototypal inheritance, this is only on this class and the children can access it (they will be added to the prototype)
// 		console.log(2021 - this.birthYear);
// 	} // no commas needed to separate

// 	greet2() {
// 		console.log(`Hello v2 ${this.fullName}!`);
// 	}

// 	get age() {
// 		return 2021 - this.birthYear;
// 	}

// 	//? setter for a property name that already exists
// 	set fullName(name) {
// 		console.log(name);
// 		if(name.includes(' ')) this._fullName = name; // used _fullName since fullName is already a property
// 		else alert(`${name} is not a full name!`);
// 	}
// 	//? since our setter was referencing the same name as a property we have to use a getter for when we want (ex: jessica.fullName)
// 	get fullName() {
// 		return this._fullName;
// 	}

// 	//? adding a static method Option 2
// 	static hey2() {
// 		console.log('HEY!!! HEY!!!');
// 		console.log(this); // the object calling the method
// 	}

// }

// const jessica = new PersonCl('Jessica Davis', 1986);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// console.log(jessica.__proto__ === PersonCl.prototype);

// // const tom = new PersonCl('Tom', 1985); // throws Alert message

// // Can still do using prototype declaration
// PersonCl.prototype.greet = function() {
// 	console.log(`Hello ${this.fullName}!`);
// }
// jessica.greet();
// jessica.greet2();

// //? 1. Classes are NOT hoisted (we cannot use them before they are declared, like functions)
// //? 2. Classes are first-class citizens
// //? 3. Classes are executed in strict mode

// //* Classes look a lot better and cleaner

// //! Getters and Setters (not essential but nice)
// //? get and set property values

// const account = {
// 	owner: 'Omar',
// 	movements: [200, 300, 120, -400],

// 	get latest() { //? great for when we want to read a calculation as a property
// 		return this.movements.slice(-1).pop();
// 	},

// 	//* you don't need a setter just because you have a getter
// 	set latest(mov) { //? Must include a property
// 		this.movements.push(mov);
// 	},
// }

// console.log(account.latest);

// //? use the setter
// account.latest = 50;
// console.log(account.movements);

// //? classes have getters and setters too LOOK above

// //! Static Methods
// //? these methods are static on the constructor and not freely available
// console.log(Number.parseFloat(12)); // can be done
// const str = '4251'
// // console.log(str.parseFloat()); // won't work

// //? adding a static method Option 1
// PersonCl.hey = function() {
// 	console.log('HEY!!!');
// 	console.log(this); // the object calling the method
// }
// PersonCl.hey(); // works
// // jessica.hey(); // won't work

// //? adding a static method Option 2 (FOUND IN CLASS DECLARATION)
// PersonCl.hey2(); // works
// // jessica.hey2(); // won't work

// //! Object.create (least used way)(needed for true class inheritance)
// //? still the idea of prototypal inheritance but we can set the prototype of any object
// const PersonProto = {
// 	calcAge() {
// 		console.log(2021 - this.birthYear);
// 	},
// };

// // const steven = Object.create(PersonProto);
// // console.log(steven);
// // steven.name = 'Steven';
// // steven.birthYear = 2002;
// // steven.calcAge();

// // console.log(steven.__proto__ === PersonProto);

// // adding properties a better way
// const PersonProto2 = {
// 	calcAge() {
// 		console.log(2021 - this.birthYear);
// 	},

// 	init(firstName, birthYear) {
// 		// similar to the constructor method in class declaration but it is not called with the new keyword
// 		this.firstName = firstName;
// 		this.birthYear = birthYear;
// 	},
// };

// const sarah = Object.create(PersonProto2);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// //! Inheritance Between "Classes": Constructor Functions ---------------------------------
// //? Student will inherit from Person
// //? Student will have a few specific methods
// //* 1. Using Constructor Functions
// //* 2. Using ES6 Classes
// //* 3. Using Object.create()

// const Person = function(firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function() {
// 	console.log(2021 - this.birthYear);
// };

// //? This is repetition of Person Object
// // const Student = function(firstName, birthYear, course) {
// // 	this.firstName = firstName;
// // 	this.birthYear = birthYear;
// // 	this.course = course;
// // }

// const Student = function(firstName, birthYear, course) {
// 	//? inheriting Person
// 	Person.call(this, firstName, birthYear); // call helps us assign the "this" to be referenced
// 	this.course = course;
// }

// //? in the end we want to create a connection manually so Person is the prototype of Student
// //? must be done before Student.prototype
// Student.prototype = Object.create(Person.prototype); // returns an empty object

// Student.prototype.introduce = function() {
// 	console.log(`My name is ${this.firstName}`);
// }

// const mike = new Student('Mike', 1988, 'Art');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__); //
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// //! Inheritance Between "Classes": ES6 Classes ---------------------------------
// //? Student will inherit from Person
// //? Student will have a few specific methods
// //* it hides how this all happens in the background

// class PersonCL {
// 	constructor(fullName, birthYear) {
// 		// must be called constructor
// 		this.fullName = fullName;
// 		this.birthYear = birthYear;
// 	}

// 	//* Instance Methods
// 	//? this can be found now under the [[Prototype]] results in the console when logging jessica
// 	calcAge() {
// 		// similar to prototypal inheritance, this is only on this class and the children can access it (they will be added to the prototype)
// 		console.log(2021 - this.birthYear);
// 	} // no commas needed to separate

// 	greet2() {
// 		console.log(`Hello v2 ${this.fullName}!`);
// 	}

// 	get age() {
// 		return 2021 - this.birthYear;
// 	}

// 	//? setter for a property name that already exists
// 	set fullName(name) {
// 		console.log(name);
// 		if (name.includes(" ")) this._fullName = name;
// 		// used _fullName since fullName is already a property
// 		else alert(`${name} is not a full name!`);
// 	}
// 	//? since our setter was referencing the same name as a property we have to use a getter for when we want (ex: jessica.fullName)
// 	get fullName() {
// 		return this._fullName;
// 	}

// 	//? adding a static method Option 2
// 	static hey2() {
// 		console.log("HEY!!! HEY!!!");
// 		console.log(this); // the object calling the method
// 	}
// }

// //? don't need new parameters "course", could just share Person's and have its own methods
// class StudentCL extends PersonCL {
// 	constructor(fullName, birthYear, course) {
// 		//* super = constructor of the parent function
// 		//* Always needs to happen first because it determines the "this" for the class
// 		super(fullName, birthYear);
// 		this.course = course;
// 	}

// 	introduce() {
// 		console.log(`My name is ${this.fullName}`);
// 	}

// 	calcAge() {
// 		console.log("It doesn't matter!");
// 	}
// }

// // const marta = new StudentCL("Marta Jones", 2008, "Engineering");
// // console.log(marta);
// // marta.introduce();
// // marta.calcAge();
// // console.log(marta.__proto__);
// // console.log(marta.__proto__.__proto__);

// //? making a new class but no new parameters
// class StudentCL2 extends PersonCL {}

// // const grace = new StudentCL2("Grace Rasmusson", 2006);
// // console.log(grace);

// //! Inheritance Between "Classes": Object.create ---------------------------------
// //? Student will inherit from Person
// //? Student will have a few specific methods

// const steven = Object.create(PersonProto2);
// //? established the prototype chain
// const StudentProto = Object.create(PersonProto2);
// StudentProto.init = function (firstName, birthYear, course) {
// 	PersonProto2.init.call(this, firstName, birthYear);
// 	this.course = course;
// };
// StudentProto.introduce = function () {
// 	console.log(`My name is ${this.firstName}`);
// };
// const jay = Object.create(StudentProto);
// console.log(jay);
// jay.init("Jay", 2001, "Math");
// jay.introduce();
// jay.calcAge();
