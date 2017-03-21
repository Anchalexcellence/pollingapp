var app = angular.module("angularForm");

app.factory("getDataFactory", function(configuration, $resource) {
    console.log(configuration.apihost);
    return {
        getData: function(url) {
            return $resource(configuration.apihost + url)
        },

    }
});
