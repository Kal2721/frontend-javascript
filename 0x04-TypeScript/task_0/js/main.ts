interface Student {
	firstName: string;
	lastName: string; 
	age: number;
	location: string;
}

const StudentOne: Student = {
	firstName = "Kalkidan",
	lastName = "Teshale",
	age = "24",
	location = "Addis Abeba"
}

const StudentTwo: Student = {
	firstName = "Nuhamin",
	lastName = "Teshale",
	age = "13",
	location = "Addis Abeba"
}

const studentList: Student[] = [StudentOne, StudentTwo];
