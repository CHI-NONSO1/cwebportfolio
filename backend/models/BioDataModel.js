const { Sequelize } = require("sequelize");
const db =  require("../config/db.js");
 
const { DataTypes } = Sequelize;
 
const BioData = db.define('biodata',{
    biodataid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
      
    },
    sex:{
        type: DataTypes.STRING
    },
    
    dob:{
        type: DataTypes.STRING
    },
    soo:{
      type: DataTypes.STRING
    },
    marital:{
    type: DataTypes.STRING
    },
    impairment:{
    type: DataTypes.STRING
  },
    religion:{
    type: DataTypes.STRING
  },
    nationality:{
  type: DataTypes.STRING
  },
  portfolioid:{
      type: DataTypes.STRING
  }
},
{
    freezeTableName: true
});

 
module.exports = BioData;