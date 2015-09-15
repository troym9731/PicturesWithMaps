import angular from 'angular';
import angular_resource from 'angular-resource';

let fmServices = angular.module('fmServices', ['ngResource']);

fmServices.factory('User', ['$http', function($http) {
  let User = {};

  const set = (data) => {
    User = data;
  }

  const get = (data) => {
    return User;
  }

  const getPhotos = (data) => {
    return User.get('https://api.instagram.com/v1/users/' + User.user.id + '/media/recent/?access_token=' + User.access_token);
  }

  return {
    set: set,
    get: get,
    getPhotos: getPhotos
  };
}])

export default fmServices;
