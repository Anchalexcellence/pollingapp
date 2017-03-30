var app = angular.module("angularForm");

app.controller("registrationController", function($scope, $http, getDataFactory, $timeout, $state) {
    $scope.error = false;
    $scope.loading = false;
    $scope.success = false;
    $scope.formdata = {
        title: "Registration form",
        values: [{ Label: "User Name", Type: "text", Name: "username" }, { Label: "Password", Type: "password", Name: "password" }, { Label: "Role", Type: "select", Name: "role" }],
        button: { Type: "button", Text: "Submit" },
        href: { Value: "login", Text: "Login" },
        options: [{ Value: "admin", Text: "Admin" }, { Value: "user", Text: "User" }, { Value: "guest", Text: "Guest" }],
    }

    $scope.change = function() {
        $scope.error = false;
    }
    $scope.submit = function(registerinfo) {
        var data = { "username": registerinfo[0].value, "password": registerinfo[1].value, "role": registerinfo[2].value }
        $scope.loading = true;
        url = "/add_user";
        getDataFactory.getData(url).get(data).$promise
            .then(function(response) {
                    $scope.loading = false;
                    if (response.error) {

                        $scope.error = true;
                        $scope.errMsg = response.message;

                    } else {
                        $scope.success = true;

                        $timeout(function() {
                            $scope.success = false;


                            $state.go('login');
                        }, 3000)

                    }
                }

            )
    }
})
