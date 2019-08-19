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

//fight(Ly)

//020504

let name = ['apples', 'bananas', 'bread', 'cookies', 'broccoli', 'onions']
let prices = [20, 12, 24, 53, 32, 15]
let discounts = [0, 0, 10, 25, 0, 5]

let Product = class {
	constructor( name, price){
		this.name = name
		this.price = price
	}
	applyDiscount(discount){
		this.price = this.price - (this.price * discount/100)
	}
}

let Receipt = class {
	constructor(products){
		this.Receipt = products
		this.Total = 0
	}
	calcTotal(products){
		let total = 0
	 	products.Receipt.forEach( p => {
			total += p.price
		})
		this.Total = total
	}
	logNicely(products){
		let prod = products.Receipt.map( e => {
			switch (e.name.length){
				case 5:
					return `| ${e.name	} ${' '} ${' | '} $${e.price.toFixed(2)} |`
					break
				case 6:
					return `| ${e.name	} ${' '} ${'| '} $${e.price.toFixed(2)} |`
					break
				case 7:
					return `| ${e.name	} ${''} ${'| '} $${e.price.toFixed(2)} |`
					break
				case 8:
					return `| ${e.name	} ${'| '} $${e.price.toFixed(2)} |`
			}
		})
		 prod.push('----------------------')
		 prod.unshift('----------------------')
		 prod.push(`| Total   ${' |'} $${products.Total.toFixed(2)} |`)
		 prod.push('----------------------')

		 let receipt = JSON.stringify(prod, null, 2)
		 return receipt.replace(/"/g,'').replace(/,/g,'')

	}
}



let getReceipt = (n, p, d) =>{
		return n.map( (e,i) => {
			let product = new Product(e, p[i])
			product.applyDiscount(d[i])
			return product
		})
}

let receipt = new Receipt(getReceipt(name, prices, discounts))
receipt.calcTotal(receipt)
let formatedReceipt = receipt.logNicely(receipt)

console.log(formatedReceipt)
