// Task Description:
// You are given a string and two markers (the initial and final).
// You have to find a substring enclosed between these two markers.
// But there are a few important conditions:

// The initial and final markers are always different.
// If there is no initial marker then the beginning should be considered as the beginning of a string.
// If there is no final marker then the ending should be considered as the ending of a string.
// If the initial and final markers are missing then simply return the whole string.
// If the final marker is standing in front of the initial one then return an empty string.

// Input: Three arguments. All of them are strings. The second and third arguments are the initial and final markers.
// Output: A string.

function betweenMarkers(str, start, end) {
	let startIdx = str.indexOf(start);
	let endIdx = str.indexOf(end);

	if (startIdx < 0 && endIdx < 0) {
		return str;
	} else if (startIdx < 0 && endIdx >= 0) {
		startIdx = 0;
		return str.slice(0, endIdx);
	} else if (startIdx >= 0 && endIdx < 0) {
		endIdx = str.length;
		return str.slice(startIdx + start.length, endIdx);
	} else if (startIdx > endIdx) {
		return "";
	}

	return str.slice(startIdx + start.length, endIdx);
}

// Test Cases:
betweenMarkers("What is >apple<", ">", "<"); // 'apple'
betweenMarkers(
	"<head><title>My new site</title></head>",
	"<title>",
	"</title>"
); // 'My new site'
betweenMarkers("No[/b] hi", "[b]", "[/b]"); // 'No'
betweenMarkers("No [b]hi", "[b]", "[/b]"); // 'hi'
betweenMarkers("No hi", "[b]", "[/b]"); // 'No hi'
betweenMarkers("No <hi>", ">", "<"); // ''
