var app = angular.module("angularForm");
app.controller("viewPollController", function($scope, $state, getDataFactory, $localStorage, $timeout) {


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
    if ($localStorage.role == "admin") {
        $scope.deleteButton = true;
    }
    $scope.delete = function(data) {
        url = "/delete_poll"
        deletedata = {}
        deletedata.id = data._id;
        console.log(deletedata)
        getDataFactory.getData(url).get(deletedata).$promise
            .then(function(response) {
                if (!response.error) {
                    $scope.viewdata();
                }
            })
    }
    $scope.viewdata();

});
