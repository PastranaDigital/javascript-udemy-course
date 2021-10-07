"use strict";

console.log('------------------------------------------------------------');
console.log('CODING CHALLENGE 1');
console.log('------------------------------------------------------------');

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