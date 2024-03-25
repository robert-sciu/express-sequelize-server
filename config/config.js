// Load package.json
const pjs = require("../package.json");

// Get some meta info from the package.json
const { name, version } = pjs;

// Set up a logger

// Configuration options for different environments
module.exports = {
  development: {
    name,
    version,
    serviceTimeout: 30,
    postgres: {
      options: {
        host: "localhost",
        port: 5432,
        database: "dev",
        dialect: "postgres",
        username: "postgres",
        password: "postgres",
      },
      client: null,
    },
  },
  production: {
    name,
    version,
    serviceTimeout: 30,
  },
  test: {
    name,
    version,
    serviceTimeout: 30,
  },
  aws: {
    postgres: {
      options: {
        host: process.env.RDS_HOSTNAME,
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        port: 5432,
        dialect: "postgres",
        database: "database_1",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false, // added based on the recommendation from Sequelize documentation
          },
        },
      },
    },
  },
};
