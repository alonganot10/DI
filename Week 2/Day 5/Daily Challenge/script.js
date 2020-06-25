let num = parseInt(prompt("Enter a number"));
let num1 = num;
let i = 1;
while (true) {
	console.log(`${num} bottles of beer on the wall`);
	console.log(`${num} bottles of beer`);
	if (i == 1) {
		console.log(`Take 1 down, pass it around`);
		num -= 1;
		console.log(`${num} bottles of beer on the wall`);
		i++;
	}
	else if (num == 1) {
		console.log(`Take 1 down, pass it around`);
		console.log(`${num1} bottles of beer were on the wall`);
		break;
	} else if (num - i < 0) {
		console.log(`Take ${num} down, pass them around`);
		console.log(`${num1} bottles of beer were on the wall`);
		break;
	} else {
		console.log(`Take ${i} down, pass them around`);
		num -= i;
		console.log(`${num} bottles of beer on the wall`);
		i++;
	}
}