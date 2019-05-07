let user = {
    'regist':"insert into User(name, password,phone,regist_time,last_modify,status,level,sex,score,money) values(?,?,?,?,?,?,?,?,?,?)",
    'login':'select * from User where phone =? and password=?',
    'isPhoneExist': 'select * from User where phone=?',
    'updateLastLogin': 'update User set last_login=? where _id=?',
    'searchAddress':'select * from Adderss where cusId=? and status!=0',
    'addAddress':'insert into Adderss(cusId,name,phone,address,status,midifyTime) values(?,?,?,?,?,?)',
    'getAllAddress':'select * from Adderss where cusId=?',
    'updateAddress':'update Adderss set name=?,phone=?,address=?,status=?,midifyTime=? where id=?',
    'deleteAddress':'update Adderss set status=0,midifyTime=? where id=?',
};

module.exports = user;