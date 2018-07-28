// Task Description:
// In computer science and discrete mathematics, an inversion is a pair of places in a sequence
// where the elements in these places are out of their natural order.
// So, if we use ascending order for a group of numbers, then an inversion is
// when larger numbers appear before lower number in a sequence.

// Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
// - 5 and 3; - 5 and 4; - 7 and 6.

// You are given a sequence of unique numbers and you should count the number of inversions in this sequence.

// Input: A sequence as a tuple of integers.
// Output: The inversion number as an integer.

function countInversion(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j <= arr.length - 1; j++) {
			if (arr[i] > arr[j] && i < j) {
				// inversion occurs when a number is greater than its neighbor
				count++;
			}
		}
	}
	return count;
}

// Test Cases:
countInversion([1, 2, 5, 3, 4, 7, 6]); // 3
countInversion([0, 1, 2, 3]); // 0
countInversion([99, -99]); // 1
countInversion([5, 3, 2, 1, 0]); // 10
