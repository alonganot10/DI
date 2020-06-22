let user = {
	username: "alon",
	password: "1234"
};
let database = [user];

let user1 = {
	username: "user1",
	timeline: "date1"
};
let user2 = {
	username: "user2",
	timeline: "date2"
};
let user3 = {
	username: "user3",
	timeline: "date3"
};
let newsfeed = [user1, user2, user3];


for (var i = 0; i <= 15; i++) {
	if (i % 2 == 0) {
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`)
	}
}


let names = ["john", "sarah", 23, "Rudolf",34];
for (let i = 0; i < names.length; i++) {
	if (typeof names[i] == "string") {
		if (names[i][0] === names[i][0].toLowerCase()) {
			names[i] = names[i].replace(names[i][0], names[i][0].toUpperCase());
			console.log(names[i]);
		}
	}
}

for (let i of names) {
	if (typeof i != "string") {
		break;
	}
	console.log(i);
}