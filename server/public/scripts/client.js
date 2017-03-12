var empApp = angular.module('employeesApp', ['ngRoute']);

empApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/emp', {
            templateUrl: '/views/emp.html',
            controller: 'EmpController',
            controllerAs: 'ec'
        }).otherwise({
            redirectTo: 'emp'
        });
}]);
