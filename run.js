var app = angular.module("angularForm");
app.run(function($rootScope, $location, $localStorage) {
    $rootScope.$on('$locationChangeStart', function() {
        var arrayExternalPages = ['/login', '/register']
        var internalPages = arrayExternalPages.indexOf($location.path()) === -1;
        if (internalPages && !$localStorage.id) {
            $location.path('/login');
        }
        var arrayInternalPage = ['/leftmenu/createpoll', '/leftmenu/viewpoll', '/leftmenu/takepoll', '/leftmenu/viewparticularpoll']
        var externalPages = arrayInternalPage.indexOf($location.path()) === -1;
        if (externalPages && $localStorage.id) {
            $location.path('/leftmenu/createPoll');
        }

    });
});
