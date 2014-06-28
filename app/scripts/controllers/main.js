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
			var mouseMoveTimeout;

			//$firebase
			var ref = new Firebase(config.fireBaseUrl + '/registered-users');
			$scope.registeredUsers = $firebase(ref);


			$scope.mouseMove = function() {
				$timeout.cancel(mouseMoveTimeout);
				$scope.showOverlay = true;
				mouseMoveTimeout = $timeout(function() {
					// $scope.showOverlay = false;
				}, 3000);
			};

			$scope.goTo = function($event, index) {
				// alert(index);
				$event.preventDefault();
				$event.stopPropagation();

				$scope.currentFieldIndex = Math.min(4, Math.max(1, index));
				return false;
			};

			$scope.keypress = function($event) {
				var tabPressed = $event.which == 9,
					shiftPressed = $event.shiftKey,
					newIndex;
				
				if(!tabPressed) {
					return;
				}

				if(shiftPressed) {
			        newIndex = $scope.currentFieldIndex - 1;
			    } else {
			        newIndex = $scope.currentFieldIndex + 1;
			    }

			    $scope.goTo($event, newIndex);
			};

			$scope.submit = function() {
				$scope.registeredUsers
					.$add({
						name: $scope.form.name,
						email: $scope.form.email,
						couple: !!$scope.form.couple
					})
					.then(function() {
						$scope.thanks = true;
					});

				// $scope.form = {};
			}
		}
 	]);
