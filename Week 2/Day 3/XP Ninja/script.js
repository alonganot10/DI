let num = prompt("Enter a number");
let array = num.split("");
let total = 0;
for (let i of array) {
	total += parseInt(i);
}
if (total % 3 == 0) {
	console.log("This number does divide by 3");
} else {
	console.log("This number does not divide by 3");
}


let average = {
	
}
let name = prompt("Enter name");
let choise = "";
do {
	another();
	choise = prompt("Type anything if you want to add another course and No if you want the final calculation");
	if (choise == "No") {
		console.log(calc(average))
		break;
	}
} while (true)


function calc(average) {
	let score = [];
	let coe = [];
	for (let i in average) {
		score.push(parseInt(average[i]["score"]));
		coe.push(parseInt(average[i]["coefficient"]));		

	}
	let total = 0;
	for (let i = 0; i < score.length; i++) {
		total += score[i]*coe[i];
	}
	total = total / score.length;
	return total;
}

function another() {
	let courseName = "";
	let grade = "";
	let coe = "";
	while (courseName == "") {
		courseName = prompt("Enter name of the course");
	}
	while (grade == "") {
		grade = prompt("Enter the grade");
	}
	while (coe == "") {
		coe = prompt("Enter the coefficient");
	}
	let course = {
		name: courseName,
		score: grade,
		coefficient: coe
	}
	average[courseName] = course;
}