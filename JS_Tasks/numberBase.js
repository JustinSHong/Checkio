// Task Description:
// Do you remember the radix and Numeral systems from math class? Let's practice with it.

// You are given a positive number as a string along with the radix for it.
// Your function should convert it into decimal form.
// The radix is less than 37 and greater than 1. The task uses digits and the letters A-Z for the strings.

// Watch out for cases when the number cannot be converted.
// For example: "1A" cannot be converted with radix 9. For these cases your function should return -1.

function numberRadix(n, radix) {
	for (let char of n) {
		if (isNaN(parseInt(char, radix))) {
			return -1;
		}
	}
	return parseInt(n, radix); // all chars are valid
}

// Test Cases:
numberRadix("AF", 16); // 175
numberRadix("101", 2); // 5
numberRadix("101", 5); // 26
numberRadix("Z", 36); // 35
numberRadix("AB", 10); // -1
numberRadix("ASD", 15); // -1
