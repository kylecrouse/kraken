'use strict';

angular.module('krakenApp', [
    'ngRoute'
  ])
  .constant('CLIENT_ID','S0QYY1JY0F3ORLDU03DV4AU2BSKERTBI0DQSQVEV3JUYNKN5')
  .constant('CLIENT_SECRET', '4PSA4JVZH0LMQC0EDWP23X5GE1Z3WOP3L3OLAOV11QN5CFUV')
  .config(function krakenApp($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/trip/:tripId', {
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl'
      })
      .when('/place/:placeId', {
        templateUrl: 'views/place.html',
        controller: 'PlaceCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html',
        controller: 'SearchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
