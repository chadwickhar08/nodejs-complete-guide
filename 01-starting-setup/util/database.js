// const mysql = require('mysql2');

// const pool = mysql.createPool({

//     host:'localhost',
//     user: 'user1',
//     database: 'node-complete',
//     password: 'greenR08!',
//     port: 3306
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'user1', 'greenR08!', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;

