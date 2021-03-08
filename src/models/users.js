const {tabla} = require('../config/keys')
module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users_test_jacobohernandez", {
      nombre: {
        type: Sequelize.STRING
      },
      nombreDos:{
        type: Sequelize.STRING
      },
      apellido:{
        type: Sequelize.STRING
      },
      apellidoMa:{
        type: Sequelize.STRING
      },
      fecha:{
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      telefono:{
        type: Sequelize.STRING
      }
    });
  
    return Users;
  };