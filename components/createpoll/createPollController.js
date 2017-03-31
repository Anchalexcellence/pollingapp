var app = angular.module("angularForm");
app.controller("createPollController", function($scope, getDataFactory, $timeout, $localStorage, $state) {
    $scope.formdata = {
        title: "Create Poll",
        values: [{ Label: "Enter Question", Type: "text", Name: "question" }, { Label: "Enter Option 1", Type: "text", Name: "option1" }, { Label: "Enter Option 2", Type: "text", Name: "option2" }, { Label: "Enter Option3", Type: "text", Name: "option3" }, { Label: "Enter Option 4", Type: "text", Name: "option4" }],
        button: { Type: "button", Text: "Submit" },
    }
    $scope.success = false;
    $scope.loading = false;
    $scope.error = false;

    $scope.options = [];
    $scope.submit = function(polldata) {
        $scope.formdata = polldata;
        $scope.loading = true;
        var data = {};
        var options = polldata[1].value + "____" + polldata[2].value + "____" + polldata[3].value + "____" + polldata[4].value;
        data = { "title": polldata[0].value, "options": options }
        url = "/add_poll";
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
                        $state.go('leftmenu.createpoll');
                        for (var i = 0; i < $scope.formdata.length; i++) {
                            $scope.formdata[i].value = "";
                        }

                    }, 3000)

                }
            })
    }


});
