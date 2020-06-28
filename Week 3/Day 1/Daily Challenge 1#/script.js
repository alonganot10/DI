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
for (let i = 0; i < 4; i +=2) {
	let row1 = document.createElement('th');
	let column1 = document.createElement('td');
	let row2 = document.createElement('tr');
	let column2 = document.createElement('td');

	table.appendChild(row1);
	table.children[i].appendChild(column1);
	table.appendChild(row2);
	table.children[i+1].appendChild(column2);
}

document.body.appendChild(table);

table.children[0].firstChild.innerHTML = `${allBooks[0].title} written by ${allBooks[0].auther}`;
let image1 = document.createElement('img');
image1.src = allBooks[0].image;
image1.style.width = "100vw";
table.children[1].firstChild.appendChild(image1);
table.children[2].firstChild.innerHTML = `${allBooks[1].title} written by ${allBooks[1].auther}`;
let image2 = document.createElement('img');
image2.src = allBooks[1].image;
image2.style.width = "100vw";
table.children[3].firstChild.appendChild(image2);

for (let i in allBooks) {
	if (allBooks[i].alreadyRead) {
		table.children[i].firstChild.style.color = "red";
	}
}