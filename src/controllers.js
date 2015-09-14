import angular from 'angular';
import fmServices from './services';
import fmApp from './app';

let fmControllers = angular.module('fmControllers', []);

fmControllers.controller('LoginCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.login = function() {
      OAuth.initialize('4lBI76EZhVMz17EBWkTmYb0mg_4')
      OAuth.popup('instagram').done(function(res) {
          console.log(res);
          res.me().done(function(me) {
            console.log(me);
            $location.path('/map');
          });
          // do some stuff with result
      }).fail(function(err) {
        console.log(err);
      });
    }
  }
])

export default fmControllers;