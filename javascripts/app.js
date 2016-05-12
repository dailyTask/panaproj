angular.module("App", ["ngMaterial","ui.router","firebase","ang-drag-drop"])


    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider


            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: "homeCtrl"
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: "loginCtrl"
            });
        $urlRouterProvider.otherwise('/login');
    });


