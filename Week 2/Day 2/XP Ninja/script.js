let current = 2020;

let year = prompt("Enter birthyear");
let age = current - year;

let year2 = prompt("Enter another birthyear");
let age2 = current - year2;

if (age > age2) {
	if (age2*2 == age) {
		alert("The younger is already half the age of the older one")
	} else if (age2*2 > age) {
		while (age2*2 > age) {
			current--;
			age = current - year;
			age2 = current - year2;
		}
		console.log(current);
	} else {
		while (age2*2 < age) {
			current++;
			age = current - year;
			age2 = current - year2;
		}
		console.log(current);
	}
} else if (age2 > age) {
	if (age*2 == age2) {
		alert("The younger is already half the age of the older one")
	} else if (age*2 > age2) {
		while (age*2 > age2) {
			current--;
			age = current - year;
			age2 = current - year2;
		}
		console.log(current);
	} else {
		while (age*2 < age2) {
			current++;
			age = current - year;
			age2 = current - year2;
		}
		console.log(current);
	}
} else {
	alert("They are the same age");
}


let str = prompt("Enter a word");
if (str.length >= 3) {
	if (str[str.length-3]+str[str.length-2]+str[str.length-1] == "ing") {
		str = str+"ly";
	} else {
		str = str+"ing";
	}
	console.log(str);
} else {
	console.log(str);
}