function TicTacToe() {
    this._board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
}

TicTacToe.prototype.board = function() {
    return this._board;
};
