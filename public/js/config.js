'use strict';

//Setting up route
angular.module('mean').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
            .when('/trips', {
                templateUrl: 'views/trips/list.html'
            })
            .when('/trips/create', {
                templateUrl: 'views/trips/create.html'
            })
            .when('/trips/:tripId/edit', {
                templateUrl: 'views/trips/edit.html'
            })
            .when('/trips/:tripId', {
                templateUrl: 'views/trips/view.html'
            })
            .when('/', {
                templateUrl: 'views/index.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);

//Setting HTML5 Location Mode
angular.module('mean').config(['$locationProvider',
    function ($locationProvider) {
        $locationProvider.hashPrefix('!');
    }
]);

// Configure foursquare
angular.module('mean').config(['thFoursquareProvider',
    function (thFoursquareProvider) {
        thFoursquareProvider.config({
            clientId: 'S0QYY1JY0F3ORLDU03DV4AU2BSKERTBI0DQSQVEV3JUYNKN5',
            clientSecret: '4PSA4JVZH0LMQC0EDWP23X5GE1Z3WOP3L3OLAOV11QN5CFUV',
            redirectURI: 'YOUR_REGISTERED_REDIRECT_URI'
        });
    }
]);
