let board = document.getElementById("wrapper");
for (let x = 1; x < 9; x+=2) { // creates 4 sets of 2 rows
	for (let y = 1; y < 9; y++) { // creats first row
		let block = document.createElement("div");
		if (y % 2 != 0) {
			block.className = 'white';
			block.id = `${x} ${y}`;
		} else {
			block.className = 'black';
			block.id = `${x} ${y}`;
		}
		board.appendChild(block);
	}
	for (let y = 1; y < 9; y++) { // creates second row
		let block = document.createElement("div");
		if (y % 2 == 0) {
			block.className = 'white';
			block.id = `${x+1} ${y}`;
		} else {
			block.className = 'black';
			block.id = `${x+1} ${y}`;
		}
		board.appendChild(block);
	}
}

function set_pieces() {
	pawns_set();
	rooks_set();
	knights_set();
	bishops_set();
	queens_set();
	kings_set();
}

function pawns_set() {
	for (let i = 1; i < 9; i++) {
		let pawn_white = document.createElement("img");
		pawn_white.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/75px-Chess_plt45.svg.png";
		pawn_white.style.width = "100%";

		let cell_white = document.getElementById(`7 ${i}`); // set the white pawns
		cell_white.appendChild(pawn_white);

		let pawn_black = document.createElement("img");
		pawn_black.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/75px-Chess_pdt45.svg.png";
		pawn_black.style.width = "100%";

		let cell_black = document.getElementById(`2 ${i}`); // set the black pawns
		cell_black.appendChild(pawn_black);
	}
}

function rooks_set() {
	for (let i = 1; i < 9; i+=7) {
		let rook_white = document.createElement("img");
		rook_white.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/75px-Chess_rlt45.svg.png";
		rook_white.style.width = "100%";

		let cell_white = document.getElementById(`8 ${i}`); // set the white rooks
		cell_white.appendChild(rook_white);

		let rook_black = document.createElement("img");
		rook_black.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/75px-Chess_rdt45.svg.png";
		rook_black.style.width = "100%";

		let cell_black = document.getElementById(`1 ${i}`); // set the black rooks
		cell_black.appendChild(rook_black);
	}
}

function knights_set() {
	for (let i = 2; i < 8; i+=5) {
		let knight_white = document.createElement("img");
		knight_white.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/75px-Chess_nlt45.svg.png";
		knight_white.style.width = "100%";

		let cell_white = document.getElementById(`8 ${i}`); // set the white knights
		cell_white.appendChild(knight_white);

		let knight_black = document.createElement("img");
		knight_black.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/75px-Chess_ndt45.svg.png";
		knight_black.style.width = "100%";

		let cell_black = document.getElementById(`1 ${i}`); // set the black knights
		cell_black.appendChild(knight_black);
	}
}

function bishops_set() {
	for (let i = 3; i < 7; i+=3) {
		let bishop_white = document.createElement("img");
		bishop_white.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/75px-Chess_blt45.svg.png";
		bishop_white.style.width = "100%";

		let cell_white = document.getElementById(`8 ${i}`); // set the white bishops
		cell_white.appendChild(bishop_white);

		let bishop_black = document.createElement("img");
		bishop_black.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/75px-Chess_bdt45.svg.png";
		bishop_black.style.width = "100%";

		let cell_black = document.getElementById(`1 ${i}`); // set the black bishops
		cell_black.appendChild(bishop_black);
	}
}

function queens_set() {
	let queen_white = document.createElement("img");
	queen_white.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/75px-Chess_qlt45.svg.png";
	queen_white.style.width = "100%";

	let cell_white = document.getElementById(`8 4`); // set the white queen
	cell_white.appendChild(queen_white);

	let queen_black = document.createElement("img");
	queen_black.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/75px-Chess_qdt45.svg.png";
	queen_black.style.width = "100%";

	let cell_black = document.getElementById(`1 4`); // set the black queen
	cell_black.appendChild(queen_black);
}

function kings_set() {
	let king_white = document.createElement("img");
	king_white.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/75px-Chess_klt45.svg.png";
	king_white.style.width = "100%";

	let cell_white = document.getElementById(`8 5`); // set the white king
	cell_white.appendChild(king_white);

	let king_black = document.createElement("img");
	king_black.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/75px-Chess_kdt45.svg.png";
	king_black.style.width = "100%";

	let cell_black = document.getElementById(`1 5`); // set the black king
	cell_black.appendChild(king_black);
}


set_pieces();



// function white_pawn_move(e) {
// 	let this.
// }