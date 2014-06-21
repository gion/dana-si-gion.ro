'use strict';

/**
 * @ngdoc function
 * @name danaSiGionroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the danaSiGionroApp
 */
angular.module('danaSiGionroApp')
  .controller('MainCtrl', ['$scope', '$rootScope', 'config', '$firebase', '$timeout',
  	function ($scope, $rootScope, config, $firebase, $timeout) {
		//$firebase
		var ref = new Firebase(config.fireBaseUrl + '/registered-users');
		$scope.registeredUsers = $firebase(ref);

		// trigger the stamp-shake animation
		$timeout(function() {
			$rootScope.shakeIt = true;
		}, 1000);

		var mouseMoveTimeout;

		$scope.mouseMove = function() {
			console.log('da');
			$timeout.cancel(mouseMoveTimeout);
			$scope.showOverlay = true;
			mouseMoveTimeout = $timeout(function() {
				console.log('nu');
				$scope.showOverlay = false;
			}, 3000);
		}
	  }
  ]);
