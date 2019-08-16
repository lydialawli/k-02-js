https://www.tutorialrepublic.com/javascript-reference/javascript-array-object.php


## 3 ways to console.log strings
```
let name = 'Ly'
let surname = 'Law'

console.log(name+ ' ' +surname)
```

or

` console.log(name.concat(surname))`

or

`` console.log(`${name} ${surname}`) ``


## how to keep " ' " a character
```
let who = 'Tony\'s'
console.log(who)
//Tony's
```

## loops

```
let array = [1,3,5,7]
array.forEach(n => {
	console.log(n)
})
```
does not return an array, just executes function on each n

```
array.map( n => {
	return `$${n}`
})
//[$1,$3,$5,$7]
```

## filter
Creates a new array with all elements that pass the test in a testing function.
```
let places = [
{location:'Paris', price: 120},
{location:'Samui',price: 120},
{location:'Samui',price:150}
]

let samui = places.filter(p =>{
	return p.location = 'Samui' && p.price ==150
})

if(samui.length ==0){
	console.log(samui) //['Samui', 'Samui']
}
else {
	console.log("sorry dude")
}
```

## find
Returns the value of the first element in an array that pass the test in a testing function.
```
let first120 = places.find (p=>{
	return p.price = 120
})
console.log(first120)
//{location:'Samui',price: 120}
```

## reduce
Reduce the values of an array to a single value (from left-to-right)
```
let numbers = [1,3,5,7]
let sum = numbers.reduce((c,i)=>{
	return c-i
})
console.log('sum: ',sum)

```

## shift
(remove first character of array)

```
let array = [1,2,3]
let newArray = array.shift()
console.log(newArray)
//[2,3]
```

## toFixed

```
let price = 100.687
console.log(price.toFixed(2)) //100.69
```

## string
converts into string

` console.log(String(price)) `

## number
converts into number

```
let price = '100'
console.log(Number(price))
//100
```

## Split
```
let greeting = 'Hello world'
let splitted = greeting.split('')

console.log(splitted)
//['H','e','l','l','o','w','o','r','l','d']

console.log( greeting.split(' ') )
//['Hello','world']
```

## join
(to join elements from an array)

```
let join = splitted.join('')
//Helloworld
```

## include
(determines if array/string has certain element, returns boolean)


## sort
Sorts the elements of an array.

```
let numbers = [1, 90, 2, 10, 11, 100, 5 ]
console.log(numbers.sort)
// [1, 10, 11, 100, 2, 5, 90]
it sorts from first character of the array

console.log(numbers.sort( (a,b) => a - b))
//[1, 2, 5, 10, 11, 90, 100]
```

## reverse
Reverses the order of the elements in an array.
```
let fruits = ['a', 'b', 'c']
console.log(fruits.reverse())
```

## while
```
let a =1
while (a>3){
	console.log('Hello)
	a ++
}
//Hello, Hello, Hello
```

## for in loop
similar to forEach but for objects

```
let user = {
	a: 1,
	b: 2,
	c: 3
}
for ( e in user){
	console.log(e)
	console.log(user[e])
}
//a:1, b:2, c:3
```

## Ternary operators
to shorten if statement

https://guide.freecodecamp.org/c/ternary-operator/


```
if (a==1){
	return 'a'
}else{
	return 'b'
}
```
same as

` a == 1 ? 'a' : 'b'  `

if 1 is true, do 'a', otherwise do 'b'

## Math
- power of
` Math.pow(2,3) `
//8

- square root
` Math.sqrt(9) `
//3

- random
` Math.random().10 `
random number from 0 to 10
ex. 1, 2, 0.615...


## Time

**setTimout(function,time(in ms))**
ex.setting alarm clock...
```
let add = (a, b) => a + b

setTimeout(add(),3000)
```

```
setTimeout(() => { console.log('Hello')}, 2 * 60 * 1000)
```
//will log "Hello" after 2 seconds

**setInterval()
