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
	.state('list', {
		url: '/listEntries',
		templateUrl: 'client/listEntries.html'
	})
	.state('tags', {
		url: '/tags',
		templateUrl: 'client/tags.html'
	})
	.state('displayEntry', {
		url: '/displayEntry',
		templateUrl: 'client/displayEntry.html'
	})	

});
	