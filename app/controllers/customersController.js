/**
 * Customers controller. This controller is using a service as opposed to a factory that exists
 * with the exact same functionality. Just to show how a service can be used in place of a factory.
 */
 (function () {

     var CustomersController = function ($scope, customersService, appSettings) {

        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.appSettings = appSettings;

        function init() {
            $scope.customers = customersService.getCustomers();
        }

        init();

        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        }

    };

     CustomersController.$inject = ['$scope', 'customersService', 'appSettings'];

    // hooking the controller up to our application's main module
    angular.module('customersApp').controller('CustomersController', CustomersController);

}());