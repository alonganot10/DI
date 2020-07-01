let Book1 = {
	title: "Artemis Fowl",
	auther: "Eoin Colfer",
	image: "https://upload.wikimedia.org/wikipedia/en/0/07/Artemis_Fowl_first_edition_cover.jpg",
	alreadyRead: true
}

let Book2 = {
	title: "Harry Potter and the Philosopher's Stone",
	auther: "J. K. Rowling",
	image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
	alreadyRead: false
}

let allBooks = [Book1, Book2];

let table = document.createElement('table');
for (let i = 0; i < (allBooks.length*2); i ++) {
	let row = document.createElement('tr');
	let column = document.createElement('td');

	table.appendChild(row);
	table.children[i].appendChild(column);
}

document.body.appendChild(table);

function add_book(bookNumber, bookrow) {
	let table = document.getElementsByTagName('table')[0];
	table.children[bookrow].firstChild.innerHTML = `${allBooks[bookNumber].title} written by ${allBooks[bookNumber].auther}`;
	let image = document.createElement('img');
	image.src = allBooks[bookNumber].image;
	image.style.width = "100px";
	table.children[bookrow+1].firstChild.appendChild(image);
}

for (let i = 0; i < allBooks.length; i++) {
	add_book(i, i*2);
}

for (let i in allBooks) {
	if (allBooks[i].alreadyRead) {
		table.children[i].firstChild.style.color = "red";
	}
}