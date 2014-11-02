(function () {
    "use strict";

    angular.module("app").controller("gameCtrl", function ($scope) {
        $scope.game = new Game();
    });
}());
