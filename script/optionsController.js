myServiceApp.controller('optionsController',['$scope', '$state' , function ($scope, $state) {
		
	$scope.init = function () {
		$scope.option1 = {
			"id" : "1",
			"name" : "Chocolate",
			"color" : "Brown",
			"description" : "Chocolate is brown in color. Kids love it"
		};

		$scope.option2 = {
			"id" : "2",
			"name" : "Strawberry", 
			"color" : "Dark Red",
			"description" : "Strawberry is red in color. Strawberry ice cream is popular among kids"
		};
	};

	$scope.showDescription = function () {
		console.log('Inside showDescription');
		console.log('$scope.option.id ' + $scope.option.id);
		$state.go("options.description", {optionID: $scope.option.id});
	};

	$scope.init();		
}]);
