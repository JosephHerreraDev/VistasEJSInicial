const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node',
    password:'toor'
});
module.exports = pool.promise();