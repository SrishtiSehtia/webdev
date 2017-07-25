// function isEven(num) {
// 	if(num % 2 === 0) {
// 		return true;
// 	}
// 	return false;
// }

function isEven(num) {
	return num % 2 === 0;
}


// function factorial(num) {
// 	var res = 1;
// 	for(var i = num; i >= 1; i--) {
// 		if(num === 0) {
// 			return 1
// 		}
// 		res = res * i
// 	}
// 	return res
// }

function factorial(num) {
	var res = 1;
	for(var i = 2; i <= num; i++) {
		res *= i;
	}
	return res;
}

function kebabToSnake(str) {
	var newStr = str.replace(/-/g, "_");
	return newStr
}