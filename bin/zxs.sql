-- MySQL dump 10.13  Distrib 5.7.25, for Linux (x86_64)
--
-- Host: localhost    Database: zxs
-- ------------------------------------------------------
-- Server version	5.7.25-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Adderss`
--

DROP TABLE IF EXISTS `Adderss`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Adderss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cusId` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL COMMENT '0: 非默认地址\n1:默认地址',
  `midifyTime` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Adderss`
--

LOCK TABLES `Adderss` WRITE;
/*!40000 ALTER TABLE `Adderss` DISABLE KEYS */;
INSERT INTO `Adderss` VALUES (1,'32','测试姓名哦','00000000000','测试地址哦','0','1557306824298'),(2,'32','联系人2. ','1','北洋园','0','1557232386429'),(3,'32','老王','15522552255','老王住在澜园15号楼','1','1557597838982'),(4,'32','老郭','15522552255','澜园16号楼','1','1557649355347'),(5,'32','郭','15522552255','你猜我的地址是多少','1','1557414182360'),(6,'32','大姑','13311112222','北洋园校区','1','1557413809985'),(7,'32','一个人','13345678989','桃园食堂','1','1557420026848'),(8,'32','1111111111','1111111','11111114','0','1557299423399'),(9,'33','警察','110','警察局','0','1559673940880'),(10,'33','警察局长','1101','警察局','0','1559673938757'),(11,'33','小偷','1102','警察局','0','1559673935921'),(12,'33','大头','110111','检察厅','0','1559673933356'),(13,'33','匿名','12378','警察局','0','1559673926332'),(14,'33','强盗','11122225555','大叔路警察局115室','2','1559674075964'),(15,'32','批发批发。','12345','批发批发。','0','1557299420496'),(16,'32','第10个。','1366','26','0','1557299416367'),(17,'32','联系人a','1111333336666','是一个迷人的地址','2','1557649362547'),(18,'32','略略略','85858535','地址','0','1557231761140'),(19,'33','睡美人','123123123444','地址123','0','1559673914899'),(20,'33','睡美人','123123123','地址456','1','1559582203629'),(21,'33','Lisa','12345678901','New York','1','1559673977178'),(22,'34','吴狄','15522508507','津南区天津大学北洋园诚园','0','1557299284646'),(23,'5','CodeYeong','12332112332','北京市','1','1557230321449'),(24,'35','Yeong','1000000001','TJU','0','1557417217823'),(25,'35','yeong','23432','543543','1','1557560325631'),(26,'35','ZhangSan','11111100092','TianJin University','2','1557562232817'),(27,'36','Guo','15822367057','Beijing','2','1557636122796'),(28,'1','Nik','12356543589','TJU','2','1559364899833'),(29,'34','李梅梅','15522225555','大树路55号909室','1','1559675123818'),(30,'34','李美美','16622226666','小河路55号303室','2','1559675239904'),(31,'34','韩梅梅','17722772277','太阳路222号606室','1','1559675232348'),(32,'39','大美丽','15522552255','诚园七斋','2','1559713702902');
/*!40000 ALTER TABLE `Adderss` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Barber`
--

