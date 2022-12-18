const  { Sequelize } = require("sequelize");
const  db = require("../config/db.js");

 
const { DataTypes } = Sequelize;
 
const WorkExperience = db.define('workexperience',{
  workexperienceid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
      
    },
    organisation:{
        type: DataTypes.STRING
    },
    
    position:{
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

 
module.exports =  WorkExperience;