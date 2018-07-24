// Task Description:
// Here you should find the length of the longest substring that consists of the same letter.
// For example, line "aaabbcaaaa" contains four substrings with the same letters "aaa", "bb","c" and "aaaa".
// The last substring is the longest one which makes it an answer.

function longRepeat(line) {
	// input: string consisting of letter chars
	let current;
	let maxLen = 0;
	let substr = line[0];

	if (line.length === 0) {
		// null check
		return 0;
	}

	for (let i = 0; i < line.length; i++) {
		current = line[i];
		if (line[i] === line[i + 1]) {
			// match is found so add matched char to substr
			substr += line[i + 1];
		} else {
			// match not found
			// check if the previous substr was longer
			if (substr.length > maxLen) {
				maxLen = substr.length;
			}
			// reset substr to the next char
			substr = line[i + 1];
		}
	}
	return maxLen;
}

// Test Cases:
longRepeat("sdsffffse"); // 4
longRepeat("ddvvrwwwrggg"); // 3
longRepeat(""); // 0
longRepeat("aa");
longRepeat("aaaabbbbnnnnddddd");
