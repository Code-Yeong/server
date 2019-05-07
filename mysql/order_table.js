let orderSql = {
    "addOrder":"INSERT INTO Reservation VALUES (?, ?, ?, ?, ?, 1, '', 0, 0, ?,'','')",
    "commentOrder":"update Reservation set comment=?,shopScore=?,barberScore=?,commentTime=? where id=?",
    "updateOrderStatus":"update Reservation set status =2 where id=?",
    "getBarberOrder":"select * from Reservation where barberId=?",
    "getShopOrder":"select * from Reservation where shopId=?",
};

module.exports = orderSql;