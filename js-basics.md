https://www.tutorialrepublic.com/javascript-reference/javascript-array-object.php


## 3 ways to console.log strings
```javascript
let name = 'Ly'
let surname = 'Law'

console.log(name+ ' ' +surname)
```

or

` console.log(name.concat(surname))`

or

``` javascript
console.log(`${name} ${surname}`)
```


## how to keep " ' " a character
```
let who = 'Tony\'s'
console.log(who)
//Tony's
```

## loops

```javascript
let array = [1,3,5,7]
array.forEach(n => {
	console.log(n)
})
```
does not return an array, just executes function on each n

```javascript
array.map( n => {
	return `$${n}`
})
//[$1,$3,$5,$7]
```

## filter
Creates a new array with all elements that pass the test in a testing function.
```javascript
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
```javascript
let first120 = places.find (p=>{
	return p.price = 120
})
console.log(first120)
//{location:'Samui',price: 120}
```

## reduce
Reduce the values of an array to a single value (from left-to-right)
```javascript
let numbers = [1,3,5,7]
let sum = numbers.reduce((c,i)=>{
	return c-i
})
console.log('sum: ',sum)

```

## shift
(remove first character of array)

```javascript
let array = [1,2,3]
let newArray = array.shift()
console.log(newArray)
//[2,3]
```

## toFixed

```javascript
let price = 100.687
console.log(price.toFixed(2)) //100.69
```

## string
converts into string

` console.log(String(price)) `

## number
converts into number

```javascript
let price = '100'
console.log(Number(price))
//100
```

## Split
```javascript
let greeting = 'Hello world'
let splitted = greeting.split('')

console.log(splitted)
//['H','e','l','l','o','w','o','r','l','d']

console.log( greeting.split(' ') )
//['Hello','world']
```

## join
(to join elements from an array)

```javascript
let join = splitted.join('')
//Helloworld
```

## include
(determines if array/string has certain element, returns boolean)


## sort
Sorts the elements of an array.

```javascript
let numbers = [1, 90, 2, 10, 11, 100, 5 ]
console.log(numbers.sort)
// [1, 10, 11, 100, 2, 5, 90]
it sorts from first character of the array

console.log(numbers.sort( (a,b) => a - b))
//[1, 2, 5, 10, 11, 90, 100]
```

## reverse
Reverses the order of the elements in an array.
```javascript
let fruits = ['a', 'b', 'c']
console.log(fruits.reverse())
```

## while

```
let a =1
while (a>3){
	console.log('Hello)
	a ++}
//Hello, Hello, Hello
```

## do while
```JavaScript
var text =''
var i = 0
do(blabla)
while (something is true)
```

## for in loop
similar to forEach but for objects

```javascript
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


```javascript
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

**setTimeout(function,time(in ms))**
ex.setting alarm clock...
```javascript
let add = (a, b) => a + b

setTimeout(add(),3000)
```

```javascript
setTimeout(() => { console.log('Hello')}, 2 * 60 * 1000)
```

//will log "Hello" after 2 seconds

**setInterval()**
repeats a given function at every given time-interval.

**clearInterval**
to stop execution in setInterval()

## Classes

- JS class is a blueprint to manufacture objects. Technically a function.
- **declared** with **class** keyword

### Syntax
- **Syntax** is like :
`class Car {}`
usually starts with uppercase.

### Constructor
- first thing to add is **constructor**
Properites within the class are defined through the parameters passed into the `constructor`, assigned to the instance of class `this.` (refers to the class itself)

```javascript
class Car {
	constructor(brand,color){
		this.brand = brand
		this.wheels = 4
		this.color = color
		radio = true
	}
}
```

### Factory
- A class can be used as a sort of "factory" to generate new objects based on its structure.

`let myCar = new Car('Ferrari', 'black')`

end up with
```javascript
{
	brand: 'Ferrari',
	wheels: 4
	color = 'black'
	radio = true
}
```

### Extend
classes can generate other classes, using keyword **extend**
```javascript
class Bus extends Car {
	constructor(brand, seats){
		super(brand)
		this.seats = seats
	}
}

myBus = new Bus('Toyota', 10)
```


- **super** is shortcut to not repeat the properties of a parent class .
ie. if the parent class has 4 wheels, instead of repeating in the new class `this.brand=brand, this.wheels = 4...` those properties that are
universal to all the childrens within the same class, don't need to be rewritten, only use `super` instead.

another example:
```javascript
let Truck = extends Car {
	constructor(wheels, color){
		super(wheels, color)
		this.honkPower = 90
	}
}

let myTruck = new Truck(12, 'red')

//{
	brand: 'Ferrari',
	wheels: 12,
	color = 'black',
	radio = true,
	honkPower = 90
}
```

### Methods
A class can also have nested methods. Function inside a class is called **method**. This is why is called **object-oriented programming**.
```javascript
class Car{
	constructor{}
	paint(color){
		this.color = color
	}
}

myCar.paint('blue')
```

## Callbacks
Function that executes after another function has finished. Declared within a function.

## Async

**Sync** events that happen in sequence /at the same time
**Async** events happening independently (out of sync)

## Promise
It's a class. Inside there is a function. Taking 2 parameters.
Result and reject.
```javascript
new Promise((res, rej) => {
	res('success')
	rej('error')
	})

```

### Nesting
```javascript
fryEggs().then(res => {
		eatEggs().then(res =>{
			brushTeeth().then(res =>{
				//do whatever
				}).catch(e =>console.log(e))
			}).catch(e =>console.log(e))
	}).catch(e =>console.log(e))
```

### Promise.all()
Use it when everything is ready.
Syntax is:
```javascript
let a = new Promise //...
let b = new Promise //...

Promise.all([a, b]).then(responses => /*...*/).catch(/*...*/)
```
- takes an **array of promises** as a parameter
- returns all the promises at the same time as a new **array of results**

```javascript

let cookBacon = (pan, time) => {
	return new Promise((resolve, reject) => {
		if (pan) {
			setTimeout(() => {
				resolve('Bacon is ready!')
			}, time * 1000)
		} else {
			reject('Please provide pan')
		}
	})
}

let makeCoffee = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Coffee is ready!')
		}, time * 1000)
	})
}


// Waits for bacon to be ready to start the coffee
cookBacon('pan', 4).then(res => {
	console.log(res)
	makeCoffee(2)
	.then(res => console.log(res))
})
.catch(err => console.log(err))

//Returns the result when everything is ready
Promise.all([cookBacon('pan', 4), makeCoffee(2)])
.then(res => console.log(res))

//Returns the result of the first one to be ready
Promise.race([cookBacon('pan', 4), makeCoffee(2)])
.then(res => console.log(res))


cookBacon( pan, 4 )
.then(res => console.log(res))
.catch(err => {console.log(err)})

```

### Promise.race()
Similar to promise.all but instead of waiting all the promises to execute, it returns the answer of the first promise that finishes first.
The rest stops executing.
