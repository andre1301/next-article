/**
 * Sort field options for CAPI requests
 */
export type SortField =
  | 'score'
  | 'published'
  | 'firstPublished'
  | 'updated'
  | 'published_asc';

/**
 * Date range field options for CAPI requests
 */
export type DateRangeField = 'published' | 'firstPublished' | 'updated';

/**
 * CharacteristicRange field options for CAPI requests
 */
export type CharacteristicsRange = `${number}..${number}`;
