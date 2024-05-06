const config = require("../config/config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(config.DB,config.USER, config.PASSWORD,  {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acuire,
    idle: config.pool.idle,
  },
});
sequelize.authenticate()
.then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log(err);
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
// create a products table
db.products = require("../models/product")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re sync DB");
});

module.exports = db;
