// Task Description
// As input you'll get a multiline string consists of '0' and '#' - a view of a stone wall from above.
// The '#' will show the stone part of the wall and the '0' will show the empty part.
// The relative location of you and the wall is as follows: you look at the array from the bottom of it.
// Your task is to find the index of the place where the wall is the narrowest (as shown at the picture below).
// The width of the wall is the height of the columns of the array (multiline string).
// If there are several such places, return the index of leftmost. Index starts from 0.

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
