var app = angular.module("angularForm");
app.directive('myform', function() {
    return {
        restrict: "EAC",
        templateUrl: './common/form.html',
        transclude: true,
        scope: {
            parameter: '@',
            error1: '=',
            msg: '@',
            spin: '=',
            successalert: '=',
            callback: '&',
            change: '&'
        },
        controller: function($scope) {
            $scope.formdata = JSON.parse($scope.parameter);

        }
    }
});
