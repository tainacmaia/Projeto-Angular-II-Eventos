const Sequelize = require('sequelize');
const database = require('../../../infra/db');

const Reservation = database.define('Reservation', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  eventId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = Reservation;