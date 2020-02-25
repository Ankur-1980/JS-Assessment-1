class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class StudentList {
	constructor() {
		// you need access to the array immediately
		this.list = [];
	}

	addStudent(name, age) {
		// one way of doing this
		// ...this.list will keep everything that exists in the array, then creates a new Student using the Student class
		// this.list = [...this.list, new Student(name, age)];
		// return this.list.length;
		const student = new Student(name, age);
		this.list.push(student);
		return this.list.length;
	}

	getStudent(name) {
		// return this.list.find(studentName => studentName.name === name);
		let findName;
		for (let i of this.list) {
			if (i.name === name) {
				return (findName = i.name);
			}
		}
	}

	removeStudent(name) {
		const student = this.getStudent(name);
		const index = this.list.indexOf(student);
		return this.list.splice(index, 1);
	}

	increaseAge(name) {}
}

// to check your work
// create new instance of Studentlist
// run addSttudent
// console.log it
const student = new StudentList();
student.addStudent('Ankur', 39);
student.addStudent('Clinton', 30);
student.addStudent('Jessica', 27);
student.addStudent('Grace', 42);
student.addStudent('Chelsea', 29);
student.addStudent('Janna', 32);
// console.log(student.getStudent('Jessica'));
console.log(student.removeStudent('Janna'));
