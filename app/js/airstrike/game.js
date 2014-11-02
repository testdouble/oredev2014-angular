(function () {
    "use strict";

    function Game() {
        var self = this;
        self.lastShot = null;
        self.enemyShips = ["A1", "B1", "C2", "C3", "C4"];
    }

    Game.prototype.fire = function (shot) {
        var self = this;
        self.lastShot = shot;
    };

    Game.prototype.status = function () {
        var self = this;
        if (self.lastShot === null) {
            return "You may fire when ready.";
        } if (self.enemyShips.indexOf(self.lastShot) > -1) {
            return "HIT!";
        } else {
            return "MISS!";
        }
    };

    window.Game = Game;
}());
