let addressNumber = 38;
let addressStreet = "Wingate";
let country = "Israel";

let global_address = "I live in " + addressStreet +" "+ addressNumber + ", " + country;
console.log(global_address);


let op = 'me';
console.log(isNaN(op));
op = 10;
console.log(op.toString());
op = 10.6789;
console.log(op.toFixed(0));
console.log(op.toFixed(2));


let year = 1999;
let future = 2040;
console.log("I will be " + (future - year) + " in " + future)

let colors = ['x', 'xx', 'xxx', 'xxxx', 'xxxxx']
colors.splice(2, 2, 45, 23, 2);
console.log(colors)

let pets = ['cat', 'dog', 'fish', 'rabbit', 'cow']
console.log(pets[1])
pets.splice(3, 1, 'horse')
console.log(pets)
console.log(pets.length)