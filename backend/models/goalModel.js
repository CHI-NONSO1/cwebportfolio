const { Sequelize } = require("sequelize");
const db = require("../config/db.js");
 
const { DataTypes } = Sequelize;
 
const Goal = db.define('goal',{
    goalid:{
    autoIncrement:true,
    primaryKey:true,
    type: DataTypes.INTEGER

    },
    mygoal:{
        type: DataTypes.STRING
    },
    
    portfolioid:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

 
module.exports = Goal;