/**
 * Customers controller.
 */
 (function () {

     var CustomersController = function ($scope, customersFactory, appSettings) {

        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            customersFactory.getCustomers()
                .then(function(customers) {
                        $scope.customers = customers.data;
                    },
                    function(data, status, header, config) {
                        // handle error
                    });
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }

    };

     CustomersController.$inject = ['$scope', 'customersFactory', 'appSettings'];

    // hooking the controller up to our application's main module
    angular.module('customersApp').controller('CustomersController', CustomersController);

}());