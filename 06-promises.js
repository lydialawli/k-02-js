//020601

let brushTeeth =  () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('ready')},1000)
	})
}

let getUp = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('awake')}, 1000)
	})
}

let haveBreakfast =  () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('eaten')}, 2000)
	})
}

let haveShower =  () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('showered')}, 2000)
	})
}


// getUp().then(res => {
// 	console.log(res)
// 	haveShower().then(res =>{
// 			console.log(res)
// 			haveBreakfast().then(res=>{
// 				console.log(res)
// 				brushTeeth().then(res=>{
// 					console.log(res)})
// 						.catch(e =>console.log(e))
// 				}).catch(e =>console.log(e))
// 			}).catch(e =>console.log(e))
// 	}).catch(e =>console.log(e))

//020602
let makeCoffee = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('coffee')}, 10000)
	})
}

let makeEggs = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('eggs')}, 5000)
	})
}

let makeToast = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('toast')}, 6000)
	})
}

let makeBacon = () => {
	return new Promise((res, rej) => {
		setTimeout(() => {res('bacon')}, 8000)
	})
}

// Promise.all([makeCoffee(), makeEggs(),makeToast(), makeBacon()])
// .then(res => console.log('Breakfast is ready: ',res))
// .catch(err => console.log(err))

//020603
let horse1 = () => {
	return new Promise((res, rej) => {
		let random = Math.floor(Math.random() * Math.floor(4))
		setTimeout(() => {res('Speedy')}, random*1000)
	})
}

let horse2 = () => {
	return new Promise((res, rej) => {
		let random = Math.floor(Math.random() * Math.floor(4))
		setTimeout(() => {res('Jackpot')}, random*1000)
	})
}

let horse3 = () => {
	return new Promise((res, rej) => {
		let random = Math.floor(Math.random() * Math.floor(4))
		setTimeout(() => {res('Red')}, random*1000)
	})
}

Promise.race([horse1(), horse2(),horse3()])
.then(res => console.log(`The winner is ${res}!`))
.catch(err => console.log(err))
