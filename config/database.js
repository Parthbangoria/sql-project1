const Sequelize = require("sequelize")

const sequelize = new Sequelize("sql_store", "root", "parth.6755.9733", {
    host: "localhost",
    dialect: "mysql" ,
    port : "3306" 
  });
  
  module.exports = sequelize;
  
  