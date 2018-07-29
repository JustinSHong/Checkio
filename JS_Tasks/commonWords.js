// Task Description:
// Let's continue examining words. You are given two string with words separated by commas.
// Try to find what is common between these strings. The words are not repeated in the same string.

// Your function should find all of the words that appear in both strings.
// The result must be represented as a string of words separated by commas in alphabetic order.

// Input: Two arguments as strings.
// Output: The common words as a string.

function commonWords(str1, str2) {
	const words1 = str1.split(",");
	const words2 = str2.split(",");

	let result = [];
	for (let word of words1) {
		if (words2.includes(word)) result.push(word);
	}

	return result.sort().join(",");
}

// Test Cases:
commonWords("hello,world", "hello,earth"); // "hello"
commonWords("one,two,three", "four,five,six"); // ""
commonWords("one,two,three", "four,five,one,two,six,three"); // "one,three,two"
