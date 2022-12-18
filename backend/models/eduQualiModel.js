const { Sequelize } = require("sequelize");
const db =  require("../config/db.js");

 
const { DataTypes } = Sequelize;
 
const EduQuali = db.define('eduquali',{
    eduqualid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
      
    },
    qualiobtained:{
        type: DataTypes.STRING
    },
    
    institution:{
        type: DataTypes.STRING
    },
    startdate:{
      type: DataTypes.STRING
    },
    enddate:{
    type: DataTypes.STRING
    },
    country:{
    type: DataTypes.STRING
  },
  portfolioid:{
      type: DataTypes.STRING
  }
},
{
    freezeTableName: true
});

 
module.exports =  EduQuali;