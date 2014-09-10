var website = angular.module('website', []);

website.controller('mainCtrl', function ($scope) {
  $scope.includes = [
    'html/about.html',
    'html/projects.html',
    'html/contact.html'
  ];

  $scope.projects = [
    {
      'name': 'PleaseObserve.me',
      'link': 'http://pleaseobserve.me',
      'desc': 'hello'
    },
    {
      'name': 'LectureSync',
      'link': 'http://lecture-sync.com',
      'desc': 'hello'
    },
    {
      'name': 'UTD JavaScript Camp',
      'link': 'http://utdcs.herokuapp.com',
      'desc': 'hello'
    },
  ];

});