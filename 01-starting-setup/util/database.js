// const mysql = require('mysql2');

// const pool = mysql.createPool({

//     host:'localhost',
//     user: 'user1',
//     database: 'node-complete',
//     password: 'greenR08!',
//     port: 3306
// });

// module.exports = pool.promise();

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = () => {

    MongoClient.connect('mongodb+srv://tipper86:tipper86@cluster0.mh6ur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    .then(client => { 
        console.log('Connected!'); 
        callback(client);
    })
    .catch(err => { console.log(err); });


};

module.exports = mongoConnect;


