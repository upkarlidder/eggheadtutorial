'use strict';

/* Filters */

angular.module('myApp.filters', [])

  .filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])


  .filter('reverse',[function(){
  	return function(str){
  		if(str)
  			return str.split("").reverse().join("");
  		else 
  			return str;
  	}
  }]);