var array = ["Banana", "Apples", "Oranges", "Blueberries"];
console.log(array);
var array1 = array;
array1.splice(0,1);
console.log(array1);
var array2 = array1;
array2.sort();
console.log(array2);
var array3 = array2;
array3.push("Kiwi");
console.log(array3);
var array4 = array3;
array4.shift();
console.log(array4);
var array5 = array4;
var array6 = [];
while(array5[0] != null) {
	array6.push(array5.pop());
}
console.log(array6);

var array22 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(array22[1][1][0]);