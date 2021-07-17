const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = process.env.JAWSDB_URL
//if
? new Sequelize(process.env.JAWSDB_URL)
//otherwise/else
: new Sequelize(process.env.DB_NAME, process.envDB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3006
});

module.exports = sequelize