// Task Description:
// Roman numerals come from the ancient Roman numbering system.
// They are based on specific letters of the alphabet which are combined to signify the sum (or, in some cases, the difference) of their values.
// The first ten Roman numerals are:

// I, II, III, IV, V, VI, VII, VIII, IX, and X.

// I	1 (unus)
// V	5 (quinque)
// X	10 (decem)
// L	50 (quinquaginta)
// C	100 (centum)
// D	500 (quingenti)
// M	1,000 (mille)

function romanNumerals(number) {
	const symbols = [
		"I",
		"IV",
		"V",
		"IX",
		"X",
		"XL",
		"L",
		"XC",
		"C",
		"CD",
		"D",
		"CM",
		"M"
	];
	const values = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
	const length = symbols.length;
	let result = "";

	for (let i = length - 1; i >= 0; i--) {
		// all individual numerals are less than or equal to number
		while (number - values[i] >= 0) {
			number -= values[i];
			result += symbols[i];
			console.log(`symbol to be added: ${symbols[i]}`);
		}
	}
	console.log(`result is ${result}`);
	return result;
}

// Test Cases:
romanNumerals(6); // 'VI'
romanNumerals(76); // 'LXXVI'
romanNumerals(499); // 'CDXCIX'
romanNumerals(3888); //'MMMDCCCLXXXVIII'
