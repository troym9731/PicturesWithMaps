import angular from 'angular';
import angular_route from 'angular-route';
import fmServices from './services';
import fmControllers from './controllers';
import angular_google_maps from '../bower_components/angular-google-maps/dist/angular-google-maps.min.js';
import angular_simple_logger from '../bower_components/angular-simple-logger/dist/index.js';

OAuth.initialize('4lBI76EZhVMz17EBWkTmYb0mg_4');

let fmApp = angular.module('fmApp',
  ['ngRoute', 'fmControllers', 'fmServices', 'uiGmapgoogle-maps']);

fmApp.config(function(uiGmapGoogleMapApiProvider) {
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyB4NkKg91GVWMUAFvCyhQJJwhrfl75G3so',
    v: '3.20',
    libraries: 'weather,geometry,visualization'
  })
})

fmApp.config(
  ['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './src/partials/home.html'
      })
      .when('/map', {
        templateUrl: './src/partials/map.html',
        controller: 'MapCtrl'
      })
  }]
);

export default fmApp;