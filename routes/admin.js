let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let barberSql = require('../mysql/barber_table');
let shopSql = require('../mysql/shop_table');
let addressSql = require('../mysql/address_table');
let router = express.Router();

router.get('/search/shop', function(req, res, next) {
    console.log(Date.now()+':admin get all shop');
    conn.query(shopSql.getAllShops, [], function (err, result) {
        if (err) {
            console.log(err);
            res.jsonp({'result':'error', 'status':errorCode.dbError});
        } else {
            let urls='';
            for(let m=0;m<result.length;m++){
                let shop = result[m];
                // urls.push('select * from Barber where shop='+shop['id']);
                urls+=('select * from Barber where shop='+shop['id'])
                urls+=';';
            }
            urls = urls.substring(0,urls.length-1);
            if(urls.length>0) {
                conn.query(urls, [], function (err, barbers) {
                    if (err) {
                        console.log(err);
                        res.jsonp({'result': 'error', 'status': errorCode.dbError});
                    } else {
                        for(let i=0;i<barbers.length;i++){
                            let str= JSON.stringify(result[i]);
                            let s = typeof str =='string'? JSON.parse(str):str;
                            s.barber = barbers[i];
                            result[i]=s;
                        }
                        res.jsonp({'result': result, 'status': errorCode.loginSuccess});
                    }
                });
            }else{
                res.jsonp({'result': result, 'status': errorCode.loginSuccess});
            }
        }
    });
});

module.exports = router;