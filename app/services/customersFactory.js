(function() {

	var customersFactory = function () {

		var customers = [
            {   id: 0,
                joined: '2000-12-02',
                name: 'John', city: 'Chandler',
                orderTotal: 9.9956,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.9956
                    }
                ]
            },
            {   id: 1,
                joined: '1965-01-25',
                name: 'Zed', city: 'Las Vegas',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 3,
                        product: 'Book',
                        total: 19.99

                    }
                ]
            },
            {   id: 2,
                joined: '1944-06-15',
                name: 'Tina',
                city: 'New York',
                orderTotal: 44.99,
                orders: [
                    {
                        id: 4,
                        product: 'Headphones',
                        total: 44.99
                    }
                ]
            },
            {   id: 3,
                joined: '1995-03-28',
                name: 'Dave',
                city: 'Seattle',
                orderTotal: 101.5,
                orders: [
                    {
                        id: 5,
                        product: 'Kindle',
                        total: 101.50
                    }
                ]
            }

        ];

        var factory = {};

        factory.getCustomers = function () {
        	return customers;
        };

        factory.getCustomer = function(customerId) {
            for (var i = 0, len = customers.length; i < len; i++) {
                if (customers[i].id === parseInt(customerId)) {
                    return customers[i];
                }
            }
            return {};
        }

        return factory;

	};

	angular.module('customersApp').factory('customersFactory', customersFactory);

}());