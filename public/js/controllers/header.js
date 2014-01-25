'use strict';

angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        'title': 'Trips',
        'link': 'trips'
    }, {
        'title': 'Create New Trip',
        'link': 'trips/create'
    }];
    
    $scope.isCollapsed = false;
}]);