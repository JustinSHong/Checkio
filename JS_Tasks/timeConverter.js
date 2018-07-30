// Task Description:
// You are the modern man who prefers the 24-hour time format. But the 12-hour format is used in some places.
// Your task is to convert the time from the 12-h format into 24-h by following the next rules:
// - the output format should be 'hh:mm'
// - if the output hour is less than 10 - write '0' before it.
// For example: '09:05'

// Test Cases:
timeConverter("12:30 p.m."); // '12:30'
timeConverter("9:00 a.m."); // '09:00'
timeConverter("11:15 p.m."); // '23:15'
