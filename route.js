var user = require('./user');

module.exports = {
    configure: function(app) {
        app.get('/users', function (req, res) {
            user.get(req.query.sortby, req.query.orderby, req.query.pagenumber, res);
        });
    }
};

