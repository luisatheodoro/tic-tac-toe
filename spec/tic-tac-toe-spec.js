describe('TicTacToe', function () {
    var game;

    beforeEach(function() {
        game = new TicTacToe();
    });

    it('starts with the board clean', function(){
        expect(game.board()).toEqual([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ]);
    });
});
