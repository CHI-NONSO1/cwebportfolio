const  { Sequelize } = require("sequelize");
const  db = require("../../config/db.js");

const { DataTypes } = Sequelize;
 
const Comments = db.define('comments',{
    commentid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
      
    },
    postid:{
      type: DataTypes.STRING
  },
    name:{
      type: DataTypes.STRING
  },
  email:{
    type: DataTypes.STRING
},
    comment:{
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

 
module.exports = Comments;

