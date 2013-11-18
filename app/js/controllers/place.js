'use strict';

angular.module('krakenApp')
  .controller('PlaceCtrl', [
    '$scope',
    '$routeParams',
    '$http',
    function PlaceCtrl($scope, $routeParams, $http) {
      $http.get('data/places.json').success(function (data) {
        $scope.place = data[$routeParams.placeId];
      });
    }
  ]);
