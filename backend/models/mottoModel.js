const  { Sequelize } = require("sequelize");
const  db = require("../config/db.js");
 
const { DataTypes } = Sequelize;
 
const Motto = db.define('motto',{
    mottoid:{
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

 
module.exports =  Motto;
//ALTER TABLE reference ADD COLUMN portfolioid VARCHAR(255) NOT NULL AFTER address;
//ALTER TABLE reference DROP COLUMN email;