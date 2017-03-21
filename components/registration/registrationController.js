var app = angular.module("angularForm");
app.controller("registrationController", function($scope, $http, getDataFactory, $timeout, $state) {
    $scope.alertsuccess = false;
    $scope.alerterror = false;
    $scope.errmsg = '';
    $scope.change = function() {
        $scope.alerterror = false;
    }
    $scope.submit = function(data) {
        url = "/add_user";
        getDataFactory.getData(url).get(data).$promise
            .then(function(response) {
                    if (response.error) {
                        $scope.alerterror = true;
                        $scope.errmsg = response.message;
                    } else {

                        $scope.alertsuccess = true;
                        $scope.form.$setPristine();
                        $timeout(function() {
                            $scope.alertsuccess = false;
                            $scope.user = {};
                            $state.go('login');
                        }, 3000)

                    }
                }

            )
    }
})
