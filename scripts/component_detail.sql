CREATE TABLE `component_detail` (
  `component_id` int NOT NULL AUTO_INCREMENT,
  `brand_id` int DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `year_from` varchar(45) DEFAULT NULL,
  `year_to` varchar(45) DEFAULT NULL,
  `image` blob,
  `category_id` int DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  PRIMARY KEY (`component_id`)
);
