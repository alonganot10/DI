function playTheGame() {
	let choise = confirm("Do you wanna play a game?");
	if (choise == false) {
		alert("No problem, Goodbye");
	} else {
		let exit = 1;
		do {
			let user = Number(prompt("Enter a number between 0-10"));

			if (isNaN(user)) {
				alert("Sorry Not a number, Goodbye");
			} else if (user < 0 || user > 10) {
				alert("Sorry it’s not a good number, Goodbye");
			} else {
				let computerNumber = Math.floor(Math.random() * 11);
				exit = test(user, computerNumber);
			}
		} while (exit == 1)
	}
}

function test(user, computer) {
	let count = 0;
	while (count < 2) {
		if (user == computer) {
			alert("You've Won!");
			return 0;
		} else if (user > computer) {
			alert("You guessed too high");
			user = prompt("Enter another number");
			count++;
		} else {
			alert("You guessed too low");
			user = prompt("Enter another number");
			count++;
		}
	}
}