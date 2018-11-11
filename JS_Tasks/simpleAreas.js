// Task Description
// Stephan works with simple forms when constructing something, and he needs some programming tools to calculate his expenses.
// Let's take a trip back to our school days and pull out some simple geometry for this.

// You should write a function to calculate the area of simple figures: circles, rectangles and triangles.
// You are give an arbitrary number of arguments and depending on this, the function calculates area for the different figures.

// One argument -- The diameter of a circle and you need to calculate the area of this circle.
// Two arguments -- The side lengths of a rectangle and you need to calculate the area of this rectangle.
// Three arguments -- The lengths of each side of a triangle and you need to calculate the area of this triangle.

// The result should be given with two-digit precision as ±0.01.
// Input: One, two or three arguments as floats or as integers.
// Output: The area of the circle, rectangle or triangle as a float.

function simpleAreas(ints) {
    var args = Array.from(arguments);
    switch (args.length) {
        case 1:
            // find area of a circle
            const areaOfCircle = Math.PI * Math.pow(args / 2, 2);
            return parseFloat(areaOfCircle.toFixed(2), 10);
        case 2:
            // find area of a rectangle
            const areaOfRect = args[0] * args[1];
            return areaOfRect;
        case 3:
            // find area of a triangle with Hero's Formula
            const perimeter = (args[0] + args[1] + args[2]) / 2;
            const areaOfTriangle = Math.sqrt(
                perimeter *
                    (perimeter - args[0]) *
                    (perimeter - args[1]) *
                    (perimeter - args[2])
            );
            return parseFloat(areaOfTriangle.toFixed(2), 10);
        default:
            return 0;
    }
}

// Test Cases:
simpleAreas(3); // 7.07
simpleAreas(2, 2); // 4
simpleAreas(2, 3); // 6
simpleAreas(3, 5, 4); // 6
simpleAreas(1.5, 2.5, 2); // 1.5
