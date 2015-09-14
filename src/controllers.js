import angular from 'angular';
import fmServices from './services';
import fmApp from './app';
import angular_google_maps from '../bower_components/angular-google-maps/dist/angular-google-maps.min.js';
import angular_simple_logger from '../bower_components/angular-simple-logger/dist/index.js';

let fmControllers = angular.module('fmControllers', []);

fmControllers.controller('LoginCtrl', ['$scope', '$location',
  function($scope, $location) {
    $scope.login = function() {
      OAuth.initialize('4lBI76EZhVMz17EBWkTmYb0mg_4')
      OAuth.popup('instagram').done(function(res) {
          console.log(res);
          console.log(res.user);
          $scope.$apply(function() {
            $location.path('/map');
          });

      }).fail(function(err) {
        console.log(err);
      });
    }
  }
])

fmControllers.controller('MapCtrl', ['$scope', 'uiGmapGoogleMapApi',
  function($scope, uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function(maps) {
      $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
  }
])

export default fmControllers;