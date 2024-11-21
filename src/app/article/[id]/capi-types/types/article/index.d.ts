import type {
  AuthorEntity,
  SectionEntity,
  StoryEntity,
  TagEntity,
} from '../entities';
import type { RichText } from '../rich-text';
import type { Changes } from '../time';
import type { AccessControl } from './access-control';
import type { ArticleCharacteristics } from './characteristics';
import type { Component } from './components';
import type { ArticleEnrichments } from './enrichments';
import type { KnownArticlePresentationProperties } from './presentationProperties';
import type { PromotionContent } from './promotionContent';
import type { Source } from './source';

export type {
  AccessControl,
  RestrictionType,
  PaywallType,
} from './access-control';
export type { ArticleCharacteristics } from './characteristics';
export type { ArticleEnrichments } from './enrichments';
export type { KnownArticlePresentationProperties } from './presentationProperties';
export type { PromotionContent } from './promotionContent';
export type { Source } from './source';
export type { ImageAsset } from './image';
export type {
  TeaserVariant,
  TeaserVariantsConfiguration,
} from './teaserVariants';

export interface ArticleBase<
  CustomProperties = Record<string, unknown>,
  AdditionalPromotionProperties = Record<string, unknown>,
  AdditionalPresentationProperties = Record<string, unknown>,
> {
  access: AccessControl;
  authors: AuthorEntity[];
  characteristics: ArticleCharacteristics;
  changes: Changes;
  comments?: string;
  components: Component[];
  /** type of content. For articles it will be empty or undefined */
  contentType: 'podcast' | 'video' | 'audio' | 'liveblogpost' | 'event' | '';
  customProperties: CustomProperties;
  enrichments?: ArticleEnrichments;
  external?: boolean;
  id: string;
  immediateSource?: Source;
  isAutoUpdating?: boolean;
  /** A string specifying the language in ISO 639-1 format, e.g. `sv` or `nb`. */
  language: string;
  newsroom: string;
  presentationProperties?: KnownArticlePresentationProperties &
    AdditionalPresentationProperties;
  promotionContent?: PromotionContent<AdditionalPromotionProperties>;
  schemaType: 'article';
  schemaVersion: 5;
  section: SectionEntity;
  sources?: Source[];
  /** Source is present for external content, e.g. licensed content from `ntb` and others */
  source?: Source;
  state: 'draft' | 'done' | 'published';
  story?: StoryEntity;
  tags: TagEntity[];
  title: RichText;
  version: { sequenceNo: number; time: string };
}
