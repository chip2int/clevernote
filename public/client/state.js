angular.module('CleverNote')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('main', {
		url: '/main',
		templateUrl: 'client/main.html'
	})
	.state('search', {
		url: '/search',
		templateUrl: 'client/search.html'
	})
});
