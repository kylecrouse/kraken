'use strict';

angular.module('krakenApp')
  .controller('TripCtrl', [
    '$scope',
    '$routeParams',
    '$http',
    function TripCtrl($scope, $routeParams, $http) {
      $http.get('data/trips.json').success(function (data) {
        $scope.trip = data[$routeParams.tripId];
      });
    }
  ]);
