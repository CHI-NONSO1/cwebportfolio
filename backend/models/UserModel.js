const  { Sequelize } = require("sequelize");
const  dbu = require("../config/Database.js");
 
const { DataTypes } = Sequelize;
 
const Users = dbu.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
// (async () => {
//     await dbu.sync();
// })();
 
module.exports =  Users;