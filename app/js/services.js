'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  factory('Data', function(){
  	return {message:"I am data from a service"};
  });
