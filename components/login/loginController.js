var app = angular.module("angularForm");
app.controller("loginController", function($scope, $state, getDataFactory, $localStorage) {
    $scope.formdata = { title: "Login form", values: [{ Label: "User Name", Type: "text", Name: "username" }, { Label: "Password", Type: "password", Name: "password" }], button: { Type: "SUBMIT", Text: "Login" }, href: { Value: "register", Text: "New User" } };
    $scope.error = false;
    $scope.login = function(logininfo) {
        var data = { "username": logininfo[0].value, "password": logininfo[1].value }
        $scope.loading = true;
        url = "/login";
        getDataFactory.getData(url).get(data).$promise

            .then(function(response) {

            if (response.error) {
                $scope.loading = false;
                $scope.error = true;
                $scope.errMsg = response.data;
            } else {
                $localStorage.role = response.data.role;
                $localStorage.id = response.data._id;
                $state.go('leftmenu.createpoll');
            }
        })
    }
    $scope.change = function() {
        $scope.error = false;
    }
});
