"use strict";

console.log('------------------------------------------------------------');
console.log('CODING CHALLENGE 2');
console.log('------------------------------------------------------------');

/*
const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

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
*/

class CarCl {
	constructor(make, speed) {
        this.make = make;
        this.speed = speed;
	}

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} has sped up to ${this.speed}`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is slowing to ${this.speed}`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(s) {
        return s * 1.6;
    }
}

const bmw = new CarCl('BMW', 120);
console.log(bmw);
bmw.accelerate();
bmw.brake();
console.log(bmw.speedUS);
bmw.speedUS = 100;
console.log(bmw);

const mercedes = new CarCl('Mercedes', 95);
console.log(mercedes);
mercedes.accelerate();
mercedes.brake();
console.log(mercedes.speedUS);
mercedes.speedUS = 50;
console.log(mercedes);