"use strict";

console.log('------------------------------------------------------------');
console.log('CODING CHALLENGE 3');
console.log('------------------------------------------------------------');


const Car = function(make, speed) {
	this.make = make;
	this.speed = speed;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} has sped up to ${this.speed}`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is slowing to ${this.speed}`);
}

const bmw = new Car('BMW', 120);
console.log(bmw);
bmw.accelerate();
bmw.brake();

const mercedes = new Car('Mercedes', 95);
console.log(mercedes);
mercedes.accelerate();
mercedes.brake();

const EV = function(make, speed, charge) {
	//? inheriting Car
	Car.call(this, make, speed); // call helps us assign the "this" to be referenced
	this.charge = charge;
}

//? in the end we want to create a connection manually so Car is the prototype of EV
//? must be done before EV.prototype
EV.prototype = Object.create(Car.prototype); // returns an empty object

EV.prototype.chargeBattery = function(chargeTo) {
	// console.log(`My name is ${this.make}`);
    this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge --;
    console.log(`${this.make} going at ${this.speed}, with a charge of ${this.charge}%`);
}

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(90);
tesla.brake();

console.log(tesla.__proto__); // 
console.log(tesla.__proto__.__proto__);

console.log(tesla instanceof EV);
console.log(tesla instanceof Car);
console.log(tesla instanceof Object);

EV.prototype.constructor = EV;
console.dir(EV.prototype.constructor);