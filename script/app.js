var myServiceApp = angular.module('myServiceApp', ['ui.router']);

myServiceApp.config(function ($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise("/options");
	$stateProvider
	.state('options',
	{
		url: "/options",
		controller: 'optionsController',
		templateUrl: 'options.html'
	})
	.state('options.description',
	{
		url: "/:optionID",
		controller: 'descriptionController',
		templateUrl: 'description.html'
	});
});
