class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		this.fullname = firstname + " "+ lastname
		this.email = (firstname+"."+lastname+"@company.com").toLowerCase()
		// Complete the code!
	}
}
const harald = new Employee("Hardald", "Schönhaar")
console.log(harald.fullname,harald.email)