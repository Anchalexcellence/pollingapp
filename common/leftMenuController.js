var app = angular.module("angularForm");
app.controller('leftMenuController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };


})
