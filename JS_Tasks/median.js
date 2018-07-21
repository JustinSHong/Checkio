// Task Description:
// A median is a numerical value separating the upper half of a sorted array of numbers from the lower half. 
// In a list where there are an odd number of entities, the median is the number found in the middle of the array. 
// If the array contains an even number of entities, then there is no single middle value, 
// instead the median becomes the average of the two numbers found in the middle. For this mission, you are given a non-empty array of natural numbers (X).
//  With it, you must separate the upper half of the numbers from the lower half and find the median.
function median(data) {
    const sorted = data.sort((a, b) => {
    	return a - b;
    });
    const len = data.length;
    // determine if the length of the data set is even or odd
    let median;
    // if len is odd: median is at index Math.floor(len / 2)
    if (len % 2 === 1) {
        median = data[Math.floor(len / 2)];
    }
    // if len is even: find average of nums at indices (len / 2) and (len / 2) - 1
    else {
        const upper = data[len / 2];
        const lower = data[(len / 2) - 1];
        median = (upper + lower) / 2;
    }
    return median;
}
// Test Cases:
median([1, 2, 3, 4, 5]) // 3
median([3, 1, 2, 5, 3]) // 2
median([1, 300, 2, 200, 1]) // 2
median([3, 6, 20, 99, 10, 15]) // 12.5