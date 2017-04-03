var app = angular.module("angularForm");
app.directive('myform', function() {
    return {
        restrict: "EAC",

        templateUrl: './common/form.html',
        scope: {
            parameter: '@',
            error1: '=',
            msg: '@',
            spin: '=',
            successalert: '=',
            callback: '&',
            change: '&'
        },
        controller: function($scope, $interval) {
            $scope.formdata = JSON.parse($scope.parameter);
            $interval(function() {
                if ($scope.successalert == true) {
                    $scope.form.$setPristine();
                }

            }, 2000)
        }
    }
});
