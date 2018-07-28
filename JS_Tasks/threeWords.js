// Task Description:
// Let's teach the Robots to distinguish words and numbers.
// You are given a string with words and numbers separated by whitespaces (one space).
// The words contains only letters. You should check if the string contains three words in succession.
// For example, the string "start 5 one two three 7 end" contains three words in succession.

function threeWords(str) {
	const regex = /[a-zA-Z]/g; // describes all lowercase and capital letters
	const words = str.split(" ");
	let count = 0;
	// null check
	if (words.length < 3) {
		return false;
	}

	for (let i = 0; i < words.length; i++) {
		words[i].match(regex) ? (count += 1) : (count = 0);
		if (count === 3) return true;
	}
	return false;
}

// Test Cases:
threeWords("Hello World hello"); // true
threeWords("He is 123 man"); // false
threeWords("1 2 3 4"); // false
threeWords("bla bla bla bla"); // true
threeWords("Hi"); // false
threeWords("one two 3 four five six 7 eight 9 ten eleven 12"); // true
threeWords("one two 3 four five 6 seven eight 9 ten eleven 12"); // false
threeWords("0 qwerty a asdfg 2"); // true
