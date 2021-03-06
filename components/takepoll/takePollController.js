var app = angular.module("angularForm");
var localData = [];
app.controller("takePollController", function($scope, $state, getDataFactory, $localStorage) {

    url = "/list_polls";
    getDataFactory.getData(url).get().$promise
        .then(function(response) {

            if (!response.error) {
                $scope.records = [];
                localData.push({ "id": $localStorage.id })
                for (var i = 0; i < response.data.length; i++) {
                    if (response.data[i].options.length == 4 && (response.data[i].title != '')) {
                        $scope.records.push(response.data[i])
                    }
                }
                for (var i = 0; i < $scope.records.length; i++) {
                    for (var j = 0; j < localData.length; j++) {
                        if ($scope.records[i]._id == localData[j].id) {
                            var index = $scope.records.indexOf($scope.records[i]);
                            $scope.records.splice(index, 1);

                        }
                    }

                }
            }
        })
    $scope.submit = function(data, option) {
        if (option == undefined) {
            $scope.isLoading = false;
        } else {
            $scope.isLoading = true;
            $localStorage.id = data._id;
            option.id = data._id;
            url = "/do_vote";
            getDataFactory.getData(url).get(option).$promise
                .then(function(response) {
                    $scope.isLoading = false;
                    if (!response.error) {
                        $state.go('leftmenu.viewparticularpoll');
                    }
                })
        }
    }
});
