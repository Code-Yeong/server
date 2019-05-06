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
            console.log(result);
            let urls='';
            for(let m=0;m<result.length;m++){
                let shop = result[m];
                // urls.push('select * from Barber where shop='+shop['id']);
                urls+=('select * from Barber where shop='+shop['id'])
                urls+=',';
                console.log(urls);
            }
            urls = urls.substring(0,urls.length-1);
            if(urls.length>0) {
                conn.query(urls, [], function (err, barbers) {
                    // console.log(barbers);
                    if (err) {
                        console.log(err);
                        res.jsonp({'result': 'error', 'status': errorCode.dbError});
                    } else {
                        console.log(barbers.length);
                        for(let i=0;i<barbers.length;i++){
                            // urls.push('select * from Barber where shop='+shop['id']);
                            let str= JSON.stringify(result[i]);
                            // console.log(JSON.parse(data));
                            let s = typeof str =='string'? JSON.parse(str):str;
                            s.barber = barbers[i];
                           result[i]=s;
                        }
                        console.log('barber....');
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