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
let colors = ["orange", "gray", "blue", "red", "brown", "lightbrown", "lightblue", "darkblue"];
for (let i = 0; i < solar_system.length; i++) {
	document.body.append(`<div>${solar_system[i]}</div>`);
}
// let mer = document.createElement('div');
// mer.className = 'planet';
// document.body.appendChild(mer);
// mer.style.background = 'orange';
// let ven = document.createElement('div');
// ven.className = 'planet';
// document.body.appendChild(ven);
// ven.style.background = 'gray';
// let ear = document.createElement('div');
// ear.className = 'planet';
// document.body.appendChild(ear);
// ear.style.background = 'blue';
// let mar = document.createElement('div');
// mar.className = 'planet';
// document.body.appendChild(mar);
// mar.style.background = 'red';
// let jup = document.createElement('div');
// jup.className = 'planet';
// document.body.appendChild(jup);
// jup.style.background = 'brown';
// let sat = document.createElement('div');
// sat.className = 'planet';
// document.body.appendChild(sat);
// sat.style.background = 'darkorange';
// let ura = document.createElement('div');
// ura.className = 'planet';
// document.body.appendChild(ura);
// ura.style.background = 'lightblue';
// let nep = document.createElement('div');
// nep.className = 'planet';
// document.body.appendChild(nep);
// nep.style.background = 'darkblue';