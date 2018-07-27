// Task Description:
// Ever tried to send a secret message to someone without using the postal service?
// You could use newspapers to tell your secret.
// Even if someone finds your message, it's easy to brush them off and that its paranoia and a bogus conspiracy theory.
// One of the simplest ways to hide a secret message is to use capital letters. Let's find some of these secret messages.

// You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
// For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.",
// if we collect all of the capital letters, we get the message "HELLO".

function findMessage(str) {
	let secret = "";
	const regex = /[A-Z]/g; // describes all capital letters
	const matches = str.match(regex);

	return !matches ? "" : matches.join("");
}

// Test Cases:
findMessage("How are you? Eh, ok. Low or Lower? Ohhh."); // "HELLO"
findMessage("hello world!"); // ""
findMessage("HELLO WORLD!!!"); // "HELLOWORLD"
