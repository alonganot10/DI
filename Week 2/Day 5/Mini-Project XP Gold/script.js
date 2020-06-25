let wrong_list = [];
let fails = 0;

function start_game(The_Word) {
	let The_Word_Hidden = word_hidden(The_Word);
	console.log(The_Word_Hidden);
	while (fails < 10) {
		console.log(`All The Wrong Guesses: ${wrong_list.toString()}`);
		console.log(`Lives: ${10-fails}`);
		let decide = prompt("Enter 1 to try a letter\nEnter 2 to try to guess");
		if (decide == 1) {
			The_Word_Hidden = guess_letter(The_Word, The_Word_Hidden);
		} else if (decide == 2) {
			let answer = prompt("Enter your guess");
			if (answer == The_Word) {
				console.log("You've Won!");
				break;
			} else {
				fails++;
			}
		}

	}
	if (fails >= 10) {
		console.log("You Lose");
	}
}

function word_hidden(The_Word) {
	let array = The_Word.split(" ");
	let answer = "";
	for (let i in array) {
		answer += "*".repeat(array[i].length);
		answer += " ";
	}
	return answer.substr(0, answer.length-1);
}

function guess_letter(The_Word, The_Word_Hidden) {
	let guess = prompt("Enter a letter");
	if (The_Word.indexOf(guess) != -1 && The_Word_Hidden.indexOf(guess) == -1) {
		let put_into = [];
		for (let i = 0; i < The_Word.length; i++) {
			if (The_Word[i] === guess) {
				put_into.push(i)
			}
		}
		The_Word_Hidden = The_Word_Hidden.split("");
		for (let i = 0; i < put_into.length; i++) {
			The_Word_Hidden.splice(put_into[i], 1, guess);
		}
		The_Word_Hidden = The_Word_Hidden.join("");
		console.log(The_Word_Hidden);
		return The_Word_Hidden;
	} else if (The_Word_Hidden.indexOf(guess) != -1 || wrong_list.indexOf(guess) != -1) {
		console.log("you've already guessed this letter");
		return The_Word_Hidden;
	} else {
		console.log("you've guessed wrong");
		wrong_list.push(guess);
		fails++;
		return The_Word_Hidden;
	}
}



let The_Word = prompt("Enter Word/s");
start_game(The_Word);