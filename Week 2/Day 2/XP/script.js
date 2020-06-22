let num1 = prompt("Enter number");
let num2 = prompt("Enter another number");
if (num1 > num2) {
	alert(num1 + " is bigger then " + num2);
} else if (num2 > num1) {
	alert(num2 + " is bigger then " + num1);
} else {
	alert(num1 + " is as big as " + num2);
}


let newDog = "Chihuahua";
alert(newDog.length);
alert(newDog.toUpperCase());
alert(newDog.toLowerCase());
if (newDog == "Chihuahua") {
	alert('I LOVE Chihuahua, it’s my favorite dog');
} else {
	alert('I dont care, I prefer CATS');
}


let num = prompt("Enter a number");
if (num % 2 == 0) {
	alert(num + " is an even number");
} else {
	alert(num + " is not an even number");
}


let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]
if (users.length == 0) {
	console.log("no one online");
} else if (users.length == 1) {
	console.log(users[0] + " online");
} else if (users.length == 2) {
	console.log(users[0] + " and " + users[1] + " online");
} else {
	console.log(users[0] + ", " + users[1] + " and " + (users.length-2) + " more online");
}