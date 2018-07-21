// Task Description: 
// You are given a non-empty list of integers (X). 
// For this task, you should return a list consisting of only the non-unique elements in this list. 
// To do so you will need to remove all unique elements (elements which are contained in a given list only once). 
// When solving this task, do not change the order of the list. 
// Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and result will be [1, 3, 1, 3].


// Test Cases:
nonUniqueElements([1, 2, 3, 1, 3]) // [1, 3, 1, 3]
nonUniqueElements([1, 2, 3, 4, 5]) // []
nonUniqueElements([5, 5, 5, 5, 5]) // [5, 5, 5, 5, 5]
nonUniqueElements([10, 9, 10, 10, 9, 8]) // [10, 9, 10, 10, 9]