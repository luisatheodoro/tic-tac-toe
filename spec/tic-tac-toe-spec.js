describe('TicTacToe', function () {
    it('starts with the board clean', function(){
        game = new TicTacToe();
        expect(game.board()).toEqual([["", "", ""], ["", "", ""], ["", "", ""]]);
    });
});
