CREATE TABLE `bike_spec` (
  `bike_spec_id` int NOT NULL AUTO_INCREMENT,
  `bike_id` int DEFAULT NULL,
  `label_id` int DEFAULT NULL,
  `raw_label` varchar(90) DEFAULT NULL,
  `value_text` varchar(255) DEFAULT NULL,
  `component_id` int DEFAULT NULL,
  -- Set on insert and bumped by the component_id back-fill UPDATE, so it
  -- records when a spec was last (re)linked.
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`bike_spec_id`),
  KEY `idx_bike_spec_bike_id` (`bike_id`),
  KEY `idx_bike_spec_label_id` (`label_id`),
  KEY `idx_bike_spec_component_id` (`component_id`)
);
