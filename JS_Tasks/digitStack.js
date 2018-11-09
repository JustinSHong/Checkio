// Task Description
// We will emulate the stack process with Python. You are given a sequence of commands:
// - "PUSH X" -- add X in the stack, where X is a digit.
// - "POP" -- look and remove the top position. If the stack is empty, then it returns 0 (zero) and does nothing.
// - "PEEK" -- look at the top position. If the stack is empty, then it returns 0 (zero).
// The stack can only contain digits.

// You should process all commands and sum all digits which were taken from the stack ("PEEK" or "POP").
// Initial value of the sum is 0 (zero).

function digitStack(commands) {
    let sum = 0;
    const digits = [];
    let digit = 0;

    for (let i = 0; i < commands.length; i++) {
        if (commands[i].includes("PUSH")) {
            digit = commands[i].split(" ")[1];
            digits.push(parseInt(digit, 10));
        } else if (commands[i] == "POP") {
            if (digits.length == 0) sum += 0;
            else {
                digit = digits.pop();
                sum += digit;
            }
        } else if (commands[i] == "PEEK") {
            if (digits.length == 0) sum += 0;
            else {
                digit = digits[digits.length - 1];
                sum += digit;
            }
        }
    }
    return sum;
}

// Test Cases:
digitStack([
    "PUSH 3",
    "POP",
    "POP",
    "PUSH 4",
    "PEEK",
    "PUSH 9",
    "PUSH 0",
    "PEEK",
    "POP",
    "PUSH 1",
    "PEEK"
]); // 8
digitStack(["POP", "POP"]); // 0
digitStack(["PUSH 9", "PUSH 9", "POP"]); // 9
digitStack([]); // 0;
