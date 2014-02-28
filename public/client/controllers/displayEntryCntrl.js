angular.module('CleverNote')
.controller('displayEntryCntrl', ['$scope', '$http', '$rootScope', '$state', function($scope, $http, $rootScope, $state) {

    if ($rootScope.tempObj === undefined) {
      $state.go('main');
    }

    $scope.noteDate = new Date($rootScope.tempObj["modifiedOn"]).toDateString() ;
    $scope.noteTitle = $rootScope.tempObj["title"];
    $scope.noteEntry = $rootScope.tempObj["body"];
    $rootScope.tempObj == undefined;

  $scope.updateEntry = function() {
    var noteData = {};
    noteData["title"]= $scope.noteTitle;
    noteData["tags"] = ["temp"];
    noteData["body"] = $scope.noteEntry;
    $http({
      url: '/notes/',
      method: "POST",
      data: JSON.stringify(noteData)
    })
    .success(function(){
      console.log("sucess");
    });
  };

  $scope.clearEntry = function() {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";
  };
}]);
