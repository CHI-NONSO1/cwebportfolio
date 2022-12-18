const  { Sequelize } =  require("sequelize");
const  db = require("../config/db.js");

 
const { DataTypes } = Sequelize;
 

const Admin = db.define('test',{
    testid:{
    
        autoIncrement:true,
        primaryKey:true,
        type: DataTypes.INTEGER
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.BLOB('long')
    }
},{
    freezeTableName: true
});
 
module.exports = Admin;
