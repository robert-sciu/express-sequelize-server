const { Sequelize } = require("sequelize");
// const config = require("./config")[process.env.NODE_ENV || "development"];
const config = require("./config")["aws"];

console.log(config.user);
const sequelize = new Sequelize(config.postgres.options);

module.exports = sequelize;
