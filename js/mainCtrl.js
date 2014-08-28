var website = angular.module('website', []);

website.controller('mainCtrl', function ($scope) {
  $scope.includes = [
    'html/about.html',
    'html/contact.html'
  ];
});