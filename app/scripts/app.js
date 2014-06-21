'use strict';

/**
 * @ngdoc overview
 * @name danaSiGionroApp
 * @description
 * # danaSiGionroApp
 *
 * Main module of the application.
 */
angular
  .module('danaSiGionroApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
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
  })
  .value('config', {
    fireBaseUrl: 'https://crackling-fire-3057.firebaseio.com/dana-si-gion-ro'
  });
