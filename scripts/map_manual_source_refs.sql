-- Maps the 190 `component_detail` rows carrying a MANUAL-<CODE>-<YEAR>-...
-- source_id to a real per-catalogue data_source row, per the mapping in
-- .claude/skills/ingest-component-catalog/references/known-catalogs.md.
-- Additive, re-runnable: INSERT ... WHERE NOT EXISTS guards the seed rows,
-- and each UPDATE only touches source_ref IS NULL rows matching its prefix.

INSERT INTO data_source (source_type, label, citation)
SELECT 'catalogue', v.label, v.citation FROM (
  SELECT 'CAT12-1953'     AS code, 'Campagnolo Catalogo N. 12 (late 1953)'                              AS label, 'Campy1953_catalog12.pdf'      AS citation
  UNION ALL SELECT 'CAT15-1967',    'Campagnolo Catalogo N. 15 "Prodotti Speciali" (1967)',                 'Campy1967_catalog15.pdf'
  UNION ALL SELECT 'CAT16-1968',    'Campagnolo Catalogue No. 16, English edition (1968)',                  'Campy1968_catalog16.pdf'
  UNION ALL SELECT 'CAT16S-1971',   'Campagnolo Supplement to Cycle Catalogue No. 16 (November 1971)',      'Campy1971_catalog16sup/'
  UNION ALL SELECT 'CAT17-1974',    'Campagnolo Catalogue No. 17, English edition (1974)',                  'Campy1974_catalog17.pdf'
  UNION ALL SELECT 'CAT17A-1975',   'Campagnolo Catalog 17a, US English edition (1975)',                    'Campy1975_catalog17a.pdf'
  UNION ALL SELECT 'CAT18-1985',    'Campagnolo Catalogue n. 18, English edition (c. 1985)',                'Campy1985_catalog18.pdf'
  UNION ALL SELECT 'CAT18BIS-1986', 'Campagnolo Catalogue n. 18 bis, English edition (December 1986)',      'Campy1986_Catalog18bis/'
  UNION ALL SELECT 'CAT82-1982',    'Campagnolo USA "Bicycle Components" (1982)',                           'Campy1982_Olympic/'
  UNION ALL SELECT 'ATH88-1988',    'Campagnolo "Athena" brochure, USA edition (April 1988)',                'Campy1988_Athena/'
  UNION ALL SELECT 'CHO88-1988',    'Campagnolo "Chorus" brochure, USA edition (April 1988)',                'Campy1988_Chorus/'
  UNION ALL SELECT 'CDA88-1988',    'Campagnolo "Croce d''Aune" brochure, USA edition (March 1988)',         'Campy1988_Croce/'
  UNION ALL SELECT 'CEN89-1989',    'Campagnolo "Centaur" brochure, USA edition (April 1989)',               'centaur89.pdf'
  UNION ALL SELECT 'FDW-1987',      'Campagnolo "Fluid-Dynamic Wheels" brochure, USA edition (November 1987)', 'Campy1987_FluidDynamics.pdf'
  UNION ALL SELECT 'REC87-1987',    'Campagnolo "Record" brochure, USA edition (November 1987)',            'Campy1987_Record/'
  UNION ALL SELECT 'RIM91-1991',    'Campagnolo rims and Fluid-Dynamic wheels, GB edition (January 1991)',  'Campy_1991Rims.pdf'
  UNION ALL SELECT 'ROAD92-1992',   'Campagnolo 1992 Road Range, GB (1992)',                                 'Campy1992_Rims&Road/ (road)'
  UNION ALL SELECT 'RIM92-1992',    'Campagnolo 1992 Rims Range, GB (1992)',                                 'Campy1992_Rims&Road/ (rims)'
  UNION ALL SELECT 'RANGE93-1993',  'Campagnolo 1993 Product Range, GB (printed 9/92)',                      'Campyjpg1993/'
  UNION ALL SELECT 'RANGE94-1994',  'Campagnolo 1994 range catalogue, GB, 60th anniversary',                 'Campyjpg1994/'
  UNION ALL SELECT 'RANGE95-1995',  'Campagnolo 1995 range catalogue, GB',                                   'Campyjpg1995/'
  UNION ALL SELECT 'CIN82-1982',    'Cinelli "Il Grande Ciclismo" brochure (1982)',                          'Cinelli_Accessories_2.pdf'
  UNION ALL SELECT 'SHI75-1975',    'Shimano "A Complete Line of Shimano" (printed 12.1975)',                'shimanocatalog75/'
  UNION ALL SELECT 'SHI82-1982',    'Shimano 1982 Bicycle System Components (printed 01.82)',                'Shimano1982/'
  UNION ALL SELECT 'SHI84-1984',    'Shimano 1984 Bicycle System Components Dealer Catalog (June 1984)',     'Shimano 84.pdf'
) v
WHERE NOT EXISTS (
  SELECT 1 FROM data_source d WHERE d.source_type = 'catalogue' AND d.label = v.label
);

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Catalogo N. 12 (late 1953)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT12-1953-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Catalogo N. 15 "Prodotti Speciali" (1967)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT15-1967-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Catalogue No. 16, English edition (1968)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT16-1968-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Supplement to Cycle Catalogue No. 16 (November 1971)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT16S-1971-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Catalogue No. 17, English edition (1974)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT17-1974-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Catalog 17a, US English edition (1975)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT17A-1975-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Catalogue n. 18, English edition (c. 1985)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT18-1985-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo Catalogue n. 18 bis, English edition (December 1986)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT18BIS-1986-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo USA "Bicycle Components" (1982)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CAT82-1982-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo "Athena" brochure, USA edition (April 1988)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-ATH88-1988-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo "Chorus" brochure, USA edition (April 1988)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CHO88-1988-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo "Croce d''Aune" brochure, USA edition (March 1988)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CDA88-1988-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo "Centaur" brochure, USA edition (April 1989)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CEN89-1989-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo "Fluid-Dynamic Wheels" brochure, USA edition (November 1987)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-FDW-1987-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo "Record" brochure, USA edition (November 1987)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-REC87-1987-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo rims and Fluid-Dynamic wheels, GB edition (January 1991)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-RIM91-1991-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo 1992 Road Range, GB (1992)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-ROAD92-1992-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo 1992 Rims Range, GB (1992)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-RIM92-1992-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo 1993 Product Range, GB (printed 9/92)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-RANGE93-1993-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo 1994 range catalogue, GB, 60th anniversary'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-RANGE94-1994-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Campagnolo 1995 range catalogue, GB'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-RANGE95-1995-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Cinelli "Il Grande Ciclismo" brochure (1982)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-CIN82-1982-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Shimano "A Complete Line of Shimano" (printed 12.1975)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-SHI75-1975-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Shimano 1982 Bicycle System Components (printed 01.82)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-SHI82-1982-%' AND cd.source_ref IS NULL;

UPDATE component_detail cd
JOIN data_source d ON d.source_type = 'catalogue' AND d.label = 'Shimano 1984 Bicycle System Components Dealer Catalog (June 1984)'
SET cd.source_ref = d.source_id WHERE cd.source_id LIKE 'MANUAL-SHI84-1984-%' AND cd.source_ref IS NULL;
