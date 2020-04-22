const db = require('../config/db.config.js');

const ServiceConsumable = db.serviceConsumables;


// FETCH All Service Consumables
exports.findAll = (req, res) => {
    ServiceConsumable.findAll().then(serviceConsumables => {
        // Send all data to client
        res.json(serviceConsumables);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err});
    });
};

// Find a service consumable by id
exports.findById = (req, res) => {
    ServiceConsumable.findByPk(req.params.id).then(serviceConsumable => {
        res.json(serviceConsumable);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ msg: "error", details: err});
    });
};



