function is_Blank(str) {
	if (str.length == 0) {
		return true;
	}
	return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));



function abbrev_name(str) {
	let array = str.split(" ");
	return `${array[0]} ${array[1][0]}.`
}

console.log(abbrev_name("Robin Singh"));



function swapCase(str) {
	str = str.split("");
	for (let i in str) {
		if (str[i] === str[i].toLowerCase()) {
			str[i] = str[i].toUpperCase();
		} else {
			str[i] = str[i].toLowerCase();
		}
	}
	return str.join("");
}

console.log(swapCase("The Quick Brown Fox"));



function randomLargest() {
	let rand1 = Math.floor(Math.random()* 101);
	let rand2 = Math.floor(Math.random()* 101);
	let rand3 = Math.floor(Math.random()* 101);
	console.log(`${rand1} ${rand2} ${rand3}`);
	if (rand1 > rand2 && rand1 > rand3) {
		return rand1;
	} if (rand2 > rand1 && rand2 > rand3) {
		return rand2;
	}
	return rand3;
}

console.log(randomLargest());



function randomEven() {
	let rand = Math.floor(Math.random()* 101);
	console.log(`The Random Number: ${rand}`);
	for (let i = 0; i < rand+1; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}
}

randomEven();



function x23() {
	let array = [];
	for (let i = 0; i < 500; i+=23) {
		array.push(i);
	}
	return array;
}

function sum(array) {
	let total = 0;
	while (array.length > 0) {
		total += array.pop();
	}
	return total;
}

console.log(sum(x23()));



function is_palindrome(str) {
	let arr = str.split("");
	let arr1 = str.split("")
	arr1.reverse();
	console.log(arr);
	console.log(arr1);
	for (let i in arr) {
		if (arr[i] != arr1[i]) {
			return false;
		}
	}
	return true;
}

console.log(is_palindrome("madam"));



function calc_tip(str) {
	let money = str.split(" ").map(function(item) {
		return parseInt(item, 10);
	});
	console.log(money);
	let tip = [];
	for (let i in money) {
		if (money[i] < 50) {
			tip.push(money[i]*0.2);
			money[i] += tip[i];
		}
		else if (money[i] < 200) {
			tip.push(money[i]*0.15);
			money[i] += tip[i];
		}
		else {
			tip.push(money[i]*0.1);
			money[i] += tip[i];
		}
	}
	return {money, tip};
}

console.log(calc_tip(prompt("Enter bills separated by spaces")));