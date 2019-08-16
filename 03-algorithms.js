let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

//20301
let flipString = (s) => {
	return s.split(' ').map(word => {
		return word.split('').reverse().join()
	}).join(' ')
}

//console.log(flipString(phrase))

//20302
let listOfCurrencyPlusValue = (a) => {
	return a.map( string => {
		return {
			currency: string.substring(0,1),
			value: Number(string.slice(1))
		}
	})
}

//console.log(JSON.stringify(listOfCurrencyPlusValue(prices),null,2))

//20303
let palindromes = []
let getPalidromes = (a) => {
	a.forEach( w => {
		let flip = w.split('').reverse().join('')
		if(w == flip)
			palindromes.push(w)
	})
	return palindromes
}

//console.log(getPalidromes(names))

//20304

let numbers = [
	{arabic:1000, roman: "M"}, 	{arabic:900, roman: "CM"}, {arabic:800, roman: "DCCC"}, {arabic:700, roman: "DCC"}, {arabic:600, roman: "DC"}, {arabic:500, roman: "D"},
	{arabic:400, roman: "CD"}, {arabic:100, roman: "C"}, {arabic:90, roman: "XC"}, {arabic:80, roman: "LXXX"}, {arabic:70, roman: "LXX"}, {arabic:60, roman: "LX"},
	{arabic:50, roman: "L"}, {arabic:40, roman: "XL"}, {arabic:10, roman: "X"}, {arabic:9, roman: "IX"},{arabic:8, roman: "VIII"},{arabic:7, roman: "VII"},{arabic:6, roman: "VI"},
	{arabic:5, roman: "V"}, {arabic:4, roman: "IV"}, {arabic:1, roman: "I"},
]
let newArray = []
let count = 0
let finalRomanNum = ""

let intoRomanNum = (a, givenNum) => {
	for(var i=0; i< a.length; i++) {
		while( givenNum >= count + a[i].arabic){
			count += a[i].arabic
			finalRomanNum += a[i].roman
		}
	}
	return finalRomanNum
}

// console.log(intoRomanNum(numbers,27))//XXVII
// console.log(intoRomanNum(numbers,154))//CLIV
// console.log(intoRomanNum(numbers,482))//CDLXXXII
// console.log(intoRomanNum(numbers,340))//CMXXXVIII
// console.log(intoRomanNum(numbers,4562))//MMMMDLXII

//20305

let logFizzbuzz = () => {
	for(var i=0; i<=20; i++){
		if(i % 3 == 0 && i % 5==0)
			console.log("fizzbuzz")
		else if(i % 3 == 0)
			console.log("fizz")
		else if(i % 5 == 0)
			console.log("buzz")
		else
			console.log(i)
	}
}

//console.log(logFizzbuzz())

//20306

let a = (a,b) => {return a + b}

let b = (a, b, c, d) => {
	return a(b,c) - d
}

console.log(b(a , 10, 3, 4))
