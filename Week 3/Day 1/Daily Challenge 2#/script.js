let mercury = [];
let venus = [];
let earth = ["moon"];
let mars = ["moon", "moon"];
let jupiter = [];
for (let i = 0; i < 67; i++) {
	jupiter.push("moon");
}
let saturn = [];
for (let i = 0; i < 62; i++) {
	saturn.push("moon");
}
let uranus = [];
for (let i = 0; i < 27; i++) {
	uranus.push("moon");
}
let neptune = [];
for (let i = 0; i < 14; i++) {
	neptune.push("moon");
}

let solar_system = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
let colors = ["orange", "gray", "blue", "red", "brown", "yellow", "lightblue", "darkblue"];
let all = document.createDocumentFragment();
for (let i=0; i<solar_system.length; i++) {
	let newDiv = document.createElement('div');
	newDiv.id = i;
	newDiv.className = 'planet';
	newDiv.style.background = colors[i];
	all.appendChild(newDiv);

	for (let x=0; x<solar_system[i].length; x++) {
		let newMoon = document.createElement('div');
		newMoon.id = "moon "+(x+1);
		newMoon.className = 'moon';
		newMoon.innerHTML = x+1;
		all.appendChild(newMoon);
	}
}
document.body.appendChild(all);
