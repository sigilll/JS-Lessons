function rand(min, max) {
	return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}
var arr =  [num1 = 	{name: "a", value: rand(0, 60)},
			num2 = 	{name: "b", value: rand(0, 60)},
			num3 = 	{name: "c", value: rand(0, 60)},
			num4 = 	{name: "d", value: rand(0, 60)},
			num5 = 	{name: "e", value: rand(0, 60)}],
	 		temp = {name: "temp", value: 0};

console.log(arr[0].name,'=',arr[0].value,arr[1].name,'=',arr[1].value,arr[2].name,'=',arr[2].value,arr[3].name,'=',arr[3].value,arr[4].name,'=',arr[4].value);


if (arr[0].value===arr[1].value) {
	arr[1].value++;
}	else if (arr[0].value===arr[2].value) {
	arr[2].value++;
}	else if (arr[0].value===arr[3].value) {
	arr[3].value++;
}	else if (arr[0].value===arr[4].value) {
	arr[4].value++;
}	else if (arr[1].value===arr[2].value) {
	arr[2].value++;
}	else if (arr[1].value===arr[3].value) {
	arr[3].value++;
}	else if (arr[1].value===arr[4].value) {
	arr[4].value++;
}	else if (arr[2].value===arr[3].value) {
	arr[3].value++;
}	else if (arr[2].value===arr[4].value) {
	arr[4].value++;
}	else if (arr[3].value===arr[4].value) {
	arr[4].value++;
}

console.log(arr[0].name,'=',arr[0].value,arr[1].name,'=',arr[1].value,arr[2].name,'=',arr[2].value,arr[3].name,'=',arr[3].value,arr[4].name,'=',arr[4].value);


if (arr[0].value<arr[1].value) {
	temp = arr[0];
	arr[0] = arr[1];
	arr[1] = temp;
}

if (arr[1].value<arr[2].value) {
	temp = arr[1];
	arr[1] = arr[2];
	arr[2] = temp;
}

if (arr[2].value<arr[3].value) {
	temp = arr[2];
	arr[2] = arr[3];
	arr[3] = temp;
}

if (arr[3].value<arr[4].value) {
	temp = arr[3];
	arr[3] = arr[4];
	arr[4] = temp;
}

if (arr[0].value<arr[1].value) {
	temp = arr[0];
	arr[0] = arr[1];
	arr[1] = temp;
}

if (arr[1].value<arr[2].value) {
	temp = arr[1];
	arr[1] = arr[2];
	arr[2] = temp;
}

if (arr[2].value<arr[3].value) {
	temp = arr[2];
	arr[2] = arr[3];
	arr[3] = temp;
}

if (arr[0].value<arr[1].value) {
	temp = arr[0];
	arr[0] = arr[1];
	arr[1] = temp;
}

if (arr[1].value<arr[2].value) {
	temp = arr[1];
	arr[1] = arr[2];
	arr[2] = temp;
}

if (arr[0].value<arr[1].value) {
	temp = arr[0];
	arr[0] = arr[1];
	arr[1] = temp;
}

console.log(arr[0].name,'=',arr[0].value,arr[1].name,'=',arr[1].value,arr[2].name,'=',arr[2].value,arr[3].name,'=',arr[3].value,arr[4].name,'=',arr[4].value);

arr[0].value *= 10000;
arr[1].value *= 1000;
arr[2].value *=	100;
arr[3].value *= 10;

console.log(arr[0].name,'=',arr[0].value,arr[1].name,'=',arr[1].value,arr[2].name,'=',arr[2].value,arr[3].name,'=',arr[3].value,arr[4].name,'=',arr[4].value);


