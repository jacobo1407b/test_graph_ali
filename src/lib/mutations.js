'use strict'
const db = require('../database');
const User = db.users;
const {errorName} = require('../config/constants')

module.exports = {
    createPeople: async (root, {input})=>{
        let newUser;
        try {
          newUser = await  User.create(input)
        } catch (error) {
            console.log(error)
            throw new Error(errorName.SERVER_ERROR)
        }

        return newUser;
    }
}