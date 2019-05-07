let orderSql = {
    "addOrder":"INSERT INTO Reservation(cusId,barberId,shopId,serveTime,money,status,comment,shopScpre,barberScore,createTime,finshedTime,commentTime) VALUES (?, ?, ?, ?, ?, 1, '', 0, 0, ?,'','')",
    "commentOrder":"update Reservation set comment=?,shopScore=?,barberScore=?,commentTime=? where id=?",
    "updateOrderStatus":"update Reservation set status =2 where id=?",
    "getBarberOrder":"select * from Reservation where barberId=? order by createTime DESC",
    "getShopOrder":"select * from Reservation where shopId=? order by createTime DESC",
    "getCusOrder":"select * from Reservation where cusId=? order by createTime DESC",
};

module.exports = orderSql;