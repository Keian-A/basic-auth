'use strict';

const Users = (sequelize, DataTypes) => {
  return sequelize.define('Users', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
}

module.exports = Users;