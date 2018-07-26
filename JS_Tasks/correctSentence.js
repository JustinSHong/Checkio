// Task Description:
// For the input of your function will be given one sentence.
// You have to return its fixed copy in a way so it’s always starts with a capital letter and ends with a dot.
// Pay attention to the fact that not all of the fixes is necessary.
// If a sentence already ends with a dot then adding another one will be a mistake.

function correctSentence(str) {
	// check if str ends with '.'
	str[str.length - 1] === "." ? null : (str += ".");
	// check if str begins with a capital letter
	str[0] === str.toUpperCase()
		? null
		: (str = str[0].toUpperCase() + str.slice(1));
	return str;
}

// Test Cases:
correctSentence("greetings, friends"); // "Greetings, friends."
correctSentence("Greetings, friends"); // "Greetings, friends."
correctSentence("Greetings, friends."); // "Greetings, friends."
