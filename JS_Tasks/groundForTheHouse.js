// Task Description
// Purchasing land in a picturesque place have been one of your long-held wishes.
// You’ve dreamed of building a house there and breeding the rare species.
// All of this requires a considerable amount of money that are likely to come into your possession in the near future.
// As the input data you will get the multiline string consists of '0' & '#'.
// where '0' means the empty piece of the ground and the '#' is the piece of your house.
// Your task is to count the minimal area of the rectangle ground which is enough for the building.

// Test Cases:
house(`
0000000
##00##0
######0
##00##0
#0000#0
`); // 24

house(`0000000000
#000##000#
##########
##000000##
0000000000
`); // 30

house(`0000
0000
#000
`); // 1

house(`0000
0000
`); // 0

house(`0##0
0000
#00#
`); // 12
