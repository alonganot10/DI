function encryption(str) {
	let array = str.split("");
	let array2 = [];
	let des = prompt("Enter 1 to Encrypt or 2 to Decrypt");
	if (des == 1) {
		let choose = prompt("Enter a number to encrypt the sentence with");
		for (let i = 0; i < str.length; i++) {
			if (array[i] === array[i].toLowerCase()) {
				array[i] = array[i].charCodeAt();
				if (array[i] != 32) {
					array[i] += parseInt(choose);
					if (array[i] > 122) {
						array[i] = array[i] - 122 + 96;
					}
				}
			} else {
				array[i] = array[i].charCodeAt();
				if (array[i] != 32) {
					array[i] += parseInt(choose);
					if (array[i] > 90) {
						array[i] = array[i] - 90 + 64;
					}
				}

			}
			if (String(array[i]).length == 2) {
				array[i] = "0"+array[i];
				console.log("test");
			}
			console.log(array[i]);
			array[i] = String.fromCharCode(String(array[i]));
		}
	} else if (des == 2) {
		let choose = prompt("Enter a number to decrypt the sentence with");
		for (let i = 0; i < str.length; i++) {
			if (array[i] === array[i].toLowerCase()) {
				array[i] = array[i].charCodeAt();
				if (array[i] != 32) {
					array[i] -= parseInt(choose);
					if (array[i] < 97) {
						array[i] = 122 + array[i] - 96;
					}
				}
			} else {
				array[i] = array[i].charCodeAt();
				if (array[i] != 32) {
					array[i] -= parseInt(choose);
					if (array[i] < 65) {
						array[i] = 90 + array[i] - 64;
					}
				}

			}
			if (String(array[i]).length == 2) {
				array[i] = "0"+array[i];
				console.log("test");
			}
			console.log(array[i]);
			array[i] = String.fromCharCode(String(array[i]));
		}
	} else {
			console.log("I Said 1 or 2!");
	}
	return array;
}
let str = prompt("Enter a sentence");
console.log(encryption(str));