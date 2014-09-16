var website = angular.module('website', []);

website.controller('mainCtrl', function ($scope) {
  $scope.includes = [
    'html/about.html',
    'html/contact.html',
    'html/projects.html'
  ];

  $scope.projects = [
    {
      'name': 'PleaseObserve.me',
      'link': 'http://pleaseobserve.me',
      'desc': 'Created a web app to keep track of what I did during the day for around 75 days'
    },
    {
      'name': 'LectureSync',
      'link': 'http://lecture-sync.com',
      'desc': 'Built at HackTech with friends - lets you sync slides with a professor\'s lecture and take notes on them'
    },
    {
      'name': 'UTD JavaScript Camp',
      'link': 'http://utdcs.herokuapp.com',
      'desc': 'Volunteered at a camp to teach high school kids how to code - they uploaded their JavaScript code here'
    },
  ];

});

function ToggleProjects() {
  var p = document.getElementById("projects");
  p.classList.toggle("hidden");
}
