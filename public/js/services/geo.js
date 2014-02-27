'use strict';

//Trips service used for trips REST endpoint
angular.module('mean.geo').factory('Geo', ['$q', '$rootScope', function($q, $rootScope) {
    var apply = function () {
        $rootScope.$apply();
    };

    var locate = function () {
        var defer = $q.defer();
        navigator.geolocation.getCurrentPosition(
            function (position) {
                defer.resolve(position);
                apply();
            },
            function(error) {
                defer.reject(error);
                apply();
            });
        return defer.promise;
    };

    return {
        locate: locate
    };
}]);