function insert_Row() {
	let table = document.getElementById('sampleTable');
	let row = document.createElement('tr');
	row.appendChild(document.createElement('td'));
	row.appendChild(document.createElement('td'));
	table.appendChild(row);
}