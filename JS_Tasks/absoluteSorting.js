// Task Description:
// Let's try some sorting. Here is an array with the specific rules.

// The array has various numbers. You should sort it, but sort it by absolute value in ascending order.
// For example, the sequence (-20, -5, 10, 15) will be sorted like so: (-5, 10, 15, -20).
// Your function should return the sorted list .

// Precondition: The numbers in the array are unique by their absolute values.
// Input: An array of numbers .
// Output: The list or tuple (but not a generator) sorted by absolute values in ascending order.
// Addition: The results of your function will be shown as a list in the tests explanation panel.

function absoluteSorting(arr) {
	return arr.sort((a, b) => {
		return Math.abs(a) - Math.abs(b);
	});
}

// Test Cases:
absoluteSorting([-20, -5, 10, 15]); // [-5, 10, 15, -20]
absoluteSorting([1, 2, 3, 0]); // [0, 1, 2, 3]
absoluteSorting([-1, -2, -3, 0]); // [0, -1, -2, -3]
