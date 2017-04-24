var app = angular.module('myApp', []);
        app.controller('myCtrl', function($scope){
            $scope.step = 0;

            $scope.next= false;
            $scope.previous= false;

            $scope.nextStep= function(step)
            {
                $scope.step += 1;
            };
            $scope.prevStep= function(step)
            {
                $scope.step -=1;
            };
          $scope.change='data';
          $scope.getVal= function(){
              if($scope.changedVal=='politician' && $scope.changedValu=='100k'){
              	$scope.step = 5;
              	$scope.change=$scope.changedVal;
                $scope.change=$scope.changedValu;
              }

          }

        });