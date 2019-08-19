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


getUp().then(res => {
	console.log(res)
	haveShower().then(res =>{
			console.log(res)
			haveBreakfast().then(res=>{
				console.log(res)
				brushTeeth().then(res=>{
					console.log(res)})
						.catch(e =>console.log(e))
				}).catch(e =>console.log(e))
			}).catch(e =>console.log(e))
	}).catch(e =>console.log(e))
