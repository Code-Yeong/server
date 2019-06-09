let adminSql = {
    'login':'select * from Admin where phone=? and password=?',
    'queryAllOrder':'select * from Reservation order by createTime desc',
    "getStaffOrder":"select r.id,r.createTime,r.address,r.serveTime,r.finshedTime,r.commentTime,r.cusId,r.barberId,r.shopId,r.serveName,r.status,r.money,r.comment,u.name as cusName,u.avatar as avatar,r.verified as verified,r.code as code from Reservation r,User u where r.cusId=u._id order by serveTime ASC",
};

module.exports = adminSql;