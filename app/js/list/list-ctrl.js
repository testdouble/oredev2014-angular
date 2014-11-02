(function () {
    "use strict";

    angular.module("app").controller("listCtrl", function ($scope) {
        $scope.tasks = window.tasks;

        $scope.addTask = function (description) {
            alert(description);
        };
    });

}());
