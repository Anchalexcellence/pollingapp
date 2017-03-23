var app = angular.module("angularForm");
app.controller("createPollController", function($scope, getDataFactory, $timeout) {
    $scope.alertCretePollSuccess = false;
    $scope.alertCreatePollError = false;
    $scope.createPollErrMsg = '';
    $scope.options = [];
    $scope.submit = function(data) {
        var data = {};
        var options = $scope.options[0] + "____" + $scope.options[1] + "____" + $scope.options[2] + "____" + $scope.options[3];
        data = { "title": $scope.title, "options": options }
        url = "/add_poll";
        getDataFactory.getData(url).get(data).$promise
            .then(function(response) {
                if (response.error) {
                    $scope.alertCreatePollError = true;
                    $scope.createPollErrMsg = response.data;
                } else {
                    $scope.alertCretePollSuccess = true;
                    $scope.createPollSuccessMsg = response.data;
                    $scope.form.$setPristine();
                    $timeout(function() {
                        $scope.alertCretePollSuccess = false;
                        $scope.title = '';
                        $scope.options = {};

                    }, 3000)

                }
            })
    }

});
