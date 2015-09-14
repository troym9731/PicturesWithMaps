import angular from 'angular';
import angular_route from 'angular-route';
import fmServices from './services';
import fmControllers from './controllers';

OAuth.initialize('4lBI76EZhVMz17EBWkTmYb0mg_4');

let fmApp = angular.module('fmApp',
  ['ngRoute', 'fmControllers', 'fmServices']);

fmApp.config(
  ['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './src/partials/home.html'
      })
  }]
);

export default fmApp;