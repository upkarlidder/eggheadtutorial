'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  .filter('reverse',['Data', function(Data){
  	return function(str){
  		return Data.message + " ** " + str.split("").reverse().join("");
  	}
  }]);