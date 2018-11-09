// Task Description
// We will emulate the stack process with Python. You are given a sequence of commands:
// - "PUSH X" -- add X in the stack, where X is a digit.
// - "POP" -- look and remove the top position. If the stack is empty, then it returns 0 (zero) and does nothing.
// - "PEEK" -- look at the top position. If the stack is empty, then it returns 0 (zero).
// The stack can only contain digits.

// You should process all commands and sum all digits which were taken from the stack ("PEEK" or "POP").
// Initial value of the sum is 0 (zero).

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
