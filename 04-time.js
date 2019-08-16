// //20401
// let a = () => console.log('Hello')
//
// let b = (lala,t) => {
// 	setTimeout(lala(), t*1000)
// }
//
// console.log(b(a,5))
//
// //(a, 3) // should log 'Hello' after 3 seconds
// //(a, 5) // should log 'Hello' after 5 seconds


//20402

let i= 1

let logHello = setInterval(()=>{
		console.log('Hello '+ i)
		i += 1

		if(i == 6) {
			clearInterval(logHello)
		}
	}, 1000)
