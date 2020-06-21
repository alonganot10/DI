let numbers = prompt("Enter numbers", "here");
console.log(numbers);
if(numbers.indexOf(", ")) {
	numbers = numbers.replaceAll(", ", "*");
}
console.log(numbers);
console.log(eval(numbers));

let num1 = Number(prompt("Enter a number", "here"));
console.log(num1);
let num2;
if (num1 < 2) {
	num2 = "boom";
}
else {
	num2 = "b" + "o".repeat(num1) + "m";
}
if (num1 % 2 == 0) {
	num2 = num2 + "!";
}
if (num1 % 5 == 0) {
	num2 = num2.toUpperCase();
}
console.log(num2);