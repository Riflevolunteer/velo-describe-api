-- One-off cleanup: wipe existing component data before loading velobase-update.sql.
-- Order matters: component_detail and category_brand reference the lookup tables,
-- so they must be cleared first.

DELETE FROM component_detail;
DELETE FROM category_brand;
DELETE FROM component_brand;
DELETE FROM component_group;
DELETE FROM component_category;

ALTER TABLE component_detail AUTO_INCREMENT = 1;
ALTER TABLE component_brand AUTO_INCREMENT = 1;
ALTER TABLE component_group AUTO_INCREMENT = 1;
ALTER TABLE component_category AUTO_INCREMENT = 1;
