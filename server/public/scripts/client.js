var empApp = angular.module('EmployeesApp', ['ngRoute']);

empApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/emp', {
    templateUrl: '/views/emp.html',
    controller: 'EmpController',
    controllerAs: 'ec'
  })
  .when('/other', {
    templateUrl: '/views/other.html',
    controller: 'OtherController',
    controllerAs: 'oc'
  })
  .otherwise({
    redirectTo: 'emp'
  });
}]);
