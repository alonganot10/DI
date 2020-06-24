let array = ["red", "purple", "blue", "black"];
for (let i in array) {
	console.log(`My #${parseInt(i)+1} choise is ${array[i]}`);
}


let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let name = "";
for (let i of names) {
	name += i[0];
}
console.log(name);


let num = 0;
do {
	num = prompt("Enter a number");
} while	(num < 10);


let people = ["Greg", "Mary", "Devon", "James"];
for (let i of people) {
	console.log(i);
}
people.splice(people.indexOf("Greg"), 1);
people.splice(people.indexOf("James"), 1, "Jason");
people.push("Alon");
for (let i of people) {
	if (i == "Mary") {
		console.log(i);
		break;
	}
	console.log(i);
}
let people2 = people.slice(1+people.indexOf("Mary"), people.indexOf("Alon"));
console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));
let last = people.length-1;


let age = [20,5,12,43,98,55];
let sum = 0;
for (let i of age) {
	sum += i;
}
console.log(sum);
for (let i of age) {
	if (i % 2 == 0) {
		console.log(i);
	}
}
let big = 0;
for (let i of age) {
	if (i > big) {
		big = i;
	}
}
console.log(big);