class Student {
	private fullName: string;
	public firstName: string;
	public lastName: string;

	public constructor(
		firstName: string,
		middleInitial: string,
		lastName: string,
	) {
		this.fullName = `${firstName} ${middleInitial} ${lastName}`;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

const greeter = (person: Person): string => {
	return "Hello, " + person.firstName + " " + person.lastName;
};

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
