const { Sequelize } = require("sequelize");
// const config = require("./config")[process.env.NODE_ENV || "development"];
const config = require("./config")[process.env.NODE_ENV || "development"];

console.log(config.postgres.options.username);
console.log(config.postgres.options.dialect);

const sequelize = new Sequelize(config.postgres.options);

module.exports = sequelize;
