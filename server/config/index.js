// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/petMatch', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;

const path = require('path')
const Sequelize = require('sequelize');
require('dotenv').config({
  path: path.resolve('.env')
})


let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;