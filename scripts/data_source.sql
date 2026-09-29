CREATE TABLE `data_source` (
  `source_id` int NOT NULL AUTO_INCREMENT,
  -- 'velobase' | 'catalogue' | 'manual'. Not an enum so new source types
  -- (e.g. a future second scraped site) don't need a schema change.
  `source_type` varchar(45) NOT NULL,
  `label` varchar(255) NOT NULL,
  -- URL for a crawled source, or a free-text catalogue citation
  -- (e.g. "Shimano June 1984 dealer catalogue"). NULL for ad-hoc manual edits.
  `citation` varchar(255) DEFAULT NULL,
  `ingested_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`source_id`),
  KEY `idx_data_source_type` (`source_type`)
);
