'use strict';

//Trips service used for trips REST endpoint
angular.module('mean.trips').factory('Trips', ['$resource', function($resource) {
    return $resource('trips/:tripId', {
        tripId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);