var app = angular.module("angularForm", ['ui.router', 'ngStorage', 'angularUtils.directives.dirPagination', 'ngResource']);
app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'components/registration/registrationForm.html',
            controller: 'registrationController',
        })
        .state('login', {
            url: '/login',
            templateUrl: 'components/login/loginForm.html',
            controller: 'loginController',
        })
        .state('leftmenu', {
            url: '/leftmenu',
            templateUrl: 'common/leftMenu.html',


        })
        .state('leftmenu.createpoll', {

            templateUrl: 'components/createpoll/createPoll.html',
            controller: 'createPollController',

        })
        .state('leftmenu.viewpoll', {

            templateUrl: 'components/viewpoll/viewPoll.html',
            controller: 'viewPollController',

        })
        .state('leftmenu.takepoll', {

            templateUrl: 'components/takepoll/takePoll.html',
            controller: 'takePollController',

        })
        .state('viewparticularpoll', {
            url: '/viewparticularpoll',
            templateUrl: 'components/viewparticularpoll/viewParticularPoll.html',
            controller: 'viewParticularPollController',
        })
})
