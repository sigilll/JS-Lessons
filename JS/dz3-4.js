function rand(min, max) {
	return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

var arr = [];

for (var i = 0; i < 30; i++) {
	arr.push( rand(0,99) );
}
console.log(arr);
console.log(" ");
console.log(" ");
console.log("Ищем число 55");
var expl = 55,
	result;
for (var i = 0; i < arr.length; i++) {
	if (arr[i]===expl) {
		result = i;
		break;
	}
	if (i==29) {
		result = -1;
	}
}

console.log("Инекс искомого числа: ",result);
