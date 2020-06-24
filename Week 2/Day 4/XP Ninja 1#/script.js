function capitalize(str) {
	let array1 = str.split("");
	let array2 = str.split("");
	for (let i = 0; i < array1.length; i+=2) {
		array1[i] = array1[i].toUpperCase();
		array2[i+1] = array2[i+1].toUpperCase();
	}
	return [array1.join(""), array2.join("")];
}

console.log(capitalize("abcdef"));



function snowflake(array) {
	let array2 = [];
	while (array.length > 0) {
		console.log(array[0])
		if (array[0] != array2[array2.length-1]) {
			console.log("in")
			console.log(array2.indexOf(array[0]))
			array2.push(array.splice(array.indexOf(array[0]), 1));
			console.log("array1: "+array.toString())
			console.log("array2: "+array2.toString())
		} else {
			console.log("out")
			array.splice(array.indexOf(array[0]), 1);
		}
	}
	return array2;
}

console.log(snowflake([1,2,3,3,3,3,4,5]));



function biggestNumberInArray(array) {
	if (array.length == 0) {
		return 0;
	}
	let big = Number(array.shift());
	while (isNaN(big)) {
		big = Number(array.shift());
	}
	while (array.length > 0) {
		if (array[0] > big) {
			big = Number(array.shift());
		} else {
			array.shift();
		}
	}
	return big;
}

console.log(biggestNumberInArray([-1,0,3,'a',100, 99, 2, 99]))
console.log(biggestNumberInArray(['a', 3, 4, 2]))
console.log(biggestNumberInArray([]))



function isOmnipresent(array, num) {
	for (let i of array) {
		if (i.indexOf(num) == -1) {
			return false;
		}
	}
	return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));