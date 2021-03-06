// Task Description
// As input you'll get a multiline string consists of '0' and '#' - a view of a stone wall from above.
// The '#' will show the stone part of the wall and the '0' will show the empty part.
// The relative location of you and the wall is as follows: you look at the array from the bottom of it.
// Your task is to find the index of the place where the wall is the narrowest (as shown at the picture below).
// The width of the wall is the height of the columns of the array (multiline string).
// If there are several such places, return the index of leftmost. Index starts from 0.

// NAIVE SOLUTION
function stoneWall(wall) {
    const split = wall.trim().split("\n");
    const hash = {};
    const maxWidth = split.length;
    const maxLen = split[0].length;
    // score the thinness of each column in the wall and store the score in hash
    for (let i = 0; i < maxWidth; i++) {
        let layer = split[i];
        for (let j = 0; j < maxLen; j++) {
            if (layer[j] == "0" && !hash[j]) {
                hash[j] = 1;
            } else if (layer[j] == "0" && hash[j]) {
                hash[j]++;
            }
        }
    }
    // find the leftmost col with the larget thinScore
    const columns = Object.keys(hash);
    let thinScore = 0;
    let target = 0;
    columns.forEach((c, index) => {
        if (thinScore < hash[c]) {
            thinScore = hash[c];
            target = parseInt(c, 10);
        }
    });
    // if no thin spots exist return 0
    return target;
}

// TRANSPOSE MATRIX
function stoneWall(wall) {
    const split = wall.trim().split("\n");
    let thinScore = 0;
    let hash = {};
    // transpose matrix
    const splitLayers = split.map(row => {
        return row.split("");
    });

    const transposed = splitLayers[0].map((_, index) => {
        return splitLayers.map(row => {
            if (!hash[index] && row[index] == "0") {
                hash[index] = 0;
                hash[index]++;
            } else if (hash[index] && row[index] == "0") {
                hash[index]++;
            }
            return row[index];
        });
    });
    let target = 0;
    const columns = Object.keys(hash);
    columns.forEach(c => {
        if (thinScore < hash[c]) {
            thinScore = hash[c];
            target = parseInt(c, 10);
        }
    });
    return target;
}

// Test Cases:
stoneWall(`
##########
####0##0##
00##0###00
`); // 4;

stoneWall(`
#00#######
#######0##
00######00
`); // 1;

stoneWall(`
#####
#####
#####
`); // 0;
