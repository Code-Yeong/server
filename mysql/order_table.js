let orderSql = {
    "addOrder":"INSERT INTO Reservation(cusId,barberId,shopId,serveTime,serveName,money,status,comment,shopScpre,barberScore,createTime,finshedTime,commentTime) VALUES (?, ?, ?, ?, ?,?,1, '', 0, 0, ?,'','')",
    "commentOrder":"update Reservation set comment=?,shopScore=?,barberScore=?,commentTime=? where id=?",
    "updateOrderStatus":"update Reservation set status =2 where id=?",
    "getBarberOrder":"select * from Reservation where barberId=? order by createTime DESC",
    "getShopOrder":"select * from Reservation where shopId=? order by createTime DESC",
    "getCusOrder":"select r.id,r.createTime,r.serveTime,r.finshedTime,r.commentTime,r.cusId,r.barberId,r.shopId,r.serveName,r.status,r.money,r.comment,b.name as staffName,b.avatar as avatar from Reservation r,Barber b where r.barberId=b.id and r.cusId=? order by status ASC,createTime DESC",
    "getBarberUnStartOrder":"select * from Reservation where barberId=? and status<3",
};

module.exports = orderSql;