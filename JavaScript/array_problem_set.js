function printReversed(arr) {
	var newArr = [];
	arr.forEach(function(el) {
		newArr.unshift(el)
	});
	console.log(newArr);
}

// Does not work because return exits out of only the forEach function and not the outer isUniform func
// function isUniform(arr) {
// 	var firstEl = arr[0]
// 	arr.forEach(function(el) {
// 		if(el !== firstEl) {
// 			return false;
// 		}
// 	});
// 	return true;
// }

function isUniform(arr) {
	var firstEl = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] !== firstEl) {
			return false;
		}
	}
	return true;
}

function sumArray(arr) {
	var sum = 0;
	arr.forEach(function(el) {
		sum += el;
	});
	return sum;
}

function max(arr) {
	var maxNum = arr[0];
	arr.forEach(function(el) {
		if(el > maxNum){
			maxNum = el;
		}
	})
	return maxNum;
}
