let phrase = 'JavaScript is the best'
let prices = ['$22', '€99', '$75', '£80', '€43', '$22']
let names = ['anna', 'john', 'bob', 'frank']

//20301
let flipString = (s) => {
	return s.split(' ').map(word => {
		return word.split('').reverse().join()
	}).join(' ')
}

console.log(flipString(phrase))
