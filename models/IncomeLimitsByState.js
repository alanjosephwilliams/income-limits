const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const IncomeLimitsByState = sequelize.define("IncomeLimitsByState", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  state: {
    type: DataTypes.STRING(2),
    allowNull: false,
  },
  fpl: {
    type: DataTypes.INTEGER,
  },
  eitc: {
    type: DataTypes.INTEGER,
  },
  snap: {
    type: DataTypes.INTEGER,
  },
  wap: {
    type: DataTypes.INTEGER,
  },
  liheap: {
    type: DataTypes.INTEGER,
  },
  medicaid: {
    type: DataTypes.INTEGER,
  },
  section_8_50_mean: {
    type: DataTypes.INTEGER,
  },
  ami_80_mean: {
    type: DataTypes.INTEGER,
  },
  ami_150_mean: {
    type: DataTypes.INTEGER,
  },
  section_8_50_std_dev: {
    type: DataTypes.INTEGER,
  },
  ami_80_std_dev: {
    type: DataTypes.INTEGER,
  },
  ami_150_std_dev: {
    type: DataTypes.INTEGER,
  },
}, {
  tableName: "income_limits",
  timestamps: false,
});

module.exports = IncomeLimitsByState;

// Sync the model with the database
sequelize.sync()
  .then(() => console.log('IncomeLimitsByState table has been synced'))
  .catch((error) => console.error('Error syncing IncomeLimitsByState table:', error));
