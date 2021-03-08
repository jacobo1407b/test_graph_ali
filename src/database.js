'use strict'
const {host,user,password,database} = require('./config/keys');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(database,user, password, {
    host: host,
    dialect: "mysql",
    operatorsAliases: false,
  
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });
  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  //model
  db.users = require('./models/users')(sequelize, Sequelize);
  module.exports = db;