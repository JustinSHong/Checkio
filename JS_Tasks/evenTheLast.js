// Task Description:
// You are given an array of integers. You should find the sum of the elements with even indexes (0th, 2nd, 4th...)
// then multiply this summed number and the final element of the array together.
// Don't forget that the first element has an index of 0.

// For an empty array, the result will always be 0 (zero).

function evenLast(arr) {
	if (arr.length === 0) return 0;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 === 0) sum += arr[i];
	}

	return sum * arr[arr.length - 1];
}

// Test Cases:
evenLast([0, 1, 2, 3, 4, 5]); // 30
evenLast([1, 3, 5]); // 30
evenLast([6]); // 36
evenLast([]); // 0
