/*var app = angular.module("angularForm");
app.factory('Interceptor', function($localStorage) {
    return {
        request: function(config) {
            if (config.url != 'angularUtils.directives.dirPagination.template') {
                config.url = config.url + '?accessToken=' + $localStorage.token;
            }
            console.log(">>>>>>>>>>>>>>>>>>>>>", config)
            return config;

        }
    }
});
*/
