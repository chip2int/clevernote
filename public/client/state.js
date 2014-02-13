angular.module('CleverNote')
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('main', {
		url: '/main',
		templateUrl: 'client/createEntry.html',
		controller: 'createEntryCntrl',
	})
	.state('search', {
		url: '/search',
		templateUrl: 'client/search.html'
	})
	.state('folders', {
		url: '/folders',
		templateUrl: 'client/folders.html'
	})
	.state('tags', {
		url: '/tags',
		templateUrl: 'client/tags.html'
	})	

});
	