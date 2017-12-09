/**
 * Controller for orders data.
 */
(function () {
    // declaring the content of the controller
    var OrdersController = function ($scope, $routeParams) {

        var customerId = $routeParams.customerId;

        $scope.orders = null;

        function init() {
            // Search the customers for the given customerId

        }

        init();

    };

    OrdersController.$inject = ['$scope', '$routeParams'];

    // hooking the controller up to our application's main module
    angular.module('customersApp').controller('OrdersController', OrdersController);

}());