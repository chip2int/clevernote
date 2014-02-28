angular.module('CleverNote')
.controller('createEntryCntrl', ['$scope', '$http', function($scope, $http) {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";
    $scope.tagArray = [];

  $scope.postEntry = function() {
    var noteData = {};

    noteData["title"]= $scope.noteTitle;
    //noteData["Tags"] = $scope.tagArray;
    noteData["body"] = $scope.noteEntry;

    $http({
      url: '/notes/',
      method: "POST",
      data: JSON.stringify(noteData)
    })  
    .success(function(){
      alert('Saved the entry')
    });
  };


  $scope.clearEntry = function() {
    $scope.noteDate = null;
    $scope.noteTitle = "";
    $scope.noteEntry = "";
    $scope.tagArray.length = 0;
  };

  $scope.addTag = function() {
    $scope.tagArray.push($scope.enteredTag);
    $scope.enteredTag = "";
  };

}]);
