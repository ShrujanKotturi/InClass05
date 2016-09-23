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
            var sql = 'SELECT * FROM Users ORDER BY ' + sortby + ' ' + orderby + ' LIMIT ' + limits + ', 50';
            console.log("SQL : " + sql);
            con.query(sql, function (err, result) {
                if(result.length != 0){
                    res.send(result);
                }
                else{
                    res.send({'status' : 'No Result'});
                }
                //console.log(query);
            });
            con.release();
        });
    };
}
module.exports = new User();



