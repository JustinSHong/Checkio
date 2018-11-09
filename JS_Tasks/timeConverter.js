// Task Description:
// You are the modern man who prefers the 24-hour time format. But the 12-hour format is used in some places.
// Your task is to convert the time from the 12-h format into 24-h by following the next rules:
// - the output format should be 'hh:mm'
// - if the output hour is less than 10 - write '0' before it.
// For example: '09:05'

function timeConverter(dayTime) {
    let result = "";
    const time = dayTime.split(":");
    const hours = time[0];
    const minutes = time[1].slice(0, 2);

    if (dayTime.includes("p.m.")) {
        if (parseInt(hours, 10) >= 1 && parseInt(hours, 10) < 12) {
            result += (parseInt(hours, 10) + 12).toString();
        } else {
            result += hours;
        }
    } else if (dayTime.includes("a.m")) {
        if (parseInt(hours, 10) <= 10) {
            result += "0" + hours;
        } else if (parseInt(hours, 10) === 12) {
            result += "00";
        } else {
            result += hours;
        }
    }
    result += ":" + minutes;
    return result;
}

// Test Cases:
timeConverter("12:30 p.m."); // '12:30'
timeConverter("9:00 a.m."); // '09:00'
timeConverter("11:15 p.m."); // '23:15'
