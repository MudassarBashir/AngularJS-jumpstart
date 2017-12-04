/**
 * Defining our application's module.
 */
(function() {

    var app = angular.module('customersApp', ['ngRoute']);

    app.config(function ($routeProvider, $locationProvider) {

        $locationProvider.hashPrefix('');

        $routeProvider
            .when('/', {
                controller: 'CustomersController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .otherwise({ redirectTo: '/'});
    });

}());