DROP TABLE IF EXISTS `Barber`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Barber` (
  `_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增长',
  `id` varchar(45) DEFAULT NULL COMMENT '用户id，客户端读到的id',
  `name` varchar(45) DEFAULT NULL COMMENT '姓名',
  `nick_name` varchar(45) DEFAULT NULL COMMENT '昵称',
  `phone` varchar(45) DEFAULT NULL COMMENT '电话',
  `password` varchar(45) DEFAULT NULL COMMENT '密码',
  `avatar` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '账号状态',
  `level` int(11) DEFAULT NULL COMMENT '用户等级',
  `sex` int(11) DEFAULT NULL COMMENT '性别',
  `score` int(11) DEFAULT NULL COMMENT '账号积分',
  `money` float DEFAULT NULL COMMENT '账户余额',
  `address` varchar(45) DEFAULT NULL COMMENT '地址',
  `shop` int(11) DEFAULT NULL COMMENT '所属商铺',
  `idcard` varchar(45) DEFAULT NULL COMMENT '身份证号',
  `certificate` varchar(255) DEFAULT NULL,
  `longitude` float DEFAULT NULL COMMENT '经度',
  `altitude` float DEFAULT NULL COMMENT '纬度',
  `description` varchar(45) DEFAULT NULL COMMENT '用户描述',
  `regist_time` varchar(45) DEFAULT NULL COMMENT '注册时间',
  `last_login` varchar(45) DEFAULT NULL COMMENT '上次登录时间',
  `last_modify` varchar(45) DEFAULT NULL COMMENT '上次修改时间',
  `shopStatus` int(2) DEFAULT '0',
  `submitTime` varchar(20) DEFAULT NULL,
  `admitTime` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `id_UNIQUE` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Barber`
--

LOCK TABLES `Barber` WRITE;
/*!40000 ALTER TABLE `Barber` DISABLE KEYS */;
INSERT INTO `Barber` VALUES (1,'101','Hello','Jack','11111111111','123456','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1150860391,758645788&fm=15&gp=0.jpg',2,1,1,4,0,'北京市',111111,'421127199210124737','http://wd.chivan.cn:3000/images/1559626011006.jpg',NULL,NULL,NULL,NULL,NULL,'1559626011500',0,NULL,NULL),(2,'102','李四','Lisa','22222222222','123456','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2810496656,2462494457&fm=26&gp=0.jpg',1,1,1,0,0,'北京市海淀区',111111,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL),(3,'103','范范','Fancy','33333333333','123456','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1581799157,1226394772&fm=15&gp=0.jpg',1,1,1,0,0,'天津市',111111,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL),(4,'103','范范','Fancy','33333333333','123456','https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1581799157,1226394772&fm=15&gp=0.jpg',1,1,1,0,0,'天津市',111111,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL),(5,'5','Pibao',NULL,'12345678909','1',NULL,1,1,0,0,0,NULL,111113,NULL,NULL,NULL,NULL,NULL,'1557593248291',NULL,'1557593248291',0,NULL,NULL),(6,'1557593792029','BaobaoPi',NULL,'13694059684','1',NULL,1,1,0,0,0,NULL,111112,NULL,NULL,NULL,NULL,NULL,'1557593792029',NULL,'1557593792029',0,NULL,NULL),(7,'1557599185658','吴狄',NULL,'123','1234',NULL,2,1,0,0,0,NULL,111112,'421381199709190045','http://wd.chivan.cn:3000/images/1559645644627.jpg',NULL,NULL,NULL,'1557599185658',NULL,'1559645644823',0,NULL,NULL),(8,'1559627493954','Yeong',NULL,'16601047439','12345678',NULL,2,1,0,0,0,NULL,111111,'421127199210124737','http://wd.chivan.cn:3000/images/1559627618553.jpg',NULL,NULL,NULL,'1559627493954',NULL,'1559627619082',0,'1559739556158',NULL),(9,'1559674455729','树莓',NULL,'15522225558','12345678',NULL,1,1,0,0,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'1559674455729',NULL,'1559674455729',0,NULL,NULL),(10,'1559716350968','新注册理发师',NULL,'16622662266','12345678',NULL,1,1,0,0,0,NULL,111112,NULL,NULL,NULL,NULL,NULL,'1559716350968',NULL,'1559716350968',1,'1559716941693',NULL);
/*!40000 ALTER TABLE `Barber` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Reservation`
--

