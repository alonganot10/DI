function get_value(e) {
	let form = document.forms[0];
	let first = form.elements[0].value;
	let last = form.elements[1].value;
	alert(`${first} ${last}`);
}