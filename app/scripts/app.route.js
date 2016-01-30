(function() {
    'use strict';

    angular
        .module('daksports')
        .config(function($urlRouterProvider, $stateProvider, $locationProvider) {
            // For any unmatched url, redirect to /
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: 'app/views/main/main.view.html',
                    controller: 'MainCtrl'
                });
            $locationProvider.html5Mode(true);
        });

})();
