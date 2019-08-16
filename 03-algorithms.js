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

console.log(JSON.stringify(listOfCurrencyPlusValue(prices),null,2))
