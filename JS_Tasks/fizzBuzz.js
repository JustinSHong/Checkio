// Task Description:
// "Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.

// You should write a function that will receive a positive integer and return:
// "Fizz Buzz" if the number is divisible by 3 and by 5;
// "Fizz" if the number is divisible by 3;
// "Buzz" if the number is divisible by 5;
// The number as a string for other cases.

function fizzBuzz(n) {
	let result;
	n % 5 === 0 && n % 3 === 0
		? (result = "Fizz Buzz")
		: n % 3 === 0
			? (result = "Fizz")
			: n % 5 === 0 ? (result = "Buzz") : (result = n.toString());
	return result;
}

// Test Cases:
fizzBuzz(15); // "Fizz Buzz"
fizzBuzz(6); // "Fizz"
fizzBuzz(5); // "Buzz"
fizzBuzz(7); // "7"
