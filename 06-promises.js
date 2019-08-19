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

Promise.all([makeCoffee(), makeEggs(),makeToast(), makeBacon()])
.then(res => console.log('Breakfast is ready: ',res))
.catch(err => console.log(err))
