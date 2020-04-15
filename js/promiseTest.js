$(function(){
	const promise1 = new Promise(function(resolve, reject) {
	  setTimeout(resolve('Success!'),5000);
	});
	
	promise1.then(function(value) {
	  console.log(value);	
	});
});