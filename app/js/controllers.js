'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('FirstCtrl', ['$scope','Data',function($scope, Data) {
  	$scope.data = Data;
  	console.log('exiting first controller');
  }])
  .controller('SecondCtrl', ['$scope','Data',function($scope, Data) {
  	$scope.data = Data;
  	console.log('exiting second controller');
  }]);