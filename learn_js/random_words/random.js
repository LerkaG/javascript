//04.02 остановилась на 135 стр. глава 8. Функции


// ГЕНЕРАТОР СЛУЧАЙНЫХ ДРАЗНИЛОК 
var pick_random_word = function (words) {
	return words[Math.floor(Math.random() * words.length)]; 
};

var random_word = ["lera", "nik", "bob"];
var random_age = ["10", "20", "30"];

// можно создать новый массив с нашей функцией
var new_random = pick_random_word(["one", "two", "three"]);
var random_string = "Your name " + pick_random_word(random_word) + " or " + new_random + " Age " + pick_random_word(random_age);
random_string;


// Усовершенствование генератора
var generate_random_insult = function () {
	var random_body = ["глаз", "нос", "череп"];
	var random_adjective = ["вонючая", "унылая", "дурацкая"];
	var random_words = ["муха", "выдра", "дубина"];
	var random_string = "У тебя " + pick_random_word(random_body) + " " + pick_random_word(random_adjective) + " " + pick_random_word(random_words) + "!";
	return random_string;
};
	generate_random_insult();


// РАННИЙ ВЫХОД ИЗ ФУНКЦИИ ПО RETURN

// функция возвращает строку с информацией о пятой букве вашего имени. 
// Если в имени, переданном в аргументе name, меньше пяти букв, будет выполнен return, чтобы сразу же выйти из функции
var fifth_letter = function (name) {
	if (name.length < 5) {
		return;
	}
	return "Пятая буква вашего имени: " + name[4] + ".";
};


// МНОГОКРАТНОЕ ИСПОЛЬЗОВАНИЕ RETURN ВМЕСТО КОНСТРУКЦИИ IF... ELSE

var medal_for_score = function (score) {
	if (score < 3) {
		return "Бронзовая";
	}
	if (score < 7) {
		return "Серебрянная";
	}
	return "Золотая";
}

// КОРОТКАЯ ЗАПИСЬ ФУНКЦИИ - называется (объявлением функции). 

function double(number) {
	return number * 2;
}

// ДЛИННАЯ ЗАПИСЬ ФУНКЦИИ - называется (функциональным выражением).
var double = function (number) {
	return number * 2;
}

// #1
var add = function (num1, num2) {
	var sum = num1 + num2;
	return sum;
}

var multiply = function (num1, num2) {
	var sum = num1 * num2;
	return sum;
}
