import angular from 'angular';
import angular_resource from 'angular-resource';

let fmServices = angular.module('fmServices', ['ngResource']);

fmServices.factory('User', ['$resource',
  function($resource) {
    return $resource('http://api.flickr.com/services/rest/', {}, {
      query: {
        method: 'GET',
        isArray: true
      }
    })
  }
])

export default fmServices;
