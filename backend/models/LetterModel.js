const  { Sequelize } =  require("sequelize");
const  db = require("../config/db.js");

 
const { DataTypes } = Sequelize;
 

const Letter = db.define('coverletter',{
    coverletterid:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    receivers_address:{
        type: DataTypes.STRING
    },
    subject:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    },
    portfolioid:{
      type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
module.exports = Letter;