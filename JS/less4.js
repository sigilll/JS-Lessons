function rand(min, max) {
	return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

var a = 60,
    b = rand(0, 59),
    c = rand(0, 59),
    d = rand(0, 59),
    e = rand(0, 59);
    ARR_LENGTH = 10;

if (b===c) {
	c++;
}	else if (b===d){
	d++;
}	else if (b===e){
	e++;
}	else if (c===d) {
	d++;
}	else if (c===e) {
	e++;
}	else if (d===e) {
	d++;
}
var arr = [ARR_LENGTH];
for (var i = 0; i < ARR_LENGTH; i++) {
	arr[i] = [];
	for (var j = 0; j < ARR_LENGTH; j++) {
		arr[i][j] = rand(0,100)
	};
};
console.table(arr);