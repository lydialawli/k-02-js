let numbers = [1, 90, 78, 3, 22, 187, 21]
let students = [{name:'Albert'},{name:'Bob'},{name:'Claudia'}]
let mix = [5, 'David', {name:'Ella'}, 23, 'Frank']

// 20101
// let logNumbers = (num) =>{
// 	num.forEach(n =>{
// 		console.log(n)
// 	})
// }
//
// logNumbers(numbers)

//20102
// let logStudents = (st) => {
// 	st.forEach(s => {
// 		console.log(s.name)
// 	})
// }
//
// logStudents(students)

//20103

// let add1ToArrayElements = (a) =>{
// 	return a.map(n => n + 1)
// }
//
// console.log(add1ToArrayElements(numbers))

//20104
// let getNames = (a) => {
// 	return a.map(s => s.name)
// }
//
// console.log(getNames(students))

//20105
// let greaterThan22 = (a) => {
// 	return a.filter(n => { return n >=22})
// }
//
// console.log(greaterThan22(numbers))

//20106
// let greaterThan22 = (a, givenNum) => {
// 	return a.filter(n => { return n > givenNum})
// }
//
// console.log(greaterThan22(numbers, 70))

//20107
// let student6letters = (a) => {
// 	return a.filter(s => { return s.name.length > 6})
// }
//
// console.log(student6letters(students))

//20108
// let returnArrayOfStrings = (a) => {
// 	return a.filter(m => {
// 		if(typeof m == "string")
// 			return m
// 	})
// }
//
// console.log(returnArrayOfStrings(mix))

//20109
// let firstGreaterThan100 = (a) => {
// 	return a.find(n => { return n>100})
// }
//
// console.log(firstGreaterThan100(numbers))

//20110
// let findStudent = (a, name) => {
// 	return a.find(s => { return s.name == name})
// }
//
// console.log(findStudent(students, 'Bob'))

//20111
// let summit = (a) => {
// 	a.reduce( (t,n) => {
// 		return t + n
// 	})
// }
// console.log( summit(numbers) )
