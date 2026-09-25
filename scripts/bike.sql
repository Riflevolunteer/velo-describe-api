CREATE TABLE `bike` (
  `bike_id` int NOT NULL AUTO_INCREMENT,
  `brand_id` int DEFAULT NULL,
  `title` varchar(90) DEFAULT NULL,
  `category` varchar(90) DEFAULT NULL,
  `year_from` varchar(45) DEFAULT NULL,
  `year_to` varchar(45) DEFAULT NULL,
  `sizes` varchar(255) DEFAULT NULL,
  `colors` varchar(255) DEFAULT NULL,
  `weight` varchar(45) DEFAULT NULL,
  `image` blob,
  `search_text` varchar(90) DEFAULT NULL,
  PRIMARY KEY (`bike_id`),
  KEY `idx_bike_brand_id` (`brand_id`)
);
