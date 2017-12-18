/**
 * Global application wide values.
 */

angular.module('customersApp').value('appSettings', {
    title: 'Customers Application',
    version: '1.0'
});

/**
 * Whereas values are not injectable into the configuration of the
 * Angular application, constants are. But we are not using them here.
 */
/*
angular.module('customersApp').constant('appSettings', {
    title: 'Customers Application',
    version: '1.0'
})*/
