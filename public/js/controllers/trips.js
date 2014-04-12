'use strict';

angular.module('mean.trips').controller('TripsController', ['$scope', '$routeParams', '$location', 'Global', 'Trips', 'Geo', 'thFoursquare', function ($scope, $routeParams, $location, Global, Trips, Geo, thFoursquare) {
    $scope.global = Global;

    $scope.create = function() {
        var trip = new Trips({
            title: this.title,
            content: this.content
        });
        trip.$save(function(response) {
            $location.path('trips/' + response._id);
        });

        this.title = '';
        this.content = '';
    };

    $scope.remove = function(trip) {
        if (trip) {
            trip.$remove();

            for (var i in $scope.trip) {
                if ($scope.trip[i] === trip) {
                    $scope.trip.splice(i, 1);
                }
            }
        }
        else {
            $scope.trip.$remove();
            $location.path('trips');
        }
    };

    $scope.update = function() {
        var trip = $scope.trip;
        if (!trip.updated) {
            trip.updated = [];
        }
        trip.updated.push(new Date().getTime());

        trip.$update(function() {
            $location.path('trips/' + trip._id);
        });
    };

    $scope.find = function() {
        Trips.query(function(trips) {
            $scope.trips = trips;
        });
    };

    $scope.findOne = function() {
        Trips.get({
            tripId: $routeParams.tripId
        }, function(trip) {
            $scope.trip = trip;
        });
    };

    $scope.search = function() {
        var query = this.query;
        Geo.locate().then(function (position) {
            $scope.search = thFoursquare.api.venues.search({ ll: position.coords.latitude + ',' + position.coords.longitude, limit: 10, query: query, intent: 'global' });
        });
    };

    $scope.add = function(venue) {
        var trip = $scope.trip;
        if (!trip.venues) {
            trip.venues = [];
        }
        trip.venues.push(venue);
        $scope.search = null;
        $scope.query = null;
        $scope.update();
    };

    $scope.delete = function(venue) {
        var venues = $scope.trip.venues;
        var index = venues.indexOf(venue);
        venues.splice(index, 1);
        $scope.update();
    };
}]);