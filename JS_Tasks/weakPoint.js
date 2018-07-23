// Task Description:
// While traveling, the spaceship endures quite a lot of stress. As a result, an important part of the maintenance is to check the outer hull. Stephan uses a digital durabilitimeter for this task. The device scans a portion of the spaceships hull and gives a durability map that is divided by small square fragments with measurements. Sometimes Stephan does not have much time and he can patch only couple points, so we need an algorithm to find the weak points.

// The durability map is represented as a matrix with digits. Each number is the durability measurement for the cell. To find the weakest point we should find the weakest row and column. The weakest point is placed in the intersection of these rows and columns. Row (column) durability is a sum of cell durability in that row (column). You should find coordinates of the weakest point (row and column). The first row (column) is 0th row (column). If a section has several equal weak points, then choose the top left point.

function weakPoint(matrix) {
	const rowScores = []; // hold total score for rows
	const colScores = []; // hold total score for cols
	// find the durability scores for each row/col
	for (let row of matrix) {
		let rowScore = row.reduce((a, b) => {
			return a + b;
		});
		let colScore = 0;
		for (let i = 0; i < row.length; i++) {
			colScore += matrix[i][matrix.indexOf(row)];
		}

		rowScores.push(rowScore);
		colScores.push(colScore);
	}
	// find the smallest total row and total col scores
	let rowMin = Math.min(...rowScores);
	let colMin = Math.min(...colScores);
	console.log(
		`smallest row score is ${rowMin} at index ${rowScores.indexOf(rowMin)}`
	);
	console.log(
		`smallest col score is ${colMin} at index ${colScores.indexOf(colMin)}`
	);
	// output: coordinates of the weakest point
	// weakest point is the intersection of the smallest row score and the smallest col score
	console.log(
		`weakest point is ${rowScores.indexOf(rowMin)}, ${colScores.indexOf(
			colMin
		)}`
	);
	return [rowMin, colMin];
}

// Test Cases:
weakPoint([
	[7, 2, 7, 2, 8],
	[2, 9, 4, 1, 7],
	[3, 8, 6, 2, 4],
	[2, 5, 2, 9, 1],
	[6, 6, 5, 4, 5]
]); // weakest point is [3, 3]
weakPoint([
	[7, 2, 4, 2, 8],
	[2, 8, 1, 1, 7],
	[3, 8, 6, 2, 4],
	[2, 5, 2, 9, 1],
	[6, 6, 5, 4, 5]
]); // weakest point is [1, 2]
weakPoint([[1, 1, 1], [1, 1, 1], [1, 1, 1]]); // weakest point is [0, 0]
