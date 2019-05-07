let shop = {
    'getAllShops':'select * from Shop',
    'getShopStatistic':'select avg(shopScpre) as score, count(shopId) as orderCount from Reservation where shopId=?',
};

module.exports = shop;