// Task Description
// Tic-Tac-Toe, sometimes also known as Xs and Os, is a game for two players (X and O) who take turns marking the spaces in a 3Ă3 grid.
// The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal rows (NW-SE and NE-SW) wins the game.
// But we will not be playing this game. You will be the referee for this games results.
// You are given a result of a game and you must determine if the game ends in a win or a draw as well as who will be the winner. Make sure to return "X" if the X-player wins and "O" if the O-player wins. If the game is a draw, return "D".
// A game's result is presented as a list of strings, where "X" and "O" are players' marks and "." is the empty cell.

// Input: A game result as a list of strings (unicode).
// Output: "X", "O" or "D" as a string.

function xoReferee(board) {
    let col1 = "",
        col2 = "",
        col3 = "",
        diagLR = "",
        diagRL = "";

    for (let i = 0; i < board.length; i++) {
        const row = board[i];
        if (row == "XXX") return "X";
        else if (row === "OOO") return "O";
        col1 += row[0];
        col2 += row[1];
        col3 += row[2];
        diagLR += row[i];
        diagRL += row[2 - i];
    }
    if (
        col1 == "XXX" ||
        col2 == "XXX" ||
        col3 == "XXX" ||
        diagLR == "XXX" ||
        diagRL == "XXX"
    )
        return "X";
    else if (
        col1 == "OOO" ||
        col2 == "OOO" ||
        col3 == "OOO" ||
        diagLR == "OOO" ||
        diagRL == "OOO"
    )
        return "O";
    else {
        return "D";
    }
}

// Test Cases:
xoReferee(["X.O", "XX.", "XOO"]); // "X"
xoReferee(["OO.", "XOX", "XOX"]); // "O"
xoReferee(["OOX", "XXO", "OXX"]); // "D"
