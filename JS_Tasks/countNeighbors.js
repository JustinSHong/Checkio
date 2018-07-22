// Task Description:
// In cellular automata, the Moore neighborhood comprises the eight cells surrounding a central cell on a two-dimensional square lattice. The neighborhood is named after Edward F. Moore, a pioneer of cellular automata theory. Many board games are played with a rectangular grid with squares as cells. For some games, it is important to know about the conditions of neighbouring cells for chip (figure, draught etc) placement and strategy.

// You are given a state for a rectangular board game grid with chips in a binary matrix, where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates for a cell in the form of row and column numbers (starting from 0). You should determine how many chips are close to this cell. Every cell interacts with its eight neighbours; those cells that are horizontally, vertically, or diagonally adjacent.

function countNeighbours(data, row, col) {
	let neighborCount = 0; // number of neighbors of the given cell
	const rowLen = data[0].length; // max row size
	const colLen = data.length; // max col size
	const neighbors = []; // holds all valid neighbors of the given cell

	// define the immediate neighbors for the given cell
	let topLeft;
	let topCenter;
	let topRight;
	let midLeft;
	let midRight;
	let bottomLeft;
	let bottomCenter;
	let bottomRight;

	// find valid neighbors in the row above the current cell
	if (row - 1 >= 0) {
		topCenter = data[row - 1][col];
		neighbors.push(topCenter);
		if (col - 1 >= 0) {
			topLeft = data[row - 1][col - 1];
			neighbors.push(topLeft);
		}

		if (col + 1 < colLen) {
			topRight = data[row - 1][col + 1];
			neighbors.push(topRight);
		}
	}
	// find valid neigbors in the same row of the current cell
	if (col - 1 >= 0) {
		midLeft = data[row][col - 1];
		neighbors.push(midLeft);
	}

	if (col + 1 < colLen) {
		midRight = data[row][col + 1];
		neighbors.push(midRight);
	}
	// find valid neighbors in the row below the current cell
	if (row + 1 < rowLen) {
		bottomCenter = data[row + 1][col];
		neighbors.push(bottomCenter);
		if (col - 1 >= 0) {
			bottomLeft = data[row + 1][col - 1];
			neighbors.push(bottomLeft);
		}

		if (col + 1 < colLen) {
			bottomRight = data[row + 1][col + 1];
			neighbors.push(bottomRight);
		}
	}

	// loop over list of neighbors and validate each neighbor
	for (let n of neighbors) {
		if (n === 1) {
			// neighboring cell is not empty
			neighborCount++;
		}
	}
	return neighborCount;
}

// Test Cases:
countNeighbours(
	[
		[1, 0, 0, 1, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 1, 0, 1],
		[1, 0, 0, 0, 0],
		[0, 0, 1, 0, 0]
	],
	1,
	2
); // 3

countNeighbours(
	[
		[1, 0, 0, 1, 0],
		[0, 1, 0, 0, 0],
		[0, 0, 1, 0, 1],
		[1, 0, 0, 0, 0],
		[0, 0, 1, 0, 0]
	],
	0,
	0
); // 1

countNeighbours([[1, 1, 1], [1, 1, 1], [1, 1, 1]], 0, 2); // 3

countNeighbours([[0, 0, 0], [0, 1, 0], [0, 0, 0]], 1, 1); // 0
