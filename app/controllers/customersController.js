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
        }

    };

     CustomersController.$inject = ['$scope', '$log', 'customersFactory', 'appSettings'];

    // hooking the controller up to our application's main module
    angular.module('customersApp').controller('CustomersController', CustomersController);

}());