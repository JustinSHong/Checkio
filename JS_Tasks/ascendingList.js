// Task Description:
// Determine whether the sequence of elements items is ascending so that its each element is strictly larger
// than (and not merely equal to) the element that precedes it.

// Input: Iterable with ints.
// Output: Bool.

function isAscending(integers) {
    if (integers.length === 0 || integers.length === 1) return true;
    let prev = integers[0];

    for (let i = 1; i < integers.length; i++) {
        // previous int can not be greater than the current int
        if (integers[i] < prev || integers[i] === prev) return false;
        prev = integers[i];
    }
    // all integers are ascending
    return true;
}

// Test Cases
isAscending([-5, 10, 99, 123456]); // true
isAscending([99]); // true
isAscending([4, 5, 6, 7, 3, 7, 9]); // false
isAscending([]); // true
isAscending([1, 1, 1, 1]); // false
