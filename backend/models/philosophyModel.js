const { Sequelize } = require("sequelize");
const db = require("../config/db.js");
 
const { DataTypes } = Sequelize;
 
const Philosophy = db.define('philosophy',{
    philosophyid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
      
    },
    body:{
        type: DataTypes.STRING
    },
    portfolioid:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

 
module.exports =  Philosophy;