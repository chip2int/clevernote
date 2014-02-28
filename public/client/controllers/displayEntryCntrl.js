angular.module('CleverNote')
.controller('displayEntryCntrl', ['$scope', '$http', '$rootScope', '$state', function($scope, $http, $rootScope, $state) {

    if ($rootScope.tempObj === undefined) {
      $state.go('main');
    }
    console.log("TempObj", $rootScope.tempObj);
    $scope.noteDate   = new Date($rootScope.tempObj["modifiedOn"]).toDateString() ;
    $scope.noteTitle  = $rootScope.tempObj["title"];
    $scope.noteEntry  = $rootScope.tempObj["body"];
    $scope.noteId     = $rootScope.tempObj["_id"];
    $rootScope.tempObj == undefined;

  $scope.updateEntry = function() {
    var noteData = {};
    noteData["title"]= $scope.noteTitle;
    //noteData["Tags"] = ["temp"];
    noteData["body"] = $scope.noteEntry;
    noteData["_id"] = $scope.noteId;
    console.log("NoteData", noteData);
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
