const  { Sequelize } =  require("sequelize");
const  db = require("../config/db.js");

 
const { DataTypes } = Sequelize;
 

const Project = db.define('project',{
    projectid:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    projectname:{
        type: DataTypes.STRING
    },
    domainname:{
        type: DataTypes.STRING
    },
    projecturl:{
        type: DataTypes.STRING,
    },
    projectimage1:{
      type: DataTypes.STRING
    },
    projectimage2:{
      type: DataTypes.STRING
    },
    projectimage3:{
      type: DataTypes.STRING
    },
    projectimage4:{
      type: DataTypes.STRING
    },
    projectimage5:{
      type: DataTypes.STRING
    },
    projectimage6:{
      type: DataTypes.STRING
    },
    projectimage7:{
      type: DataTypes.STRING
    },
    projectimage8:{
      type: DataTypes.STRING
    },
    projectimage9:{
      type: DataTypes.STRING
    },
    projectimage10:{
      type: DataTypes.STRING
    },
    languageused1:{
      type: DataTypes.STRING
    },
    languageused2:{
      type: DataTypes.STRING
    },
    languageused3:{
      type: DataTypes.STRING
    },
    languageused4:{
      type: DataTypes.STRING
    },
    languageused5:{
      type: DataTypes.STRING
    },
    portfolioid:{
      type: DataTypes.STRING
    },
    duration:{
      type: DataTypes.STRING
    },
    description:{
      type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
module.exports = Project;