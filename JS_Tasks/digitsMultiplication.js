// Task Description:
// You are given a positive integer.
// Your function should calculate the product of the digits excluding any zeroes.
// For example: The number given is 123405.
// The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

function digitsMultip(n) {
	let str = n.toString().split("");
	str = str.filter(char => {
		return char !== "0"; // exclude all 0s
	});

	let product = 1;
	str.forEach(char => {
		let int = Number(char);
		product *= char;
	});
	return product;
}

// Test Cases:
digitsMultip(123405); // 120
digitsMultip(999); // 729
digitsMultip(1000); // 1
digitsMultip(1111); // 1
