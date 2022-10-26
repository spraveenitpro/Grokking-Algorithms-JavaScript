let arr = [2, 4, 6, 7, 2, 4, 78, 12, 101, 34];

// Recursively Add contents of Array

function recursionAdd(arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		return (arr[0] + recursionAdd(arr.slice(1)));
	}
}

console.log(recursionAdd(arr));

function recursionCount(arr) {
	if (arr.length === 0) {
		return 0
	} else {
		return (1 + recursionCount(arr.slice(1)));
	}
}

console.log(recursionCount(arr));

// recursively find the biggest number in the array in javascript	
function recursionMax(arr) {
	if (arr.length === 1) {
		return arr[0];
	}
	if (arr.length === 2) {
		return arr[0] > arr[1] ? arr[0] : arr[1];
	}
	const submax = recursionMax(arr.slice(1));
	//console.log(submax);
	return arr[0] > submax ? arr[0] : submax;
}

console.log(recursionMax(arr));

//console.log(arr.slice(2));