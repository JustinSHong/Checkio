// Task Description:
// You are given a text, which contains different english letters and punctuation symbols.
// You should find the most frequent letter in the text. The letter returned must be in lower case.
// While checking for the most wanted letter, casing does not matter, so for the purpose of your search, "A" == "a".
// Make sure you do not count punctuation symbols, digits and whitespaces, only letters.

// If you have two or more letters with the same frequency, then return the letter which comes first in the latin alphabet.
// For example -- "one" contains "o", "n", "e" only once for each, thus we choose "e".

function mostWanted(data) {
	// input: string
	let str = data.toLowerCase();
	console.log(`data in lower case is ${str}`);

	const letterFrequency = {}; // store letters and their frequencies

	// iterate over data string and find frequency of each letter
	// non-letters will have frequency of 0
	for (let char of str) {
		char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122
			? char in letterFrequency
				? letterFrequency[char]++
				: (letterFrequency[char] = 1)
			: (letterFrequency[char] = 0);
	}
	// find the largest frequency
	let max = Math.max(...Object.values(letterFrequency));
	console.log(`largest frequency is ${max}`);
	// filter out the letter that occurs first and has the largest frequency
	const mostWantedChars = Object.keys(letterFrequency)
		.filter(el => {
			return letterFrequency[el] === max;
		})
		.sort();
	console.log(`the most wanted chars are ${mostWantedChars}`);
	// output: most frequently occuring letter and the one that comes first in the alphabet
	console.log(
		`most frequently occuring char in ${str} is ${mostWantedChars[0]}`
	);
	return mostWantedChars[0];
}

// Test Cases:
mostWanted("Hello World!"); // "l"
mostWanted("How do you do?"); // "o"
mostWanted("One"); // "e"
mostWanted("Oops!"); // "o"
mostWanted("AAaooo!!!!"); // "a"
mostWanted("abe"); // "a"
