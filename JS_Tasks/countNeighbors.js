// Task Description: 
// In cellular automata, the Moore neighborhood comprises the eight cells surrounding a central cell on a two-dimensional square lattice. The neighborhood is named after Edward F. Moore, a pioneer of cellular automata theory. Many board games are played with a rectangular grid with squares as cells. For some games, it is important to know about the conditions of neighbouring cells for chip (figure, draught etc) placement and strategy.

// You are given a state for a rectangular board game grid with chips in a binary matrix, where 1 is a cell with a chip and 0 is an empty cell. You are also given the coordinates for a cell in the form of row and column numbers (starting from 0). You should determine how many chips are close to this cell. Every cell interacts with its eight neighbours; those cells that are horizontally, vertically, or diagonally adjacent.


// Test Cases:
countNeighbours([[1, 0, 0, 1, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0]], 1, 2) // 3

countNeighbours([[1, 0, 0, 1, 0],
                [0, 1, 0, 0, 0],
                [0, 0, 1, 0, 1],
                [1, 0, 0, 0, 0],
                [0, 0, 1, 0, 0]], 0, 0) // 1

countNeighbours([[1, 1, 1],
                [1, 1, 1],
                [1, 1, 1]], 0, 2) // 3

countNeighbours([[0, 0, 0],
                [0, 1, 0],
                [0, 0, 0]], 1, 1) // 0