import angular from 'angular';
import fmServices from './services';
import fmApp from './app';
import angular_google_maps from '../bower_components/angular-google-maps/dist/angular-google-maps.min.js';
import angular_simple_logger from '../bower_components/angular-simple-logger/dist/index.js';

let fmControllers = angular.module('fmControllers', []);

fmControllers.controller('LoginCtrl', ['$scope', '$location', 'User',
  function($scope, $location, User) {
    $scope.login = function() {
      OAuth.initialize('4lBI76EZhVMz17EBWkTmYb0mg_4')
      OAuth.popup('instagram').done(function(res) {
          $scope.$apply(function() {
            $location.path('/map');
          });
          const userId = res.user.id;
          const access_token = res.access_token;
          User.set(res);
      }).fail(function(err) {
        console.log(err);
      });
    }
  }
])

fmControllers.controller('MapCtrl', ['$scope', 'uiGmapGoogleMapApi', 'User',
  function($scope, uiGmapGoogleMapApi, User) {
    $scope.user = User.get().user;
    User.getPhotos().done(function(res) {
      uiGmapGoogleMapApi.then(function(maps) {
        $scope.pictures = res.data;
        $scope.map = {
          center: {
            latitude: 39.5, 
            longitude: -98.35
          }, 
          zoom: 4
        };
      });
    });
  }
])

export default fmControllers;