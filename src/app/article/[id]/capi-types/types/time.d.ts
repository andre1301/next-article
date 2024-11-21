/** A date string in UTC, ISO8601 format */
export type UTCDateTimeString = string;

/**
 * The changes object (sample) contains information about when an article has been created, modified or deleted.
 * All dates are in UTC.
 */
export interface Changes {
  /** when the article was created */
  created: UTCDateTimeString;
  /** when the article was updated */
  updated?: UTCDateTimeString;
  /** when the article was first published */
  firstPublished?: UTCDateTimeString;
  /** when the article was last published */
  published?: UTCDateTimeString;
  /** when the article was deleted */
  deleted?: UTCDateTimeString;
}
