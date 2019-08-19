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

//console.log(makeEmployee(names,jobs))

//020503
let belts = ['white', 'yellow', 'orange', 'green', 'blue', 'brown', 'black']

let Karateka = class {
	constructor( name, belts){
		this.name = name
		this.belt = belts[0]
	}
	increaseRank(belt){
		this.belt = belts[belt]
	}
}

let Ly = new Karateka("Ly", belts)

let i= 1
let b = 1

let fight = (fighter) => {setInterval(()=> {
		let score = Math.floor(Math.random() * Math.floor(10))
		console.log('score: '+ score)

		if(score>8) {
			fighter.increaseRank(b)
			b += 1
		}
		console.log(fighter)

		i += 1

		if(i == 20	) {
			clearInterval(fight)
		}
	}, 1000)}

fight(Ly)

//020504

// let names = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
// let prices = [20, 12, 24, 53, 32, 15]
// let discounts = [0, 0, 10, 25, 0, 5]
//
// let Product = class{
// 	constructor( name, price){
// 		this.name = name
// 		this.price = price
// 	}
// 	applyDiscount(discout){}
// }
