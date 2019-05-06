let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let shopSql = require('../mysql/shop_table');
let router = express.Router();

router.get('/getAllShop', function(req, res, next) {
    console.log(Date.now()+':shop get all shop');
    conn.query(shopSql.getAllShops, [], function (err, result) {
        if (err) {
            console.log(err);
            res.jsonp({'result':'error', 'status':errorCode.dbError});
        } else {
            res.jsonp({'result':result, 'status':errorCode.loginSuccess});
        }
    });
});