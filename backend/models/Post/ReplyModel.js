const  { Sequelize } = require("sequelize");
const  db = require("../../config/db.js");

const { DataTypes } = Sequelize;
 
const Reply = db.define('reply',{
    replyid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
      
    },
    postid:{
      type: DataTypes.STRING
  },
  commentid:{
    type: DataTypes.STRING
},
    name:{
      type: DataTypes.STRING
  },
  email:{
    type: DataTypes.STRING
},
    reply:{
        type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
  },
  video:{
    type: DataTypes.STRING
},
link_post:{
  type: DataTypes.STRING
},

},{
    freezeTableName: true
});

 
module.exports = Reply;

