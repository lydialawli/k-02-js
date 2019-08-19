//020601


let getUp = (x) => {
	return new Promise((res, rej) => {
		setTimeout(() => resolve(console.log('awake')), 1000)
		rej('error')
	})
}

let haveShower =  (x) => {
	return new Promise((res, rej) => {
		setTimeout(() => resolve(console.log('showered')), 2000)
		rej('error')
	})
}



getUp().then(res => {
		haveShower().then(res =>{
			}).catch(e =>console.log(e))
	}).catch(e =>console.log(e))
