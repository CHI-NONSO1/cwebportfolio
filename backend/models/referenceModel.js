const  { Sequelize } = require("sequelize");
const  db = require("../config/db.js");
 
const { DataTypes } = Sequelize;
 

const Reference = db.define('reference',{
    referenceid:{
    
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    fullname:{
      type: DataTypes.STRING
  },
  phoneno:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    portfolioid:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
module.exports =  Reference;