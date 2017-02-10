function rand(min, max) {
	return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

var a = 60,
    b = rand(0, 59),
    c = rand(0, 59),
    d = rand(0, 59),
    e = rand(0, 59);

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

//lvl1 A
if (a > b && a > c && a > d && a > e){
	console.log("lvl1 A",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
	a *= 10000;
	//lvl2 B
	if (b > c && b > d && b > e) {
		console.log("lvl2 B",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
		b *= 1000;
		//lvl3 C
		if (c > d && c > e) {
			console.log("lvl3 C",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			c *= 100;
			//lvl4 D
			if (d > e) {
				d *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 E
			if (e > d) {
				e *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 D
		if (d > c && d > e) {
			console.log("lvl3 D",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			d *= 100;
			//lvl4 C
			if (c > e) {
				c *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 E
			if (e > c) {
				e *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 E
		if (e > d && e > c) {
			console.log("lvl3 E",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			e *= 100;
			//lvl4 C
			if (c > d) {
				c *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 D
			if (d > c) {
				d *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
	}

	//lvl2 C
	if (c > b && c > d && c > e) {
		console.log("lvl2 C",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
		c *= 1000;
		//lvl3 B
		if (b > d && b > e) {
			console.log("lvl3 B",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			b *= 100;
			//lvl4 D
			if (d > e) {
				d *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 E
			if (e > d) {
				e *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 D
		if (d > b && d > e) {
			console.log("lvl3 D",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			d *= 100;
			//lvl4 B
			if (b > e) {
				b *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 E
			if (e > b) {
				e *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 E
		if (e > d && e > b) {
			console.log("lvl3 E",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			e *= 100;
			//lvl4 B
			if (b > d) {
				b *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 D
			if (d > b) {
				d *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
	}

	//lvl2 D
	if (d > b && d > c && d > e) {
		console.log("lvl2 D",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
		d *= 1000;
		//lvl3 B
		if (b > c && b > e) {
			console.log("lvl3 B",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			b *= 100;
			//lvl4 C
			if (c > e) {
				c *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 E
			if (e > c) {
				e *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 C
		if (c > b && c > e) {
			console.log("lvl3 C",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			c *= 100;
			//lvl4 B
			if (b > e) {
				b *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 E
			if (e > b) {
				e *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 E
		if (e > c && e > b) {
			console.log("lvl3 E",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			e *= 100;
			//lvl4 B
			if (b > c) {
				b *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 C
			if (c > b) {
				c *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
	}

	//lvl2 E
	if (e > b && e > c && e > d) {
		console.log("lvl2 E",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
		e *= 1000;
		//lvl3 B
		if (b > c && b > d) {
			console.log("lvl3 B",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			b *= 100;
			//lvl4 C
			if (c > d) {
				c *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 D
			if (d > c) {
				d *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 C
		if (c > b && c > d) {
			console.log("lvl3 C",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			c *= 100;
			//lvl4 B
			if (b > d) {
				b *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 D
			if (d > b) {
				d *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
		//lvl3 D
		if (d > c && d > b) {
			console.log("lvl3 D",'  a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			d *= 100;
			//lvl4 B
			if (b > c) {
				b *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
			//lvl4 C
			if (c > b) {
				c *= 10;
				console.log('a=',a,'b=',b,'c=',c,'d=',d,'e=',e);
			}
		}
	}
}
