let orderSql = {
    "addOrder":"INSERT INTO Reservation(cusId,barberId,shopId,serveTime,serveName,money,status,comment,shopScpre,barberScore,createTime,finshedTime,commentTime) VALUES (?, ?, ?, ?, ?,?,1, '', 0, 0, ?,'','')",
    "commentOrder":"update Reservation set status=4, comment=?,shopScpre=?,barberScore=?,commentTime=? where id=?",
    "getBarberOrder":"select * from Reservation where barberId=? order by createTime DESC",
    "getShopOrder":"select * from Reservation where shopId=? order by createTime DESC",
    "getCusOrder":"select r.id,r.createTime,r.address,r.serveTime,r.finshedTime,r.commentTime,r.cusId,r.barberId,r.shopId,r.serveName,r.status,r.money,r.comment,b.name as staffName,b.avatar as avatar from Reservation r,Barber b where r.barberId=b.id and r.cusId=? order by createTime DESC",
    "getStaffOrder":"select r.id,r.createTime,r.address,r.serveTime,r.finshedTime,r.commentTime,r.cusId,r.barberId,r.shopId,r.serveName,r.status,r.money,r.comment,u.name as cusName,u.avatar as avatar from Reservation r,User u where r.cusId=u._id and r.barberId=? order by serveTime ASC",
    "getBarberUnStartOrder":"select * from Reservation where barberId=? and status<3",
    "updateOrderStatus":"update Reservation set status=? where id=?"
};

module.exports = orderSql;