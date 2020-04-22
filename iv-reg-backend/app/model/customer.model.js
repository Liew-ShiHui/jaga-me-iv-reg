module.exports = (sequelize, Sequelize) => {
    // model definition
    const Customer = sequelize.define('customer', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        contactNumber: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            isEmail: true
        },
        addressLine1: {
            type: Sequelize.STRING
        },
        addressLine2: {
            type: Sequelize.STRING
        },
        postalCode: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING,
            defaultValue: "Singapore"
        },
        curencyCode: {
            type: Sequelize.STRING,
            defaultValue: "SGD"
        },
        paymentMethod: {
            type: Sequelize.STRING,
            defaultValue: "Credit Card"
        },
        referralSource: {
            type: Sequelize.STRING
        },
        preferredModeOfComm: {
            type: Sequelize.STRING
        }
    });

    return Customer;
}