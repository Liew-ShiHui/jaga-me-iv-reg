// To define Service Consumable's routes

module.exports = function(app) {
    const sc = require('../controller/service-consumable.controller.js');

    // Retrieve all scs
    app.get('/api/serviceConsumables', sc.findAll);

    // Retrieve a single sc by Id
    app.get('/api/serviceConsumables/:id', sc.findById);

	/**
    // Update a sc with Id
    app.put('/api/serviceConsumables/:id', sc.update);

    // Delete a sc with Id
    app.delete('/api/serviceConsumables/:id', sc.delete);
	**/
}