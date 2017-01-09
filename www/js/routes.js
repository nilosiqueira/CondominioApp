angular.module('starter').config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('home');

	$stateProvider

   	.state('home', {
       	url: '/home',
       	templateUrl: 'index.html',
    	controller: 'HomeController'
   	})

   	.state('atas', {
       	url: '/atas',
       	templateUrl: 'templates/atas.html',
    	controller: 'AtasController'
   	});

});  