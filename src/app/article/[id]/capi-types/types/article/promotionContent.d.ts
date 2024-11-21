import type { RichText } from '../rich-text';
import type { ImageAsset } from './image';
import type { KnownArticlePresentationProperties } from './presentationProperties';
import type { TeaserVariantsConfiguration } from './teaserVariants';

export interface PromotionContent<
  TAdditionalArticlePromotionProps = Record<string, unknown>,
> {
  /** alternative title text */
  title?: RichText;
  /** alternative description text */
  description?: RichText;
  imageAsset?: ImageAsset;
  presentationProperties?: KnownArticlePresentationProperties &
    TAdditionalArticlePromotionProps;
  slug?: string;
  context?: TeaserVariantsConfiguration;
}
