var app = angular.module("angularForm");
app.controller("viewPollController", function($scope, $state, getDataFactory, $localStorage, $timeout) {
    if ($localStorage.role == "admin") {
        $scope.deleteButton = true;
    } else {
        $scope.deleteButton = false;
    }
    $scope.isLoading = false;
    $scope.viewdata = function() {
        $timeout(function() {
            url = "/list_polls";
            getDataFactory.getData(url).get().$promise
                .then(function(response) {
                    if (!response.error) {
                        $scope.records = [];
                        for (var i = 0; i < response.data.length; i++) {
                            if (response.data[i].options.length == 4) {
                                $scope.records.push(response.data[i])

                            }
                        }
                    }
                })
        }, 1000);
    }

    $scope.delete = function(data) {
        $scope.isLoading = true;
        url = "/delete_poll"
        $scope.deletedata = {}
        $scope.deletedata.id = data._id;

        getDataFactory.getData(url).get($scope.deletedata).$promise
            .then(function(response) {
                $scope.isLoading = false;
                if (!response.error) {
                    $scope.viewdata();
                }
            })
    }
    $scope.viewdata();

});
