var app = angular.module("angularForm");
app.controller("createPollController", function($scope, getDataFactory, $timeout) {
    $scope.formdata = {
        title: "Create Poll",
        values: [{ Label: "Enter Question", Type: "text", Name: "question" }, { Label: "Enter Option 1", Type: "text", Name: "option1" }, { Label: "Enter Option 2", Type: "text", Name: "option2" }, { Label: "Enter Option3", Type: "text", Name: "option3" }, { Label: "Enter Option 4", Type: "text", Name: "option4" }],
        button: { Type: "button", Text: "Submit" },
    }
    $scope.success = false;
    $scope.loading = false;
    $scope.alertCretePollSuccess = false;
    $scope.alertCreatePollError = false;
    $scope.createPollErrMsg = '';
    $scope.options = [];
    $scope.submit = function(polldata) {
        $scope.isLoading = true;
        var data = {};
        var options = polldata[1].value + "____" + polldata[2].value + "____" + polldata[3].value + "____" + polldata[4].value;
        data = { "title": polldata[0].value, "options": options }
        url = "/add_poll";
        getDataFactory.getData(url).get(data).$promise
            .then(function(response) {
                $scope.isLoading = false;
                if (response.error) {
                    $scope.alertCreatePollError = true;
                    $scope.createPollErrMsg = response.data;
                } else {
                    $scope.success = true;
                    $timeout(function() {
                        $scope.success = false;
                        $scope.title = '';
                        $scope.options = {};

                    }, 3000)

                }
            })
    }

});
