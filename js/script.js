var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
	$scope.submitForm = function(){
		console.log($scope.user);
	}
});