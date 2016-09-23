var connection = require('./sql');
var request = require('request');
var util = require('util');

function User() {

    this.get = function (sortby, orderby, spage, res) {
        connection.acquire(function (err, con) {
            var limits;
            if(page > 20){
                page = page %20;
            }
            limits = 50 * (page - 1);
            console.log(limits);
            var resultQuery = con.query('select * from Users ORDER BY ? ? LIMIT ? , 50',[sortby], [orderby], [limits] ,function(err, result) {
                if(result.length != 0){
                    res.send(result);
                }
                else{
                    res.send({'status' : 'No Result'});
                }
                console.log(resultQuery);
            });
            con.release();
        });
    };
}
module.exports = new User();



