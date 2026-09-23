CREATE TABLE `component_detail` (
  `component_id` int NOT NULL AUTO_INCREMENT,
  `brand_id` int DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `year_from` varchar(45) DEFAULT NULL,
  `year_to` varchar(45) DEFAULT NULL,
  `image` blob,
  `category_id` int DEFAULT NULL,
  `group_id` int DEFAULT NULL,
  `search_text` varchar(255) DEFAULT NULL,
  -- velobase component GUID (the ID= query param on the source page). This is
  -- the idempotency key for loads: the same name+brand legitimately recurs
  -- across categories (e.g. an "Ofmega Vantage" brakeset AND crankset) and
  -- even within one category as variants, so title-based dedupe drops data.
  `source_id` varchar(36) DEFAULT NULL,
  PRIMARY KEY (`component_id`),
  UNIQUE KEY `uq_component_detail_source_id` (`source_id`)
);
