let adminSql = {
    'login':'select * from Admin where phone=? and password=?',
    "queryAllOrder":"select r.id,r.createTime,r.address,r.serveTime,r.finshedTime,r.commentTime,r.cusId,r.barberId,r.shopId,r.serveName,r.status,r.money,r.comment,u.name as cusName,u.avatar as avatar,r.verified as verified,r.code as code,b.name as barberName, b.avatar as barberAvatar from Reservation r,User u,Barber b where r.cusId=u._id order by serveTime ASC",
};

module.exports = adminSql;