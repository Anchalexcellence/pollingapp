var app = angular.module("angularForm");
app.controller("loginController", function($scope, $state, getDataFactory, $localStorage) {
    $scope.isLoading = false;
    $scope.login = function(data) {
        $scope.isLoading = true;
        url = "/login";
        getDataFactory.getData(url).get(data).$promise

            .then(function(response) {
            $scope.isLoading = false;
            if (response.error) {
                $scope.isLoading = "false";
                $scope.alertLoginError = true;
                $scope.loginErrrMsg = response.data;
            } else {
                $localStorage.role = response.data.role;
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
