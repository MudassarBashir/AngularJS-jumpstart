/**
 * Controller for orders data.
 */
(function () {
    // declaring the content of the controller
    var OrdersController = function ($scope, $routeParams, customersFactory) {

        var customerId = $routeParams.customerId;

        $scope.orders = null;

        function init() {
            customersFactory.getCustomer(customerId)
                .then(function(data) {
                    $scope.customer = data.data;
                },
                function(data, status, header, config) {
                    // handle error
                });
        }

        init();

    };

    OrdersController.$inject = ['$scope', '$routeParams', 'customersFactory'];

    // hooking the controller up to our application's main module
    angular.module('customersApp').controller('OrdersController', OrdersController);

}());