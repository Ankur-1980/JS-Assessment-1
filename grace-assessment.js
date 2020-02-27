// constructor instantiates the object
// it gives us immediate access to whatever is inside the contructor

// construct a class Student with two properties
class Student {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}
// construct a class StudentList with one property and 4 methods
class StudentList {
	constructor() {
		this.list = [];
	}
	addStudent(name, age) {
		this.list.push(new Student(name, age));
		return this.list.length;
	}
	getStudent(name) {
		for (let i of this.list) {
			if (i.name === name) {
				return i.name;
			}
		}
	}
	removeStudent(name) {
		// const student = this.getStudent(name);
		const student = this.getStudent(name);
		const index = this.list.indexOf(student);
		return this.list.splice(index, 1);
	}
	increaseAge(name) {
		for (let i of this.list) {
			if (i.name === name) {
				i.age = i.age + 1;
				return i.age;
			}
		}
	}
}

const newList = new StudentList();
console.log(newList.addStudent('Ankur', 39));
console.log(newList.addStudent('Cassly', 33));
console.log(newList.addStudent('Chelsea', 29));
console.log(newList.addStudent('Mike', 38));
console.log(newList.getStudent('Chelsea'));
// console.log(newList.removeStudent('Mike'));
// console.log(newList.increaseAge('Ankur'));
console.log(newList.list);

// function studentlist() {
// 	// create instance of StudentList called myStudents
// 	var myStudents = new StudentList();
// 	// addStudent should return the length of array
// 	console.log(`Array count after adding student: ${myStudents.addStudent('Ankur', 25)}`);
// 	console.log(`Array count after adding student: ${myStudents.addStudent('Janna', 22)}`);
// 	console.log(`Array count after adding student: ${myStudents.addStudent('Chelsea', 23)}`);
// 	console.log(`Array count after adding student: ${myStudents.addStudent('Grace', 28)}`);
// 	// Display objects in array
// 	console.log('\nObjects in the array: ');
// 	for (var i = 0; i < myStudents.list.length; i++) console.log(myStudents.list[i]);
// 	// getStudent should return the student
// 	let studentToGet = myStudents.getStudent('Ankur');
// 	console.log(`\nRetrieved student: Name: ${studentToGet.name}, Age: ${studentToGet.age}`);
// 	// increaseAge should increase age and return new age
// 	let student1 = myStudents.getStudent('Janna');
// 	console.log(
// 		`\nAge for ${student1.name} is ${student1.age}.  New age is now ${myStudents.increaseAge(student1.name)}`
// 	);
// 	// another example of increaseAge
// 	let student2 = 'Chelsea';
// 	console.log(`\nNew age for ${student2}: ${myStudents.increaseAge(student2)}`);
// 	// Show first name in array
// 	let firstStudentName = myStudents.list[0].name;
// 	console.log(`\nFirst student is: ${firstStudentName}`);
// 	// removeStudent should return the student that was removed
// 	let removedStudent = myStudents.removeStudent(firstStudentName);
// 	console.log(`The removed student was:  ${removedStudent.name}`);
// 	// Show first name in array after removing the first student
// 	console.log(`First student after removing ${removedStudent.name} is now ${myStudents.list[0].name}`);
// 	// Display objects in array again
// 	console.log('\nObjects in the array: ');
// 	for (var i = 0; i < myStudents.list.length; i++) console.log(myStudents.list[i]);
// }
// studentlist();
