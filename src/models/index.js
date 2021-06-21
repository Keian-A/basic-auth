'use strict';

require('dotenv').config();
const bcrypt = require('bcrypt');

const Users = require('./Users.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const sequelize = new Sequelize(DATABASE_URL);

const users = Users(sequelize, DataTypes);

users.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = {
  db: sequelize,
  users: users,
}