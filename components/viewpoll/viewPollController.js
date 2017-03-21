var app = angular.module("angularForm");
app.controller("viewPollController", function($scope, $state, getDataFactory) {
    url = "/list_polls";
    getDataFactory.getData(url).get().$promise
        .then(function(response) {

            if (response.error) {} else {
                $scope.records = [];
                for (var i = 0; i < response.data.length; i++) {

                    if (response.data[i].options.length == 4) {
                        $scope.records.push(response.data[i])

                    }

                }

            }

        })

});
