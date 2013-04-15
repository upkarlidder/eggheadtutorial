// var myApp = angular.module('myApp.controllers',[]);

// myApp.factory('Data', function(){
// 	return {message:"I am data from a service"};
// });


// myApp.filter('reverse', function(Data){
// 	return function(str){
// 		return str.split("").reverse().join("") + "**"+ Data.message;
// 	}
// })  

function FirstCtrl($scope, Data){
	$scope.data = Data;
}

function SecondCtrl($scope, Data){
	$scope.data = Data;

	$scope.reversedMessage = function(str){
		return str.split("").reverse().join("");
	}
}