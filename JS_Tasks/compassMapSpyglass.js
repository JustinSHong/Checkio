// Task Description
// Your task is to count the sum of the number of steps required to pick up all 3 items
//  - ('C' - compass), ('M' - map), ('S' - spyglass) from your starting position.
//  So the result will be the sum of distance from Y to C, from Y to M and from Y to S (not Y-C-M-S).
// Note that you can walk in 8 directions - left, right, up, down and sideways (on the diagonal in any direction).
// Your starting position is 'Y'.

// Input: Array with the objects placements.
// Output: The length of the path.

// Test Cases:
navigation([
    ["Y", 0, 0, 0, "C"],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    ["M", 0, 0, 0, "S"]
]); // 11
navigation([[0, 0, "C"], [0, "S", 0], ["M", "Y", 0]]); // 4
navigation([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, "M", 0, "S", 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, "C", 0, 0, 0],
    [0, "Y", 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]); // 9
