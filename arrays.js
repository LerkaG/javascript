var my_array = function (one, two) {
	for (var i = 0; i < one.length; i ++) {
		if (one[i] !== two[i] || one.length !== two.length ) {
			return false;
		}
	}
	return true;
}