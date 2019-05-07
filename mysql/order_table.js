let orderSql = {
    "addOrder":"INSERT INTO Reservation(cusId,barberId,shopId,serveTime,money,status,comment,shopScpre,barberScore,createTime,finshedTime,commentTime) VALUES (?, ?, ?, ?, ?, 1, '', 0, 0, ?,'','')",
    "commentOrder":"update Reservation set comment=?,shopScore=?,barberScore=?,commentTime=? where id=?",
    "updateOrderStatus":"update Reservation set status =2 where id=?",
    "getBarberOrder":"select * from Reservation where barberId=?",
    "getShopOrder":"select * from Reservation where shopId=?",
};

module.exports = orderSql;