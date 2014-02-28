angular.module('CleverNote')
.controller('createEntryCntrl', ['$scope', '$http', function($scope, $http) {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";

  $scope.postEntry = function() {
    var noteData = {};
    noteData.title= $scope.noteTitle;
    noteData.tags = ["temp"];
    noteData.body = $scope.noteEntry;
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
