"use strict";

console.log("------------------------------------------------------------");
console.log("CODING CHALLENGE 4");
console.log("------------------------------------------------------------");

class CarCl {
	constructor(make, speed) {
		this.make = make;
		this.speed = speed;
	}

	accelerate() {
		this.speed += 10;
		console.log(`${this.make} is now going ${this.speed}`);
	}
	brake() {
		this.speed -= 5;
		console.log(`${this.make} is slowing to ${this.speed}`);
		return this;
	}

	get speedUS() {
		return this.speed / 1.6;
	}
}

class EVCl extends CarCl {
	#charge;
	constructor(make, speed, charge) {
		super(make, speed); // sets these values for us
		this.#charge = charge;
	}
	get charge() {
		return `${this.#charge}%`;
	}
	accelerate() {
		this.speed += 20;
		this.#charge--;
		console.log(`${this.make} going at ${this.speed}, with a charge of ${this.#charge}%`);
		return this;
	}
	//? API to be able to affect the charge how we want it to be affected
	chargeBattery(chargeTo) {
		this.#charge = chargeTo;
		return this;
	}
	currentInfo() {
		console.log(`${this.make} currently at ${this.speed}, with a charge of ${this.#charge}%`);
		return this;
	}
}

const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian.charge);
rivian.accelerate().chargeBattery(75).brake().brake();
rivian.currentInfo();
console.log(rivian.speedUS); // calling method from parent
