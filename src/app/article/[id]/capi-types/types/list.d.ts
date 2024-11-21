import type { AuthorItem } from './author-item';

export type ListItemType =
  | 'article'
  | 'author'
  | 'story'
  | 'tag'
  | 'section'
  | 'video';

/** https://pages.github.schibsted.io/spt-mediaplatform/content-api/#/components/schemas/HitsInfo */
export interface HitInfo {
  /** Total number of hits - estimate of total number of possible */
  total: number;
  /** From which hit this document starts */
  from: number;
  /** The number of hits presented in this result set */
  size: number;
}
/** https://docs.schibsted.media/core-platform/article-format/article-format-v5/#list */
export interface ListItem {
  /** Required when `type` is not `tag`. */
  newsroom?: string;
  /** This should be either "no", "sv" or "en". */
  locale: string;
  /** ID of tag, story, article, section - based on query */
  id: string;
  /** The type of item that `id` is pointing towards */
  type: ListItemType;
  /** An object containing data about this item that cannot be represented by the item itself */
  properties?: object;
}

/** https://docs.schibsted.media/core-platform/article-format/article-format-v5/#list */
export interface List {
  /** A human-readable title or name for the List */
  title?: string;
  /** An object containing custom metadata for the list */
  properties?: object;
  layouts?: string | string[];
  /** list of element ids with locale and optional newsroom, depending on type. */
  items?: ListItem[];
}

export interface ArticleListItem {
  /** The matching newsroom code */
  newsroom: string;
  /** The locale of the document */
  locale: string;
  id: string;
  type: 'article';
  /**
   * Only seen in list responses for Aftonbladet
   */
  properties?: {
    viewCount?: number;
    pageTitle?: string;
  };
}

export interface TagItem {
  id: string;
  locale: string;
  type: 'tag';
  model: {
    id: string;
    title: string;
    type:
      | 'descriptor'
      | 'organization'
      | 'person'
      | 'event'
      | 'location'
      | 'machine'
      | 'interest';
    enabled: boolean;
    slug: string;
  };
}

export interface StoryItem {
  id: string;
  locale: string;
  newsroom: string;
  type: 'story';
  model: {
    id: string;
    title: string;
    enabled: boolean;
    slug: string;
  };
}

export interface SectionItem {
  id: string;
  locale: string;
  newsroom: string;
  type: 'section';
  model: {
    id: string;
    title: string;
    enabled: boolean;
    parentId: string;
  };
}

export interface AggregatedItem {
  id: string;
  docCount: number;
}

export interface ItemList<ItemType = unknown> {
  hits: HitInfo;
  items: ItemType[];
}

export type ListItemUnion =
  | ArticleListItem
  | TagItem
  | AuthorItem
  | StoryItem
  | SectionItem;

export type ArticleList = ItemList<ArticleListItem>;
