var asyncAdd = (a,b) => {
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(typeof a === 'number' && typeof b === 'number'){
				resolve(a + b);
			}else{
				reject('Arguments must be numbers')
			}
		},1500);
	});
}

asyncAdd(5,3).then((res)=>{
	console.log('Results : '+res);
	return asyncAdd(res,3);
}).then((res)=>{
	console.log('Should be ',res)
}).catch((errorMessage)=>{
	console.log(errorMessage);
});

// var somePromise = new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		// resolve('hey it worked !!');
// 		reject('Unable to fullfil promise');
// 	},2500)
	
// });

// somePromise.then((message)=>{
// 	console.log('Success : ',message);
// },(errorMessage)=>{
// 	console.log('Error : ',errorMessage);
// });