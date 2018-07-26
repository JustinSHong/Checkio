// Task Description:
// You are given a string where you have to find its first word.
// When solving a task pay attention to the following points:
// There can be dots and commas in a string.
// A string can start with a letter or, for example, a dot or space.
// A word can contain an apostrophe and it's a part of a word.
// The whole text can be represented with one word and that's it.

function firstWord(str) {
	// parse initial string
	const regex = /[^'a-zA-Z']/g; // any non-apostrophe or non-letter chars
	const regex2 = /['a-zA-Z']/g;
	const words = str.trim().split(regex);
	let first;

	for (let w of words) {
		if (!regex.test(w) && w !== "") {
			first = w;
			break;
		}
	}
	return first;
}

// Test Cases:
firstWord("Hello.World");
firstWord("Hello world"); // "Hello")
firstWord(" a word "); // "a")
firstWord("don't touch it"); // "don't")
firstWord("greetings, friends"); // "greetings")
firstWord("... and so on ..."); // "and")
firstWord("hi"); // "hi")
