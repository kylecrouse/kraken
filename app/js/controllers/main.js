'use strict';

angular.module('krakenApp')
  .controller('MainCtrl', [
    '$scope',
    '$http',
    function MainCtrl($scope, $http) {
      $http.get('data/trips.json').success(function (data) {
        $scope.trips = data;
      });
    }
  ]);
