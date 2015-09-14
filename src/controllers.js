import angular from 'angular';
import fmServices from './services';
import fmApp from './app';

let fmControllers = angular.module('fmControllers', []);

fmControllers.controller('LoginCtrl', ['$scope',
  function($scope) {
    $scope.login = function() {
      OAuth.popup('flickr', { cache: true }).done(function(res) {
        //make API calls with `res`
        
      }).fail(function(err) {
        //todo when the OAuth flow failed
        console.log(err);
      });
    }
  }
])

export default fmControllers;