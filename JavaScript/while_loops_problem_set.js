console.log("Print all numbers between -10 and 19")
var count = -10
while(count <= 19) {
	console.log(count)
	count++;
}

console.log("Print all even numbers between 10 and 40")
var count = 10 
while(count <= 40) {
	if(count % 2 === 0) {
		console.log(count)
	}
	count++;
}

console.log("Print all odd numbers between 300 and 333")
var count = 300 
while(count <= 333) {
	if(count % 2 !== 0) {
		console.log(count)
	}
	count++;
}

console.log("Print all numbers divsible by 5 AND 3 between 5 and 50")
var count = 5
while(count <= 50) {
	if(count % 15 === 0) {
		console.log(count)
	}
	count+=1;
}
