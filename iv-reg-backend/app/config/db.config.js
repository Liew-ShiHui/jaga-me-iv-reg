// Set up postgres-sequelize connection

const env = require('./env.js');

// get dependencies
const Sequelize = require('sequelize');

// sequelize initialisation
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,
 
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});
 
const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;
 
//Models/tables
db.customers = require('../model/customer.model.js')(sequelize, Sequelize);
db.serviceInfos = require('../model/service-info.model.js')(sequelize, Sequelize);
db.serviceConsumables = require('../model/service-consumable.model.js')(sequelize, Sequelize); 

// Entity relationship
db.customers.hasMany(db.serviceInfos, { as: "serviceInfos" });
db.serviceInfos.belongsTo(db.customers, {
  foreignKey: "customerId",
  as: "customer",
});

module.exports = db;