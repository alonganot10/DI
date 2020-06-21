let me = ['my','favorite','color','is','blue'];
let meme = me[0] + ' ' + me[1] + ' ' + me[2] + ' ' + me[3] + ' ' + me[4];
console.log(meme);

let str1 = 'mix';
let str2 = 'pod';
let s1 = str1[0];
str1 = str1.replace(str1[0], str2[0]);
str2 = str2.replace(str2[0], s1);
console.log(str1+" "+str2);

let num1 = prompt("Enter a number", 0);
let num2 = prompt('Enter another number', 0);
alert(parseInt(num1) + parseInt(num2));
alert(parseInt(num1) - parseInt(num2));
alert(parseInt(num1) * parseInt(num2));
alert(parseInt(num1) / parseInt(num2));