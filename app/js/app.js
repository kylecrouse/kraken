'use strict';

angular.module('krakenApp', [
    'ngRoute'
  ])
  .config(['$routeProvider', function krakenApp($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trip/:tripId', {
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
