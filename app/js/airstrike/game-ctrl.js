(function () {
    "use strict";

    angular.module("app").controller("gameCtrl", function ($scope) {
        var lastShot = null;
        var enemyShips = ["A1", "B1", "C2", "C3", "C4"];

        $scope.status = function () {
            if (lastShot === null) {
                return "You may fire when ready.";
            } if (enemyShips.indexOf(lastShot) > -1) {
                return "HIT!";
            } else {
                return "MISS!";
            }
        };

        $scope.fire = function (shot) {
            lastShot = shot;
        };
    });
}());
