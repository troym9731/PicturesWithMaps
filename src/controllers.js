import angular from 'angular';
import fmServices from './services';
import fmApp from './app';

let fmControllers = angular.module('fmControllers', []);

fmControllers.controller('LoginCtrl', ['$scope',
  function($scope) {
    $scope.login = function() {
      OAuth.popup('flickr', { cache: true }).done(function(res) {
        console.log(res);
        res.me().done(function(me) {
          console.log('Hello ' + me.name);
        }).fail(function(err) {
          console.log(err);
        });
      }).fail(function(err) {
        console.log(err);
      });
    }
  }
])

export default fmControllers;