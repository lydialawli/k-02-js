let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

// 20101
let logNumbers = (num) =>{
	num.forEach(n =>{
		console.log(n)
	})
}

// logNumbers(numbers)

//20102
let logStudents = (st) => {
	st.forEach(s => {
		console.log(s.name)
	})
}

// logStudents(students)

//20103

let add1ToArrayElements = (a) =>{
	return a.map(n => n + 1)
}

// console.log(add1ToArrayElements(numbers))

//20104
let getNames = (a) => {
	return a.map(s => s.name)
}

// console.log(getNames(students))

//20105
let greaterThan22 = (a) => {
	return a.filter(n => { return n >=22})
}

// console.log(greaterThan22(numbers))

//20106
let greaterthan22 = (a, givenNum) => {
	return a.filter(n => { return n > givenNum})
}

// console.log(greaterthan22(numbers, 70))

//20107
let student6letters = (a) => {
	return a.filter(s => { return s.name.length > 6})
}

// console.log(student6letters(students))

//20108
let returnArrayOfStrings = (a) => {
	return a.filter(m => {
		if(typeof m == "string")
			return m
	})
}

// console.log(returnArrayOfStrings(mix))

//20109
let firstGreaterThan100 = (a) => {
	return a.find(n => { return n>100})
}

// console.log(firstGreaterThan100(numbers))

//20110
let findStudent = (a, name) => {
	return a.find(s => { return s.name == name})
}

// console.log(findStudent(students, 'Bob'))

//20111
let sum = (a) => {
	a.reduce( (t,n) => {
		return t - n
	})
}
// console.log(sum(numbers))

//20112
let sumAll= (a) => {
	let x = 0
	for(var i=0; i<a.length; i++){
		x += a[i]
	}
	return x
}

// console.log(sumAll(numbers))

//20113
let differences = (a) => {
	a.reduce( (t,n) => {
		return t - n
	})
}
// console.log(differences(numbers))

//20114
let findProduct = (a) => {
	a.reduce( (t,i) => {
		return t * i
	})
}

// console.log(findProduct(numbers))

//20115
let sortArrayDescending = (arr) => {
	return arr.sort((a,b) => a - b ).reverse()
}

// console.log(sortArrayDescending(numbers))

//20116
let sortedNamesLength = (arr) => {
	return arr.sort((a,b) => a.name.length > b.name.length )
}

// console.log(sortedNamesLength(students))

//20118
let combineTwoArrays = (arr1, arr2) => {
	for( var i=0; i<arr1.length && i<arr2.length; i++) {
			arr2[i].age = arr1[i]
	}
	return arr2
}

//another way
let addAge = (a1, a2) => {
	return a2.map( (s,i) => {
		return {
			name: s.name,
			age: a1[i]
		}
	})
}

 //console.log(addAge(numbers,students))

//20119
let missing6 = [1, 2, 3, 4, 5, 7, 8, 9, 10]

let detectMissingNum = (a) => {
	for(var i=0; i<a.length; i++) {
 		if(a[i]!= i+1)
			return i+1
 	}
}
//  console.log(detectMissingNum(missing6))

//20120
let denom = [10, 5, 1, 0.5, 0.2, 0.1, 0.05, 0.01]
let newArray = []
let count = 0

let giveChange = (a, n) => {
	for(var i=0; i<a.length; i++) {
		while(n>count+a[i]){
			count += a[i]
			newArray.push(a[i])
		}
	}
	return newArray
}

console.log(giveChange(denom, 27.58))
