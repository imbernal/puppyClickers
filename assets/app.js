angular.module("PuppyClicker" , [])
.controller("MainController" , ["$scope","$interval" , function($scope , $interval){
  $scope.clickers = 0;
  $scope.clicksPerSecond = 0;
  clickCounter = 0;

  $scope.increment = function (){
    $scope.clickers+=1;
    clickCounter++;
  }

  $interval(function(){
    $scope.clicksPerSecond = clickCounter;
    clickCounter=0;
  }, 1000)

  $scope.list = [{
    name:'Israel',
    edad:"24"
  } ,{
    name:'Alex',
    edad:"24"
  }  ];
}]);
