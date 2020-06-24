function func(myAge) {
	console.log(`My Moms age is ${myAge*2}`);
	console.log(`My Dads age is ${myAge*2*1.2}`);
}

func(prompt("Enter your age"));


function func1(myAge) {
	return myAge*2;
}

console.log(func1(prompt("Enter your age")));