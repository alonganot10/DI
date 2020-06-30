function getBold_items() {
	let all_bold = document.getElementsByTagName('p')[0].getElementsByTagName("strong");
	return all_bold;
}



function highlight(e) {
	let array = getBold_items();
	for (let i of array) {
		i.style.color = "blue";
	}
}



function return_normal(e) {
	let array = getBold_items();
	for (let i of array) {
		i.style.color = "black";
	}
}



let bold = document.getElementsByTagName('p');
bold[0].addEventListener("mouseover", highlight);
bold[0].addEventListener("mouseout", return_normal);