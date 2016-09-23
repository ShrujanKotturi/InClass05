var connection = require('./sql');
var request = require('request');
var util = require('util');

function User() {

    this.get = function (sortby, orderby, page, res) {

        connection.acquire(function (err, con) {
            var limits;
            if(page > 20){
                page = page %20;
            }
            limits = 50 * (page - 1);
            var resultQuery = con.query('SELECT * FROM Users ORDER BY ? ? LIMIT ? , ?', [sortby, orderby, limits, 50], function (err, result) {
                console.log(resultQuery);
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



