function checkDriverAge(age) {
	if (Number(age) < 18) {
		return "Sorry, you are too yound to drive this car. Powering off";
	} else if (Number(age) > 18) {
		return "Powering On. Enjoy the ride!";
	} else if (Number(age) === 18) {
		return "Congratulations on your first year of driving. Enjoy the ride!";
	}
}

console.log(checkDriverAge(prompt("Enter age")));



amazonBasket = {
	glasses: 1,
	books: 2,
	floss: 100
}

function checkBasket(item) {
	if (amazonBasket[item] == null) {
		return false;
	}
	return true;
}

console.log(checkBasket(prompt("Enter item")));



function changeEnough(money, total) {
	let check = 0;
	let worth = [.25, .10, .05, .01];
	for (let i = 0; i < money.length; i++) {
		check += Number(money[i])*Number(worth[i]);
	}
	if (check > total) {
		return true;
	}
	return false;
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75));



let shoppingList = ["banana", "orange", "apple"];
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

function myBill() {
	let total = 0;
	for (let i of shoppingList) {
		if (stock[i] > 0) {
			total += Number(prices[i]);
			stock[i]--;
		}
	}
	return total;
}

console.log (myBill());



function hotel_cost() {
	let days = Number(prompt("Enter the amount of days you wish to stay"));
	return days*140;
}

function plane_ride_cost() {
	let dest = {
		London: 183,
		Paris: 220,
		All_other_destination: 300
	}
	let choose = prompt("Enter destination");
	if (choose === 'undefined') {
		return plane_ride_cost();
	} else if (choose == "London") {
		return dest[choose];
	} else if (choose == "Paris") {
		return dest[choose];
	} else {
		return dest["All_other_destination"];
	}
}

function rental_car_cost() {
	let days = Number(prompt("Enter how many days you wnat to rent a car"));
	if (days > 10) {
		return days*40*.95;
	}
	return days*40;
}

function total_vacation_cost() {
	return hotel_cost() + plane_ride_cost() + rental_car_cost();
}

console.log(total_vacation_cost());