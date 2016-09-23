var connection = require('./sql');
var request = require('request');
var util = require('util');

function User() {

    this.get = function (sortby,orderby,page, res) {
        connection.acquire(function(err, con) {
            console.log(sortby);
            console.log(orderby);
            console.log(page);
            var limits;
            if(page > 20){
                page = page %20;
            }
            limits = 50 * (page - 1);
            con.query('select * from Users ORBER BY ? ? LIMIT ? , 50',[sortby], [orderby], [limits] ,function(err, result) {
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



