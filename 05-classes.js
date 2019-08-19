//020501

let Car = class {
	constructor(make, model, color){
		this.make = make
		this.model = model
		this.color = color
	}
}

let newCar = new Car('something', 'Range Rover', 'black')

//console.log(newCar)

//020502
let names = ['Alice', 'Bernard', 'Catherine', 'David']
let jobs = ['Accountant', 'Biz Manager', 'Cleaner', 'Director']

let Employee = class {
	constructor(name, job){
		this.name = name
		this.job = job
	}
}

let makeEmployee = (a1,a2) =>{
		return a1.map( (e,i) => {
			return new Employee(e,a2[i])
		})

}

console.log(makeEmployee(names,jobs))
