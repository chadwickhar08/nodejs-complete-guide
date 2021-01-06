const mysql = require('mysql2');

const pool = mysql.createPool({

    host:'localhost',
    user: 'user1',
    database: 'node-complete',
    password: 'greenR08!',
    port: 3306
});

module.exports = pool.promise();