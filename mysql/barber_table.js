let BarberSql = {
    'regist':"insert into Barber(id,name, password,phone,regist_time,last_modify,status,level,sex,score,money) values(?,?,?,?,?,?,?,?,?,?,?)",
    'login':'select * from Barber where phone =? and password=?',
    'changeAvatar':'update Barber set avatar=? where _id=?',
    'isPhoneExist': 'select * from Barber where phone=?',
    'updateLastLogin': 'update Barber set last_login=? where _id=?',
    'addAddress':'insert into Adderss(cusId,name,phone,address,status,midifyTime) values(?,?,?,?,?,?)',
    'getAllAddress':'select * from Adderss where cusId=? and status!=0 order by midifyTime DESC',
    'updateAddress':'update Adderss set name=?,phone=?,address=?,status=?,midifyTime=? where id=?',
    'deleteAddress':'update Adderss set status=0,midifyTime=? where id=?',
    'verify':'update Barber set name=?,idcard=?,certificate=?,last_modify=?,status=2 where id=?',
    'applyShop':'update Barber set shop=?,shopStatus=1,submitTime=? where id=?',
    'admitApplyShop':'update Barber set shopStatus=2,admitTime=? where id=?',
    'cancelApplyShop':'update Barber set shopStatus=0 where id=?',
};

module.exports = BarberSql;