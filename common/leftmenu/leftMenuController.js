var app = angular.module("angularForm");
app.controller('leftMenuController', function($scope, $location, $localStorage, $state, $window) {
    $scope.isActive = function(viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };
    $scope.logout = function() {
        $localStorage = {};

        $state.go("login")
    }
})
