function rand(min, max) {
	return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

var a = 111,
    b = 222,
    tmp;
console.log('a=',a,'b=',b);
console.log('Производим обмен с использованием 3й переменной');
tmp = a;
a 	= b;
b	= tmp;
console.log('a=',a,'b=',b);
console.log(" ");
console.log(" ");
a 	= 111;
b 	= 222;
console.log('a=',a,'b=',b);
console.log('Производим обмен без использования 3й переменной');

a 	+= b;
b = a - b;
a -= b;
console.log('a=',a,'b=',b);
console.log(" ");
console.log(" ");
a 	="ПеременнаяА";
b 	="ПеременнаяБ";
console.log('a=',a,'b=',b);
console.log('Производим обмен строк без использования 3й переменной с помощью метода slice');
a += b;
b = a.slice(0,11);
a = a.slice(11,22);
console.log('a=',a,'b=',b);