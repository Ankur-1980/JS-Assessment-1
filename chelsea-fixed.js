/* 1. Create a Computer class
2. Create an Application Class with name property
3. Create methods to modify the applications
a. Add an application
b. delete and application
c. change the name of an application
d. obtain a list of all applications
BONUS: Create a function to obtain a list of all applications
*/
class Computer {
	constructor(name) {
		this.name = name;
		this.list = [];
	}

	//add Application name
	addApplication(name) {
		this.list = [...this.list, new Application(name)];
		return this.list;
	}
	//remove Application name
	removeApplication(name) {
		for (var i = 0; i < this.list; i++) {
			if (this.list[i] === name) {
				return this.list.splice(i, 0);
			}
		}
		return `${name}`;
	}
	//change the name of an Application
	replaceApplication(name) {
		for (var i = 0; i < this.list; i++) {
			if (this.list[i] === name) return this.list.splice(i, 1);
		}
		return `${name}`;
	}

	obtainList() {
		return this.list;
	}
}

class Application {
	constructor(name) {
		this.name = name;
	}
}

const myComp = new Computer();
console.log(myComp.addApplication('Word'));
console.log(myComp.addApplication('Excel'));
console.log(myComp.addApplication('Powerpoint'));
console.log(myComp.addApplication('Slides'));
console.log(myComp.addApplication('Access'));
console.log(myComp.removeApplication('Slides'));
// console.log(myComp.replaceApplication('Animal'));

console.log(myComp.obtainList());
// function applicationList(name); {
//     for (var i = 0; i < this.name; i++) {
//         console.log(`${applicationName}`);
//             }
//         }
//     }
// application();
