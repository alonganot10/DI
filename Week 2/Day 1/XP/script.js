let nemo = prompt("Enter something", "here");
nemo = nemo.toLowerCase();
console.log("I am finding Nemo !");
if (nemo.search("nemo") == -1) {
	
	console.log("I can't find Nemo :(");
}
else {
	console.log("I found Nemo at "+nemo.search("nemo")+"!");
}