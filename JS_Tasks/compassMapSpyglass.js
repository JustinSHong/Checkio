// Task Description
// Your task is to count the sum of the number of steps required to pick up all 3 items
//  - ('C' - compass), ('M' - map), ('S' - spyglass) from your starting position.
//  So the result will be the sum of distance from Y to C, from Y to M and from Y to S (not Y-C-M-S).
// Note that you can walk in 8 directions - left, right, up, down and sideways (on the diagonal in any direction).
// Your starting position is 'Y'.

// Input: Array with the objects placements.
// Output: The length of the path.

function navigation(seaside) {
    // initialize coordinates [x, y]
    let y = [0, 0];
    let c = [0, 0];
    let m = [0, 0];
    let s = [0, 0];
    // determine coordinates for y, c, m, s
    seaside.forEach((row, index) => {
        for (let i = 0; i < row.length; i++) {
            if (row[i] == "Y") {
                y[0] = i;
                y[1] = index;
            } else if (row[i] == "C") {
                c[0] = i;
                c[1] = index;
            } else if (row[i] == "M") {
                m[0] = i;
                m[1] = index;
            } else if (row[i] == "S") {
                s[0] = i;
                s[1] = index;
            }
        }
    });

    // distances are the maximum of the coordinate values between items
    let yToC = Math.max(Math.abs(y[0] - c[0]), Math.abs(y[1] - c[1]));
    let yToM = Math.max(Math.abs(y[0] - m[0]), Math.abs(y[1] - m[1]));
    let yToS = Math.max(Math.abs(y[0] - s[0]), Math.abs(y[1] - s[1]));

    // calculate total distance
    return yToC + yToM + yToS;
}

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
