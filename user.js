var connection = require('./sql');
var request = require('request');
var util = require('util');

function User() {

    this.get = function (log, res) {
        connection.acquire(function(err, con) {
            console.log(log);
            con.query('select * from Users ORBER BY ? ?',[log.sortby], [log.orderby], function(err, result) {
                if(result.length != 0){
                    res.send(result);
                }
                else{
                    res.send({'status' : 'No Result'});
                }
            });
            con.release();
        });
    };
}
module.exports = new User();



