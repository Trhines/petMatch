// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/petMatch', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;


const Sequelize = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize(
  'petMatch_db',
  'root',
  'Greeksaregeeks1!',
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;