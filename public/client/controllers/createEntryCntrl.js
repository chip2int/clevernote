angular.module('CleverNote')
.controller('createEntryCntrl', ['$scope', function($scope){


  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  
  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };


  console.log($scope.dt);
  $scope.$watch('opened', function(newValue, oldValue) {

    if (newValue === false && oldValue === true) {
      alert("Here!");;
    }
  })


}]);
