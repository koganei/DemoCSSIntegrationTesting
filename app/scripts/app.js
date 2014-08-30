'use strict';

/**
 * @ngdoc overview
 * @name cssintegrationTestingApp
 * @description
 * # cssintegrationTestingApp
 *
 * Main module of the application.
 */
angular
  .module('cssintegrationTestingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'awesometable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
