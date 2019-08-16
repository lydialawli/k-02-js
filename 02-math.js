let products = [
	{name:'bread',price:3.5},
	{name:'orange',price:1.3},
	{name:'gum',price:2.8}]

//20201
let roundNum = (n) => {
	return Math.round(n)
}

//console.log(roundNum(1232.58))

//20202
let roundPrices = (p) => {
	return p.map( i => {
		return {
			name: i.name,
			price: roundNum(i.price)
		}
	})
}

//console.log(roundPrices(products))

//20203
let roundNumWthGivenDecimals = (n, d) => {
	let decimals = Math.pow(10,d)
	return Math.round(n * decimals)/decimals
}

//console.log(roundNumWthGivenDecimals(1324.5436 , 3))

//20203 another way
let roundingToXdecimals = (n ,d) => {
	return Number(n.toFixed(d))
}

//console.log(roundingToXdecimals(1324.5436 , 3))

//20204
let power = (n , p) => {
	return Math.pow(n,p)
}

//console.log(power(4,4))

//20205
let randomize = (min, max) => {
	return Math.random()*(max-min) + min
}

//console.log(randomize(1,10))

//20206
let randomizeMaxOfX = (x) => {
	return randomize(1,x)
}

console.log(randomizeMaxOfX(20))
