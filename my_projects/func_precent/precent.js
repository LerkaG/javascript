// вычитание процента из числа

var find_precent = function (num, precent) {
var number_of_precent = (num * precent) / 100;
var number_of_your_number = num - number_of_precent;
var number_of_your_number_plus = num + number_of_precent;
    return num + " * " + precent + " / 100 = " + number_of_precent + '\n' 
		    + " result: \n " 
		    + number_of_precent + " - сумма числа процента; \n" 
		    + number_of_your_number + " - осталось без процента; \n" 
		    + number_of_your_number_plus + " - осталось c процентом. \n" ; 
};