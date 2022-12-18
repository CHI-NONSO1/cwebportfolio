const  { Sequelize } = require("sequelize");
const  db = require("../config/db.js");
 
const { DataTypes } = Sequelize;
 

const Contact = db.define('nexicontact',{
    nexicontactid:{
    
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    fullname:{
      type: DataTypes.STRING
  },
    email:{
        type: DataTypes.STRING
    },
    message:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
module.exports = Contact;