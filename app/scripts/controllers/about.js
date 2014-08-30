'use strict';

/**
 * @ngdoc function
 * @name cssintegrationTestingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cssintegrationTestingApp
 */
angular.module('cssintegrationTestingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
