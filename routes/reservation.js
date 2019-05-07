let errorCode =  require("../utils/error_code");
let express = require('express');
let conn = require('../mysql/mysql');
let orderSql = require('../mysql/order_table');
let router = express.Router();

// "addOrder":"INSERT INTO Reservation VALUES (?, ?, ?, ?, ?, 1, '', 0, 0, ?,'','')",
router.post('/addOrder',function (req,res,next) {
    let params=req.body;
    let cusid = params['cudId'];
    let barberId = params['barberId'];
    let shopId=params['shopId'];
    let serveTime=params['serveTime'];
    let money=params['money'];
    let isEmpty=(cusid==null || barberId ==null||shopId==null||serveTime==null||money==null);
    if(isEmpty){
        res.jsonp({'result':'error', 'status':errorCode.parametersError});
    }else{
        conn.query(orderSql.addOrder,[cusid,barberId,shopId,serveTime,money,Date.now()],function (err,result) {
            if (err) {
                console.log(err);
                res.jsonp({'result':'error', 'status':errorCode.dbError});
            } else {
                res.jsonp({'result':'ok', 'status':errorCode.loginSuccess});
            }
        });
    }


});

module.exports=router;