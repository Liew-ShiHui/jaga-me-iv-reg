module.exports = (sequelize, Sequelize) => {
    // model definition
    const ServiceConsumable = sequelize.define('service_consumable', {
        sku: {
            type: Sequelize.STRING
        },
        itemName: {
            type: Sequelize.STRING
        },
        quantityPerDay: {
            type: Sequelize.INTEGER
        },
        price: {
            type: Sequelize.DOUBLE
        }
    });
    
    return ServiceConsumable;
}
