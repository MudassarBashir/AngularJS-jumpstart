/**
 * Customers controller.
 */
 (function () {

     var CustomersController = function ($scope, $log, customersFactory, appSettings) {

        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            customersFactory.getCustomers()
                .then(function(data) {
                        $scope.customers = data.data;
                    },
                    function(data, status, header, config) {
                        $log.log(data.data.error + ' ' + data.status);
                    });
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.deleteCustomer = function (customerId) {
            customersFactory.deleteCustomer(customerId)
                .then(function(data) {
                    if (data.status) {
                        for (i = 0; i < $scope.customers.length; i++) {
                            if ($scope.customers[i].id === customerId) {
                                $scope.customers.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else {
                        $window.alert('Unable to delete customer with id ' + customerId);
                    }
                },
                function(data, status, headers, config) {
                    // handle error
                });
        };

    };

     CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];

    // hooking the controller up to our application's main module
    angular.module('customersApp').controller('CustomersController', CustomersController);

}());