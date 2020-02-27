class Computer {
	constructor(name) {
		this.name = name;
		this.list = [];
	}
	//add Application name
	addApplication(name) {
		this.list = [...this.list, new Application(name)];
	}
	//remove Application name
	removeApplication(name) {
		for (var i = 0; i < this.list; i++) {
			if (this.name[i] === name) return this.list.splice(i, 0);
		}
	}
	//change the name of an Application
	replaceApplication(name) {
		for (var i = 0; i < this.name; i++) {
			if (this.name[i] === name) return this.list.splice(i, 1);
		}
	}
	obtainList(name) {
		console.log(`${Application.obtainList}`);
		return this.list;
	}
}
class Application {
	constructor(name) {
		this.name = name;
	}
}
