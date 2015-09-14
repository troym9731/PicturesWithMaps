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

fmControllers.controller('MapCtrl', ['$scope',
  function($scope) {
    function initMap() {
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        scrollwheel: false,
        zoom: 8
      });
    }
  }
])

export default fmControllers;