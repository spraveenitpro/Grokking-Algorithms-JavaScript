let arr = [2,4,6];

function recursion(arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		return(arr[0] + recursion(arr.slice(1)));
	}
}

console.log(recursion(arr));