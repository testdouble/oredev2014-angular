(function () {
    "use strict";

    window.tasks = [{
        description: "Add the ng-app='app' directive",
        complete: true,
    },{
        description: "Add ng-controller='listCtrl' to the same div",
        complete: true,
    },{
        description: "Add a listCtrl angular controller function in app/assets/javascripts/list/list_ctrl.js",
        complete: true,
    },{
        description: "In the controller, assign tasks to $scope.tasks",
        complete: false,
    },{
        description: "Use ng-repeat to render each li",
        complete: false,
    },{
        description: "Add a <input type='checkbox' ng-model='complete'> to mark tasks complete: https://docs.angularjs.org/api/ng/input/input[checkbox]",
        complete: false,
    },{
        description: "use ng-submit to push new tasks into the tasks array: https://docs.angularjs.org/api/ng/directive/ngSubmit",
        complete: false,
    },{
        description: "clear the input field after a new task has been added",
        complete: false,
    },{
        description: "**bonus** Complete tasks should be crossed off",
        complete: false,
    },{
        description: "**bonus** Allow users to delete tasks: http://stackoverflow.com/a/500617",
        complete: false,
    },{
        description: "**double bonus** Get tasks from the lineman server instead of this file. http://linemanjs.com/#api-integration",
        complete: false,
    }];

}());
