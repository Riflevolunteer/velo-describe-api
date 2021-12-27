CREATE TABLE `component_group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `year_from` varchar(45) DEFAULT NULL,
  `year_to` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`group_id`)
);
