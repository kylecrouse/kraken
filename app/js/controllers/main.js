'use strict';

angular.module('krakenApp')
  .controller('MainCtrl',
    function ($scope, $http) {
      $http.get('data/trips.json').success(function (data) {
        $scope.trips = data;
      });
    }
  )
  .controller('TripCtrl',
    function ($scope, $routeParams, $http) {
      $http.get('data/trips.json').success(function (data) {
        $scope.trip = data[$routeParams.tripId];
      });
    }
  )
  .controller('PlaceCtrl',
    function ($scope, $routeParams, $http) {
      $http.get('data/places.json').success(function (data) {
        $scope.place = data[$routeParams.placeId];
      });
    }
  )
  .controller('SearchCtrl',
    function ($scope, $http, $q, CLIENT_ID, CLIENT_SECRET) {
      navigator.geolocation.getCurrentPosition(function (position) {
        $http.get('https://api.foursquare.com/v2/venues/search?ll=' + position.coords.latitude + ',' + position.coords.longitude + '&limit=10&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=20130425').success(function (data) {
          $scope.venues = data.response.venues;
        });
      });

      $scope.getVenues = function (query) {
        navigator.geolocation.getCurrentPosition(function (position) {
          $http.get('https://api.foursquare.com/v2/venues/search?ll=' + position.coords.latitude + ',' + position.coords.longitude + '&query=' + encodeURIComponent(query) + '&limit=10&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&v=20130425').success(function (data) {
            $scope.venues = data.response.venues;
          });
        });
      };
    }
  );
