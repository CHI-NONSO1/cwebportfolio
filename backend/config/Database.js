import { Sequelize } from "sequelize";
 
const dbu = new Sequelize('reactportfolio', '----', '----', {
    host: "localhost",
    dialect: "mysql"
});
 
export default dbu;
