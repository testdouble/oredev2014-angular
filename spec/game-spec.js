describe("A game of airstrike", function () {
    var game = null;
    beforeEach(function () {
        game = new Game();
    });

    it("displays default message before the first shot", function () {
        expect(game.status()).toBe("You may fire when ready.");
    });

    it("Players can hit enemy ships", function () {
        game.fire("A1");
        expect(game.status()).toBe("HIT!");
    });

    it("Players can miss enemy ships", function () {
        game.fire("A4");
        expect(game.status()).toBe("MISS!");
    });
});
