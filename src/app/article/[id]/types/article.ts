import type {
  Component as ComponentCapi,
  RichText,
  AuthorEntity,
  TagEntity,
  RichTextBlock,
  Changes,
  AccessControl as AccessControlCapi,
  PromotionContent as PromotionContentCapi
} from '../capi-types';
import DeprecatedIntegrationComponent from './deprecated-integration';
import ImageComponent, { ImageAsset } from './image';
import SalesWidget from './sales-widget';
import LoginText from './login-text';
import ChallengeButton from './challenge-button';
import SectionEntity from './section-entity';
import Question from './question';

type CustomProperties = {
  googleTitle: string;
  vektklubb_paywall?: string;
  wellobe_paywall?: string;
  showArticleSummary?: boolean;
  articleSummary?: RichTextBlock;
  noindex?: boolean;
  metaDescription?: string;
  metaTitle?: string;
  facebookShareTitle?: string;
  facebookShareDescription?: string;
  socialMediaShareImage?: ImageAsset;
};

export interface PromotionContent
  extends Omit<PromotionContentCapi, 'imageAsset'> {
  imageAsset?: ImageAsset;
}

export interface AccessControl extends Omit<AccessControlCapi, 'restrictions'> {
  restrictions: ('automatic' | 'sales-only' | 'member-only')[];
}

export type Component =
  | ComponentCapi
  | DeprecatedIntegrationComponent
  | ChallengeButton
  | ImageComponent
  | SalesWidget
  | LoginText
  | Question;

export type Article = {
  id: string;
  schemaType: string;
  customProperties: CustomProperties;
  components: Component[] | [];
  promotionContent?: PromotionContent;
  section: SectionEntity;
  authors: AuthorEntity[];
  title: RichText;
  links?: { canonicalUrl: string };
  changes: Changes;
  access: AccessControl;
  tags: TagEntity[];
};
