const { Sequelize } = require('sequelize');
const { PORT } = require('../app')

// Create a connection to database
const db = new Sequelize( {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'apache421',
  database: 'Airbnb',

});

module.exports = { db };