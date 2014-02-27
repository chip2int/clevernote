angular.module('CleverNote')
.factory('readEntryService', ['$scope', function($scope){
	return {
		readEntry: function(data) {
			console.log("data", data);
			$scope.noteTitle = data;
		}
	};
}]);