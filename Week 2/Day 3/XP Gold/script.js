const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
let user = prompt("Enter your name");
if (user in GUEST_LIST) {
	console.log(`Hi! I'm ${user}, and I'm from ${GUEST_LIST[user]}`);
} else {
	console.log("Hi! I'm a guest.");
}


let family = {
	Alon: 21,
	Guy: 24,
	Hadar: 28
}
console.log(Object.keys(family));
console.log(Object.values(family));


let building = {
    number_levels : 4,
    number_of_apt_by_level : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    name_of_tenants : ["Sarah", "Dan", "David"],
    number_of_rooms_and_rent:  {
        "Sarah": [3, 2000],
        "Dan":  [4, 1000],
        "David": [1, 10],
    },
}
console.log(building.number_levels);
console.log(building.number_of_apt_by_level["1"] + " " + building.number_of_apt_by_level["3"]);
console.log(building.name_of_tenants[1] + " " + building.number_of_rooms_and_rent["Dan"][0]);
if (building.number_of_rooms_and_rent["Sarah"][1]+building.number_of_rooms_and_rent["David"][1] > building.number_of_rooms_and_rent["Dan"][1]) {
	console.log("Dan's Rent needs to change higher");
}
building.number_of_rooms_and_rent["Dan"][1] = building.number_of_rooms_and_rent["Sarah"][1] + building.number_of_rooms_and_rent["David"][1];


let person1 = {
	fullName: "Guy Ganot",
	mass: 123123,
	height: 123,
	BMI: function() {
		return this.mass / this.height^2
	}
}
let person2 = {
	fullName: "Hadar Ganot",
	mass : 321321,
	height: 321,
	BMI: function() {
		return this.mass / this.height^2
	}
}
if (person1.BMI() > person2.BMI()) {
	console.log(person1.fullName);
} else {
	console.log(person2.fullName);
}