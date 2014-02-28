angular.module('CleverNote')
.controller('listEntriesCntrl', ['$scope', '$http', '$state', '$rootScope', function($scope, $http, $state, $rootScope) {
	$http({
		method:'GET',
		url: '/notes/list'
	})
	.success(function(data){
    console.log(data)
		$scope.listEntries = data;
	})

	$scope.alertEve = function(index) {
    var temp = $scope.listEntries[index];
    $rootScope.tempObj = temp;
    $state.go('displayEntry');
  }
}
]);