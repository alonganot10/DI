//################################################
// deck creation

function create_deck() {
	let clover_deck = [];
	for (let i = 0; i < 13; i++) {
		let x = i;
		if (i >= 10) {
			x = 9;
		}
		clover_deck.push([`cards/C_${i+1}.jpg`, x+1]);
	}
	let diamond_deck = [];
	for (let i = 0; i < 13; i++) {
		let x = i;
		if (i >= 10) {
			x = 9;
		}
		diamond_deck.push([`cards/D_${i+1}.jpg`, x+1]);
	}
	let spade_deck = [];
	for (let i = 0; i < 13; i++) {
		let x = i;
		if (i >= 10) {
			x = 9;
		}
		spade_deck.push([`cards/S_${i+1}.jpg`, x+1]);
	}
	let heart_deck = [];
	for (let i = 0; i < 13; i++) {
		let x = i;
		if (i >= 10) {
			x = 9;
		}
		heart_deck.push([`cards/H_${i+1}.jpg`, x+1]);
	}
	return [clover_deck, diamond_deck, spade_deck, heart_deck];
}

//################################################
// shuffle the deck

function shuffle_deck(deck) {
	let shuffle = [];
	for (let i = 0; i < 52; i++) {
		let random_deck = Math.floor(Math.random()*(deck.length));
		if (deck[random_deck].length == 0) {
			deck.splice(random_deck, 1);
		} else {
			let random_card = Math.floor(Math.random()*(deck[random_deck].length));
			shuffle.push(deck[random_deck][random_card]);
		}
	}
	for (let i = shuffle.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		let temp = shuffle[i];
		shuffle[i] = shuffle[j];
		shuffle[j] = temp;
	}
	return shuffle;
}

//################################################
// hit - add another card to the players hand

function hit() {

	let card0 = deck.pop();
	choose_ace(card0);
	player_cards.push(card0);
	let player_side = document.getElementById("player");
	let card = document.createElement("img");
	card.src = player_cards[player_cards.length-1][0];
	player_side.appendChild(card);

	hit_button.addEventListener("click", is_bust);

}

//################################################
// is_bust - checks once if the player went over 21
// or on 21 exactly

function is_bust() {
	let total = 0;
	for (let i of player_cards) {
		if (i[1] == 14) {
			total += 11;
		} else {
			total += i[1];
		}
	}
	console.log(total);
	if (total > 21) {
		console.log("you lose");
		clearInterval(timer);
		let disable_hit = document.getElementById("hit");
		disable_hit.onclick = "";
	} else if (total == 21) {
		result = 1;
	}
}

//################################################
// checks if the card is an ace and sets its value
// to either 1 or 11

function choose_ace(card) {
	if (card[1] == 1) {
		let choice = confirm("Press OK to select 1\nPress cancel to select 11");
		if (choice == true) {
			card[1] = 1;
		} else {
			card[1] = 14;
		}
	}
}

//################################################
// restart the game

function refresh() {
	location.reload();
}

//################################################
// checks on repeat if the user bust or got 21

function test_win() {
	if (result == 1) {
		console.log("you win");
		clearInterval(timer);
		let disable_hit = document.getElementById("hit");
		disable_hit.onclick = "";
	} else {
		result = 0;
	}
}

//################################################
// sum up the total score of the player after
// the player presses stand

let final_total = 0;
function stand() {
	while (player_cards.length > 0) {
		let add = player_cards.pop();
		if (add[1] == 14) {
			add[1] = 11;
		}
		console.log(add[1]);
		final_total += add[1];
	}
	let disable_hit = document.getElementById("hit");
	disable_hit.onclick = "";
}

//################################################
// reveals the dealers' card 1sec after the player
// pressed stand

function card_reveal() {
	setTimeout(function() { face_down.src = dealer_cards[0][0] }, 1000);
}

//################################################
// final dealer side calcuation to check if player
// won or lost

let dealer_amount = 0;
function dealer_turn() {
	if (dealer_cards[0][1] == 1 && dealer_cards[1][1] > 5) {
		dealer_amount += 11 + dealer_cards[1][1];
	} else if (dealer_cards[1][1] == 1 && dealer_cards[0][1] > 5) {
		dealer_amount += 11 + dealer_cards[0][1];
	} else {
		dealer_amount += dealer_cards[0][1] + dealer_cards[1][1];
	}
	while (dealer_amount < 17 && dealer_amount < final_total) {
		dealer_cards.push(deck.pop());
		let new_dealer_card = document.createElement("img");
		new_dealer_card.src = dealer_cards[dealer_cards.length-1][0];
		dealer_side.appendChild(new_dealer_card);
		dealer_amount += dealer_cards[dealer_cards.length-1][1];
	}
	console.log(dealer_amount+" dealer");
	if (dealer_amount >= final_total && dealer_amount < 22) {
		console.log("you lose");
	} else {
		console.log("you win");
	}
}

//################################################



// creates and suffles a new deck

let deck = create_deck();
deck = shuffle_deck(deck);

// dealers' cards

let dealer_cards = [];
dealer_cards.push(deck.pop());
let face_down = document.createElement("img");
face_down.src = "cards/back_red.jpg";
let dealer_side = document.getElementById("dealer");
dealer_side.appendChild(face_down);
dealer_cards.push(deck.pop());
let dealer_face_up = document.createElement("img");
dealer_face_up.src = dealer_cards[1][0];
dealer_side.appendChild(dealer_face_up);

// players' cards

let player_cards = [];
let card = deck.pop();
choose_ace(card);
player_cards.push(card);
let card1 = document.createElement("img");
card1.src = player_cards[0][0];
let player_side = document.getElementById("player");
player_side.appendChild(card1);
card = deck.pop();
choose_ace(card);
player_cards.push(card);
let card2 = document.createElement("img");
card2.src = player_cards[1][0];
player_side.appendChild(card2);

// check for bust or win

let result;
let hit_button = document.getElementById("hit");
hit_button.addEventListener("click", is_bust);
is_bust();
let timer = setInterval(test_win, 100);
if (result == 1) {
	console.log("you win");
	clearInterval(timer);
	let disable_hit = document.getElementById("hit");
	disable_hit.onclick = "";
} else {
	result = 0;
}

// dealers' turn after stand

let dealer_stand = document.getElementById("stand");
dealer_stand.addEventListener("click", card_reveal);
