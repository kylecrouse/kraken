'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ngRoute', 'thFoursquareService', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.trips', 'mean.geo']);

angular.module('mean.system', []);
angular.module('mean.trips', []);
angular.module('mean.geo', []);