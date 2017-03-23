var app = angular.module("angularForm");
app.controller("loginController", function($scope, $state, getDataFactory) {
    $scope.login = function(data) {
        url = "/login";
        getDataFactory.getData(url).get(data).$promise
            .then(function(response) {
                if (response.error) {
                    $scope.alertLoginError = true;
                    $scope.loginErrrMsg = response.data;
                } else {
                    $scope.form.$setPristine();
                    $scope.user = {};
                    $state.go('leftmenu.createpoll');
                }
            })
    }
    $scope.change = function() {
        $scope.alertLoginError = false;
    }
});
