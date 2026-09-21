CREATE TABLE `component_group` (
  `group_id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(45) DEFAULT NULL,
  -- NULL = shared across brands (small, curated exception list — see
  -- SHARED_GROUP_TITLES in scripts/generate-update-sql.js).
  -- Non-NULL scopes the group to a single brand.
  `brand_id` int DEFAULT NULL,
  `description` varchar(45) DEFAULT NULL,
  `year_from` varchar(45) DEFAULT NULL,
  `year_to` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`group_id`),
  KEY `idx_component_group_brand_id` (`brand_id`)
);
