import type { UTCDateTimeString } from './time';

// https://docs.schibsted.media/core-platform/article-format/article-format-v5/#markup

export interface MarkupBase {
  type: string;
  offset: number;
  length: number;
}

export interface TargetMarkup extends MarkupBase {
  type: 'link:internal' | 'link:external';
  uri: string;
}

export interface SymbolMarkup extends MarkupBase {
  type: 'style:symbol';
  symbol: string;
}

export interface PrimaryColorMarkup extends MarkupBase {
  type: 'style:primaryColor';
  color: string;
}

export interface TimestampMarkup extends MarkupBase {
  type:
    | 'timestamp:created'
    | 'timestamp:updated'
    | 'timestamp:firstPublished'
    | 'timestamp:published';
  timestamp: UTCDateTimeString;
  friendly?: boolean;
}

export type Markup =
  | MarkupBase
  | TargetMarkup
  | SymbolMarkup
  | PrimaryColorMarkup
  | TimestampMarkup;
