let orderSql = {
    "addOrder":"INSERT INTO Reservation(cusId,barberId,shopId,serveTime,serveName,money,status,comment,shopScpre,barberScore,createTime,finshedTime,commentTime,code) VALUES (?, ?, ?, ?, ?,?,1, '', 0, 0, ?,'','',?)",
    "commentOrder":"update Reservation set status=4, comment=?,shopScpre=?,barberScore=?,commentTime=? where id=?",
    "getBarberOrder":"select * from Reservation where barberId=? order by createTime DESC",
    "getShopOrder":"select * from Reservation where shopId=? order by createTime DESC",
    "getCusOrder":"select r.id,r.createTime,r.address,r.serveTime,r.finshedTime,r.commentTime,r.cusId,r.barberId,r.shopId,r.serveName,r.status,r.money,r.comment,b.name as staffName,b.avatar as avatar,r.code as code from Reservation r,Barber b where r.barberId=b.id and r.cusId=? order by createTime DESC",
    "getStaffOrder":"select r.id,r.createTime,r.address,r.serveTime,r.finshedTime,r.commentTime,r.cusId,r.barberId,r.shopId,r.serveName,r.status,r.money,r.comment,u.name as cusName,u.avatar as avatar,r.verified as verified,r.code as code from Reservation r,User u where r.cusId=u._id and r.barberId=? order by serveTime ASC",
    "getBarberUnStartOrder":"select * from Reservation where barberId=? and status<3",
    "updateOrderStatus":"update Reservation set status=? where id=?",
    "updateVerifiedStatus":"update Reservation set verified=1 where id=?",
    "scan":"update Reservation set status=3 where id=? and cusId=? and barberId=?",
    "listenStatus" : "select status from Reservation where id=?",
    "barberComment" : "select r.id as rId,r.comment, r.commentTime, r.cusId, u.avatar as cusAvatr,  u.nick_name as cusName,u.sex as cusSex,r.barberScore as starCount,s.avatar as shopAvatar, s.name as shopName, r.servename from Barber b, User u, Reservation r, Shop s where r.commentTime!='' and b.id=r.barberId and u._id=r.cusId and s.id=r.shopId and r.barberId=? order by r.commentTime DESC;",
};

module.exports = orderSql;