interface Teacher {
	readonly firstName: string; 
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	 numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}


function printTeacher(teach: Teacher): string {
	const firstLetterofName = teach.firstName.charAt(0);
	return firstLetterofName + "." + teach.lastName;
}

interface StudentInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

interface StudentConstractor {
	new (firstName: string, lastName: string): StudentInterface;
}

class StudentClass implements StudentInterface {
	firstName: string;
        lastName: string;

	constractor (firstName: string, lastName: string){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}

