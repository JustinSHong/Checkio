// Task Description:
// You are given two strings and you have to find an index of the second occurrence of the second string in the first one.

function secondIndex(str, target) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === target) {
			count++;
		}
		if (count === 2) {
			return i;
		}
	}
	return undefined;
}

// Test Cases:
secondIndex("sims", "s"); // 3
secondIndex("find the river", "e"); // 12
secondIndex("hi", " "); // undefined
secondIndex("hi mayor", " "); // undefined
secondIndex("hi mr Mayor", " "); // 5
