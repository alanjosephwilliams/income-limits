const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("income_limits_by_state", "your_username", "your_password", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
