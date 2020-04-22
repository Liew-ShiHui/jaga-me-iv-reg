module.exports = (sequelize, Sequelize) => {
    // model definition
    const ServiceInfo = sequelize.define('service_info', {
        frequency: {
            type: Sequelize.INTEGER,
            min: 1,
            max: 2
        },
        length: {
            type: Sequelize.INTEGER,
            min: 7
        },
        priceOnWeekday: {
            type: Sequelize.DOUBLE,
            defaultValue: 92,
        },
        priceOnWeekend: {
            type: Sequelize.DOUBLE,
            defaultValue: 110,
        },
        priceOnPublicHoliday: {
            type: Sequelize.DOUBLE,
            defaultValue: 138,
        }
    });

    return ServiceInfo;
}