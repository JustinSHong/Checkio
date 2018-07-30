// Task Description:
// You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence.

function mostFrequent(arr) {
	const count = {}; // holds frequencies of all strings in arr
	for (let str of arr) {
		count.hasOwnProperty(str) ? count[str]++ : (count[str] = 0);
	}
	let maxFreq = Math.max(...Object.values(count));
	for (let key of Object.keys(count)) {
		if (count[key] === maxFreq) return key;
	}
}

// Test Cases:
mostFrequent(["a", "b", "c", "a", "b", "a"]); // "a"
mostFrequent(["a", "b", "c", "a", "b", "a"]); // "a"
mostFrequent(["a", "a", "bi", "bi", "bi"]); // "bi"
