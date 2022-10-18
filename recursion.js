function recursion(m) {
	//console.log(m);
	//if (m <= 1) {
	//	return
	//} else {
	//	recursion(m - 1);
	//}
	if (m == 1) {
		return 1
	} else {
		return m * recursion(m - 1);
	}

}

console.log(recursion(3));