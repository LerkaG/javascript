var precent = function (num, precent) {
	var one = (num * precent) / 100;
	var two = num - one;
	var three = num + one;
	return '\n' + "(" + num + " * " + precent + ") / 100 = " + one + '\n' 
			+ one + " - число процента;" + '\n'
			+ two + " - сумма без процента;" + '\n'
			+ three + " - сумма с процентом." + '\n';
}