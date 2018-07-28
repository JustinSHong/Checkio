// Task Description:
// Let's continue examining words. You are given two string with words separated by commas.
// Try to find what is common between these strings. The words are not repeated in the same string.

// Your function should find all of the words that appear in both strings.
// The result must be represented as a string of words separated by commas in alphabetic order.

// Input: Two arguments as strings.
// Output: The common words as a string.

// Test Cases:
commonWords("hello,world", "hello,earth"); // "hello", "Hello"
commonWords("one,two,three", "four,five,six"); // "", "Too different"
commonWords("one,two,three", "four,five,one,two,six,three"); // "one,three,two", "1 2 3"
