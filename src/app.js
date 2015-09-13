import angular from 'angular';
import angular_route from 'angular-route';
import fmServices from './services';
import fmControllers from './controllers';

let fmApp = angular.module('fmApp',
  ['ngRoute']);

fmApp.config(
  ['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './src/partials/home.html'
      })
  }]
)