DROP TABLE IF EXISTS `Reservation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Reservation` (
  `id` int(40) unsigned NOT NULL AUTO_INCREMENT,
  `cusId` varchar(40) DEFAULT NULL,
  `barberId` varchar(40) DEFAULT NULL,
  `shopId` varchar(40) DEFAULT NULL,
  `serveTime` varchar(30) DEFAULT NULL,
  `money` float(255,0) DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `shopScpre` int(255) DEFAULT NULL,
  `barberScore` int(255) DEFAULT NULL,
  `createTime` varchar(40) DEFAULT NULL,
  `finshedTime` varchar(40) DEFAULT NULL,
  `commentTime` varchar(40) DEFAULT NULL,
  `serveName` varchar(40) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL,
  `verified` varchar(5) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Reservation`
--

LOCK TABLES `Reservation` WRITE;
/*!40000 ALTER TABLE `Reservation` DISABLE KEYS */;
INSERT INTO `Reservation` VALUES (17,'32','101','111111','1557342226649-1',35,3,'very good!',5,5,'1557342228813','','1557604964176','理发','北京欢迎你','1054','0'),(18,'32','101','111111','1557515696184-2',35,3,'',0,0,'1557342897863','','','理发','北京欢迎你','1054','0'),(19,'32','102','111111','1557342911505-5',35,3,'',0,0,'1557342912949','','','理发','北京欢迎你','1054','0'),(20,'32','101','111111','1557453037271-1',35,3,'',0,0,'1557366638663','','','理发','北京欢迎你','1054','0'),(21,'32','103','111111','1557412488836-1',35,3,'',0,0,'1557412491646','','','理发','北京欢迎你','1054','0'),(22,'35','101','111111','1557415147537-1',35,3,'',0,0,'1557415149348','','','理发','北京欢迎你','1054','0'),(23,'35','101','111111','1557501551998-1',35,3,'',0,0,'1557415153438','','','理发','北京欢迎你','1054','0'),(24,'35','103','111111','1557501584103-5',35,3,'',0,0,'1557415185150','','','理发','北京欢迎你','1054','0'),(25,'35','102','111111','1557588007939-4',35,3,'',0,0,'1557415208895','','','理发','北京欢迎你','1054','0'),(26,'35','101','111111','1557558252772-5',35,3,'',0,0,'1557558254005','','','理发',NULL,'1054','0'),(27,'35','101','111111','1557558265358-1',35,3,'',0,0,'1557558266704','','','理发',NULL,'1054','0'),(28,'35','101','111111','1557558620288-4',35,3,'',0,0,'1557558622176','','','理发',NULL,'1054','0'),(29,'35','101','111111','1557645030787-4',35,3,'',0,0,'1557558632099','','','理发',NULL,'1054','0'),(30,'35','103','111111','1557734266094-2',35,3,'',0,0,'1557561467038','','','理发',NULL,'1054','0'),(31,'35','103','111111','1557562242466-2',35,3,'',0,0,'1557562244130','','','理发',NULL,'1054','0'),(32,'36','1557599185658','111112','1557636090277-5',35,3,'pretty good!',5,5,'1557636125930','','1557636558480','理发',NULL,'1054','0'),(33,'36','1557599185658','111112','1557723318054-4',35,3,'',0,0,'1557636921343','','','理发',NULL,'1054','0'),(34,'35','1557599185658','111112','1557723458157-5',35,3,'',0,0,'1557637060854','','','理发',NULL,'1054','0'),(35,'32','1557599185658','111112','1557637990603-1',35,3,'',0,0,'1557637993346','','','理发',NULL,'8978','0'),(36,'32','5','111113','1557730545448-2',35,3,'',0,0,'1557644146669','','','理发',NULL,'2133','0'),(37,'32','1557599185658','111112','1557659269316-3',35,3,'',0,0,'1557659274005','','','理发',NULL,'1260','0'),(38,'32','101','111111','1557659666920-1',35,4,'Very good , thank you !!!',3,4,'1557659670278','','1558869233187','理发',NULL,'7138','0'),(39,'32','101','111111','1557659987033-1',35,4,'古德！',5,5,'1557659988130','','1557750295576','理发',NULL,'7037','0'),(40,'32','101','111111','1557660004148-2',35,4,'fdsfdsafdsafdfdsfds',3,3,'1557660005186','','1557661545370','理发',NULL,'2773','0'),(41,'32','1557599185658','111112','1557664519518-1',35,3,'',0,0,'1557664521792','','','理发',NULL,'8878','1'),(42,'32','1557599185658','111112','1557664525926-2',35,5,'',0,0,'1557664527907','','','理发',NULL,'8061','0'),(43,'33','1557599185658','111112','1557664552252-3',35,5,'',0,0,'1557664565532','','','理发',NULL,'2476','0'),(44,'32','101','111111','1558885663645-2',35,3,'',0,0,'1558799441653','','','理发',NULL,'7623','1'),(45,'32','101','111111','1558886290178-4',35,2,'',0,0,'1558799891197','','','理发',NULL,'4364',NULL),(46,'32','1557599185658','111112','1558886342109-5',35,5,'',0,0,'1558799943346','','','理发',NULL,'9767',NULL),(47,'32','1557599185658','111112','1558972750361-5',35,5,'',0,0,'1558799951437','','','理发',NULL,'707',NULL),(48,'32','101','111111','1559493055118-1',35,3,'',0,0,'1559320256846','','','理发',NULL,'9284','1'),(49,'32','101','111111','1559525661400-3',35,3,'',0,0,'1559352863342','','','理发',NULL,'7496','1'),(50,'32','101','111111','1559439459550-1',35,3,'',0,0,'1559353061108','','','理发',NULL,'6579','1'),(51,'32','101','111111','1559439463035-4',35,3,'',0,0,'1559353064385','','','理发',NULL,'8949','1'),(52,'32','101','111111','1559353404427-2',35,3,'',0,0,'1559353406204','','','理发',NULL,'1076','1'),(53,'32','101','111111','1559353407608-1',35,3,'',0,0,'1559353408981','','','理发',NULL,'3480','1'),(54,'32','101','111111','1559439809897-3',35,4,'Very good!',4,3,'1559353411212','','1559354735417','理发',NULL,'1966','1'),(55,'1','101','111111','1559451244856-2',35,2,'',0,0,'1559364902558','','','理发',NULL,'2071',NULL),(56,'33','1557593792029','111112','1559582235907-1',35,1,'',0,0,'1559582238815','','','理发',NULL,'1494',NULL),(57,'33','101','111111','1559674204565-1',35,1,'',0,0,'1559674206872','','','理发',NULL,'5624',NULL),(58,'34','1557599185658','111112','1559675460694-1',35,5,'',0,0,'1559675461837','','','理发',NULL,'5686','1'),(59,'34','1557599185658','111112','1559675465863-2',35,5,'',0,0,'1559675469087','','','理发',NULL,'111',NULL),(60,'34','1557599185658','111112','1559675473036-3',35,5,'',0,0,'1559675474147','','','理发',NULL,'8217',NULL),(61,'32','1557599185658','111112','1559711045605-2',35,5,'',0,0,'1559711048638','','','理发',NULL,'938',NULL),(62,'39','1557599185658','111112','1559714013022-4',35,5,'',0,0,'1559714013892','','','理发',NULL,'215',NULL),(63,'34','1557599185658','111112','1559714573436-1',35,5,'',0,0,'1559714574632','','','理发',NULL,'7592',NULL),(64,'34','1557599185658','111112','1559714578062-2',35,4,'奈斯',5,5,'1559714578870','','1559716121944','理发',NULL,'2070','1'),(65,'34','1557599185658','111112','1559725216509-1',35,3,'',0,0,'1559725219049','','','理发',NULL,'144','1');
/*!40000 ALTER TABLE `Reservation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shop`
--

DROP TABLE IF EXISTS `Shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Shop` (
  `_id` int(11) NOT NULL AUTO_INCREMENT,
  `id` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `ownner` varchar(45) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `license` varchar(45) DEFAULT NULL,
  `auth_method` int(11) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `regist_time` varchar(45) DEFAULT NULL,
  `last_modify` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `_id_UNIQUE` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shop`
--

LOCK TABLES `Shop` WRITE;
/*!40000 ALTER TABLE `Shop` DISABLE KEYS */;
INSERT INTO `Shop` VALUES (1,'111111','天大店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区图书馆北侧一层','1001',1,'五星推荐','1001','1001'),(2,'111112','诚园店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区诚园','1001',1,'五星推荐','1001','1001'),(3,'111113','兰园店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区兰园','1001',1,'五星推荐','1001','1001'),(4,'111114','青园店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区青园','1001',1,'五星推荐','1001','1001'),(5,'111115','知园店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区知园','1001',1,'五星推荐','1001','1001'),(6,'111116','梅园店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区梅园','1001',1,'五星推荐','1001','1001'),(7,'111117','软件学院店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区软件学院一层','1001',1,'五星推荐','1001','1001'),(8,'111118','格园店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'天津大学北洋园校区格园一层','1001',1,'五星推荐','1001','1001'),(9,'111119','南开1店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'南开大学','1001',1,'五星推荐','1001','1001'),(10,'1111110','南开2店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'南开大学','1001',1,'五星推荐','1001','1001'),(11,'1111111','南开3店','0','https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4090427158,2008116149&fm=26&gp=0.jpg',1,1,'南开大学','1001',1,'五星推荐','1001','1001');
/*!40000 ALTER TABLE `Shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `_id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '自增长，插入语句时不同赋值',
  `name` varchar(45) DEFAULT NULL COMMENT '用户姓名',
  `nick_name` varchar(45) DEFAULT NULL COMMENT '昵称',
  `phone` varchar(45) DEFAULT NULL COMMENT '电话号码',
  `password` varchar(45) DEFAULT NULL COMMENT '用户密码',
  `avatar` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL COMMENT '用户状态（待定义）',
  `level` int(11) DEFAULT NULL COMMENT '用户等级（待定义）',
  `sex` int(11) DEFAULT NULL COMMENT '性别',
  `score` int(11) DEFAULT NULL COMMENT '账户积分',
  `money` float DEFAULT NULL COMMENT '账户余额',
  `address` varchar(45) DEFAULT NULL COMMENT '地址',
  `description` varchar(45) DEFAULT NULL COMMENT '用户描述',
  `regist_time` varchar(45) DEFAULT NULL COMMENT '注册时间',
  `last_login` varchar(45) DEFAULT NULL COMMENT '上次登录时间',
  `last_modify` varchar(45) DEFAULT NULL COMMENT '上次修改',
  PRIMARY KEY (`_id`),
  UNIQUE KEY `id_UNIQUE` (`_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES (1,'郭青云','Chivan','15822367057','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',1,1,0,20,10,'北京市海淀区','无','2019/04/20 10:20:05','1559379766694','2019/04/20 10:20:05'),(2,'Chivan',NULL,NULL,'123123','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(3,NULL,NULL,NULL,NULL,'http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(4,NULL,NULL,NULL,NULL,'http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(5,'Chivan',NULL,NULL,'123123','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6,NULL,NULL,NULL,NULL,'http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'老王',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'老王',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'老王',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'老王',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'老王',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'老王1',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'老王1',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(21,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(22,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(23,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(24,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,'老王2',NULL,'12344448888','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(30,'老外',NULL,'123456789','123456','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,'老外',NULL,'123456789','1234567','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,'BaiFuMei','Nik','15822367057','1234','http://wd.chivan.cn:3000/images/1559710989037.jpeg',NULL,NULL,0,NULL,NULL,NULL,'fdsfdsfs',NULL,'1559714480448','1559357969535'),(33,'警察',NULL,'110','110','http://wd.chivan.cn:3000/images/1559582273005.jpg',1,1,0,0,0,NULL,NULL,'1557074766686','1559675733965','1557074766686'),(34,'嘻嘻嘻',NULL,'1','1','http://wd.chivan.cn:3000/images/1559675262992.jpg',1,1,0,0,0,NULL,NULL,'1557170607759','1559785096823','1557170607759'),(35,'Yeong',NULL,'100','100','http://img2.imgtn.bdimg.com/it/u=893859182,2877434310&fm=26&gp=0.jpg',1,1,0,0,0,NULL,NULL,'1557415113808','1557636993090','1557415113808'),(36,'大白兔',NULL,'101','101',NULL,1,1,0,0,0,NULL,NULL,'1557635743277','1557636536689','1557635743277'),(37,'狄狄狄','','15522488507','12345678',NULL,1,1,0,0,0,NULL,NULL,'1559673702404','1559673716166','1559673702404'),(38,'123456','','16601047439','123456','http://wd.chivan.cn:3000/images/1559711391326.jpg',1,1,0,0,0,NULL,NULL,'1559710868303','1559711384517','1559710868303'),(39,'会员ddd','','15522552255','12345678','http://wd.chivan.cn:3000/images/1559713413262.png',1,1,0,0,0,NULL,NULL,'1559711389630','1559714259284','1559711389630');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-06 10:14:38
