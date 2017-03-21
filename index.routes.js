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
        .state('fetch', {
            url: '/fetch',
            templateUrl: 'components/fetch/fetch.html',
            controller: 'fetchDataController',
        })
        .state('createpoll', {
            url: '/createpoll',
            templateUrl: 'components/createpoll/createPoll.html',
            controller: 'createPollController',

        })
        .state('viewpoll', {
            url: '/viewpoll',
            templateUrl: 'components/viewpoll/viewPoll.html',
            controller: 'viewPollController',


        })
        .state('viewparticularpoll', {
            url: '/viewparticularpoll',
            templateUrl: 'components/viewparticularpoll/viewParticularPoll.html',
            controller: 'viewParticularPollController',
        })
        .state('takepoll', {
            url: '/takepoll',
            templateUrl: 'components/takepoll/takePoll.html',
            controller: 'takePollController',

        })


})
