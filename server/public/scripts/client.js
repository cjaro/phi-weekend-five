var empApp = angular.module('empApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/emp', {
            templateUrl: '/views/emp.html',
            controller: 'EmpController',
            controllerAs: 'ec'
        }).when('/other', {
            templateUrl: '/views/other.html',
            controller: 'OtherController',
            controllerAs: 'oc'
        }).otherwise({
            redirectTo: 'home'
        });
}]);
