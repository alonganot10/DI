function turnToArray(str) {
	return str.split(",");
}

function longestWord(array) {

	let big = array[0];
	for (let i in array) {
		if (array[i].length > big.length) {
			big = array[i];
		}
	}
	return Number(big.length);
}

function space(word, length) {
	let total = Number(length) - Number(word);
	return "\xa0".repeat(total);
}

function frame(str) {
	str = turnToArray(str);
	big = longestWord(str);
	console.log("*".repeat(big+4));
	for (let i = 0; i < str.length; i++) {
		console.log(`* ${str[i]}${space(str[i].length, big)} *`)
	}
	console.log("*".repeat(big+4));
}

frame(prompt("Enter words separated by commas"));