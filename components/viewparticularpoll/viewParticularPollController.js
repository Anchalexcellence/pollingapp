var app = angular.module("angularForm");
app.controller("viewParticularPollController", function($scope, getDataFactory, $localStorage, $state) {
    url = "/list_poll";
    var data = {};
    data.id = $localStorage.id;
    getDataFactory.getData(url).get(data).$promise
        .then(function(response) {
            if (!response.error) {
                $scope.records = response.data;
            }
        })
    $scope.back = function() {
        $state.go('takepoll');
    }

});
