const  { Sequelize } = require("sequelize");
const  db = require("../../config/db.js");

const { DataTypes } = Sequelize;
 
const Posts = db.define('posts',{
    postid:{
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
      
    },
    portfolioid:{
      type: DataTypes.STRING
  },
    author:{
      type: DataTypes.STRING
  },
  heading:{
    type: DataTypes.STRING
},
    post:{
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
category:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

 
module.exports = Posts;

