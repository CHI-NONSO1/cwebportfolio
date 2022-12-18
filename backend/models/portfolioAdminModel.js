const  { Sequelize } = require("sequelize");
const  db = require("../config/db.js");

const { DataTypes } = Sequelize;
 

const PortfolioAdmin = db.define('portfolioadmin',{
portfolioadminid:{
  autoIncrement:true,
  primaryKey:true,
  type: DataTypes.UUID,
  defaultValue:Sequelize.UUIDV4
},
firstname:{
  type: DataTypes.STRING
},
middlename:{
    type: DataTypes.STRING
},
lastname:{
  type: DataTypes.STRING
},
password:{
  type: DataTypes.STRING,
  unique:true,
  
},
refresh_token:{
  type: DataTypes.TEXT
},
email:{
  type: DataTypes.STRING,
  unique:true
},
image:{
  type: DataTypes.STRING
},
phoneno:{
  type: DataTypes.STRING,
  unique:true
},
city:{
  type: DataTypes.STRING
},
address:{
  type: DataTypes.STRING
},
position:{
  type: DataTypes.STRING
}
},{
    freezeTableName: true,
   
})

// (async () => {
//   await db.sync();
// })();
 
module.exports =  PortfolioAdmin;
