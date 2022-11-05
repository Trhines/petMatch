const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize
console.log(process.env.DB_NAME)

sequelize = new Sequelize(
    "petMatch_db",
    "root",
    "Greeksaregeeks1!",
    {
        host: 'localhost',
        dialect: 'mysql',
        password: '',
        port: 3306
    }
);


module.exports = sequelize