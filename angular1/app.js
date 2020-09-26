(
  function (){
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',lunCon);
    lunCon.$inject=['$scope'];
    function lunCon($scope){

      $scope.check= function(){
          $scope.message='';
          if ($scope.menu) {
              var items= $scope.menu.split(',');
              $scope.colored='green';
              if(items.length<=3){
                  $scope.message='Enjoy!';
              }
              else{
                $scope.message='Too much!';
              }
          }
          else {
            $scope.colored='red';
            $scope.message='Please enter data first';
          }
      }
    }
  }
)();
