const  { Sequelize } =  require("sequelize");
const  db = require("../config/db.js");

 
const { DataTypes } = Sequelize;
 

const Skills = db.define('skills',{
    skillid:{
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
  },
    skillname1:{
        type: DataTypes.STRING
  },
    skillname2:{
      type: DataTypes.STRING
  },
  skillname3:{
    type: DataTypes.STRING
  },
  skillname4:{
    type: DataTypes.STRING
  },
  skillname5:{
    type: DataTypes.STRING
  },
  skillname6:{
    type: DataTypes.STRING
  },
  skillname7:{
    type: DataTypes.STRING
  },
  skillname8:{
    type: DataTypes.STRING
  },
  skillname9:{
    type: DataTypes.STRING
  },
  skillname10:{
    type: DataTypes.STRING
  },
    portfolioid:{
      type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
module.exports = Skills;