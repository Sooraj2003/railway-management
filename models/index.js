const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'postgres',
});

const User = require('./user')(sequelize, DataTypes); // Import the User model
const Train = require('./train')(sequelize, DataTypes); // Import other models if needed
const Booking = require('./booking')(sequelize, DataTypes); // Import other models if needed

// Add associations here if applicable

module.exports = { sequelize, Sequelize, User, Train, Booking };
