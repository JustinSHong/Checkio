// Task Description:
// You are given an array with positive numbers and a number N.
// You should find the N-th power of the element in the array with the index N.
// If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:
// - array = [1, 2, 3, 4] and N = 2, then the result is 3**2 == 9;
// - array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

function indexPower(arr, n) {
	return n >= arr.length ? -1 : Math.pow(arr[n], n);
}

// Test Cases:
indexPower([1, 2, 3, 4], 2); // 9
indexPower([1, 3, 10, 100], 3); // 1000000
indexPower([0, 1], 0); // 1
indexPower([1, 2], 3); // -1
