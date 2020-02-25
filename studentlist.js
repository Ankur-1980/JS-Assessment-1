class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class StudentList {
	constructor() {}
	list = [];
	// add student
	addStudent(name, age) {
		new Student(name, age);
		this.list.push(Student);
		return list.length;
	}
	// find student
	getStudent(name) {
		names = this.list.find(function(x) {
			return (x = name);
		});
		return name;
	}

	// remove a student
	removeStudent(name) {
		for (names of list) {
			if (list[names] === name) {
				this.list.splice(names, 1);
				name--;
			}
			return name;
		}
	}
	// increase age of student
	increaseAge(name) {
		ageIncrease = this.list.find(function(name) {
			return x.age + 1;
		});
		return ageIncrease;
	}
}

const myStudents = new StudentList();

const ankur = new Student('Ankur', 39);
