class Computer {
	constructor(name) {
		this.name = name;
		this.appList = [];
	}

	addApp(app) {
		this.appList.push(new Application(app));
		return `You added ${app}`;
	}

	deleteApp(app) {
		const getApp = this.appList.find(x => x.name === app);
		const index = this.appList.indexOf(getApp);
		console.log(`You deleted`);
		return this.appList.splice(index, 1);
	}
	// this broke somehow :(
	changeName(oldName, newName) {
		const getApp = this.appList.find(x => x.name === oldName);
		console.log(getApp);
		const index = this.appList.indexOf(getApp);
		console.log(index);
		return (this.appList[index].name = newName);
	}

	getAppList() {
		return this.appList;
	}

	// works if the app in on the computer
	// breaks if the app is NOT on the computer
	findApp(app) {
		const getApp = this.appList.find(x => x.name === app);
		if (getApp.name === app) {
			return `${app} is on this computer`;
		} else return `${app} is not on this computer`;
	}
}

class Application {
	constructor(name) {
		this.name = name;
	}

	findOnComputer(compName, appName) {
		return compName.findApp(appName);
	}

	whatApps(compName) {
		return compName.getAppList();
	}
}

const myComp = new Computer();
console.log(myComp.addApp('Angry Birds'));
console.log(myComp.addApp('Words with Friends'));
console.log(myComp.addApp('Farmville'));
console.log(myComp.addApp('Candy Crush'));
// console.log(myComp.deleteApp('Farmville'));
console.log(myComp.changeName('Candy Crush', 'This Game Sucks'));
console.log(myComp.getAppList());

// const finder = new Application();
// // console.log(finder.findOnComputer(myComp, 'Angry Birds'));
// console.log(finder.whatApps(myComp));
