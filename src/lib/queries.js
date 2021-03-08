'use strict'
const db = require('../database');
const User = db.users;
const {errorName} = require('../config/constants')

module.exports = {
    getPeople: async ()=>{
        let users;
        try {
           users = await User.findAll()
        } catch (error) {
            console.log(error)
            throw new Error(errorName.SERVER_ERROR)
        }

        return users;
    },
    getPerson: async (root, {id})=>{
        let user;
        try{
            user = await User.findByPk(id)
        }catch(err){
            console.log(err)
            throw new Error(errorName.SERVER_ERROR)
        }
        return user;
    }
}