class Car {
	// properties the car starts with
	constructor(fuelLevel) {
		this.speed = 0;
		this.engineOn = false;
		this.fuelLevel = fuelLevel || 100;
	}

	// methods
	accelerate() {
		if (this.fuelLevel >= 1) {
			this.fuelLevel = this.fuelLevel - 1;
			this.speed = this.speed + 1;
		}
		if (this.fuelLevel < 1) {
			this.fuelLevel = 0;
			this.speed = 0;
			this.engineOn = false;
			return `You are out of gas`;
		}
		return `${this.fuelLevel}, ${this.speed}`;
	}

	brake() {
		this.speed = this.speed - 1;

		if (this.speed === 0) {
			this.engineOn === false;
			return `The car has come to a complete stop`;
		}

		if (this.speed < 0) {
			this.speed = 0;
			return `The car is already not moving`;
		}
		return this.speed;
	}

	turnCarOn() {
		this.engineOn = true;
		return `Hello Michael....`;
	}

	turnCarOff() {
		this.engineOn = false;
		return `....Goodnight Michael`;
	}
}

const myCar = new Car(60);
console.log(myCar);
console.log(myCar.turnCarOn());
console.log(myCar.accelerate());
console.log(myCar.accelerate());
console.log(myCar.brake());
console.log(myCar.brake());
console.log(myCar.brake());
console.log(myCar.turnCarOff());
