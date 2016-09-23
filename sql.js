var mysql = require('mysql');

function Connection() {
    this.pool = null;

    this.init = function() {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'InClass05'
        });
    };

    this.acquire = function (callback) {
        this.pool.getConnection(function(err, connection) {
            if(err){
                console.error(err);
            }
            callback(err, connection);
        });
    };
}

module.exports = new Connection();


