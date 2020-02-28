class Toy {
	constructor(name, color, weight) {
		this.name = name;
		this.color = color;
        this.weight = weight;
        this.age = 0
		this.list = [];
	}

    newPuppy()
    
    changeColor(newColor) {
		this.color = newColor;
		return this.color;
	}

	gainWeight(ounces) {
		return (this.weight = this.weight + ounces);
	}

	feed(quantity, weight) {
		amount = quantity * weight;
	}

	wearTear(months) {}
}
const poundPuppy = new Toy();
