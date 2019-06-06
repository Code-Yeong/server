let shop = {
    'getAllShops':'select * from Shop',
    'getShopStatistic':'select avg(shopScpre) as score, count(shopId) as orderCount from Reservation where shopId=?',
    'addShop':'INSERT INTO `Shop(id,name,ownner,avatar,level,status,address,license,auth_method,description,regist_time,last_modify)` VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
};

module.exports = shop;