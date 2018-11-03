// Task Description:
// You have to divide all your crew members into 2 teams with the next rules:
// those who are elder than 40 y.o. or younger than 20, should be on the first ship
// and all the others - on the second. It will helps the young sailors gain the experience of the elder collegues.
// The input data will be the dictionary where keys will be the surnames of the sailors and the values will be their ages.
// After the crew formating, you should sort all of the sailors in the alphabetical order in the each list of surname

function twoTeams(sailors) {
    const team1 = []; // holds sailors younger than 20 and older than 40
    const team2 = []; // holds sailors between the ages 20 and 40
    const sailorNames = Object.keys(sailors);

    sailorNames.forEach(sailor => {
        sailors[sailor] < 20 || sailors[sailor] > 40
            ? team1.push(sailor)
            : team2.push(sailor);
    });

    const sorted = [team1.sort(), team2.sort()];
    return sorted;
}

// Test Cases
twoTeams({
    Smith: 34,
    Wesson: 22,
    Coleman: 45,
    Abrahams: 19
});
// [["Abrahams", "Coleman"], ["Smith", "Wesson"]];

twoTeams({
    Fernandes: 18,
    Johnson: 22,
    Kale: 41,
    McCortney: 54
});
// [["Fernandes", "Kale", "McCortney"], ["Johnson"]];
