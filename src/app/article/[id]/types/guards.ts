import {
  TextComponent,
  LeadTextComponent,
  Block,
  ListBlock,
  TextBlock,
  RichText,
  FactComponent,
  ArticleComponent,
  SubheadingComponent,
  TargetMarkup,
  TableComponent
} from '@smp-distribution/capi-types';
import isObject from 'lodash/isObject';
import isString from 'lodash/isString';
import deprecatedIntegrationComponent from './deprecated-integration';
import type { Article, Component } from './article';
import ImageComponent, { ImageAsset } from './image';
import SummaryTextComponent from './summary';
import VideoComponent from './video';
import UrlComponent from './embed';
import Question from './question';

const listBlockTypes = ['list:checked', 'list:ordered', 'list:unordered'];
const textBlockTypes = ['heading', 'heading:level-2', 'quote', 'paragraph'];

export const isFulfilled = <T>(
  p: PromiseSettledResult<T>
): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';

export const isTextComponent = (component: any): component is TextComponent =>
  component?.type === 'text';

export const isLeadTextComponent = (x: unknown): x is LeadTextComponent =>
  isTextComponent(x) && x.subtype === 'lead';

export const isSummaryTextComponent = (x: unknown): x is SummaryTextComponent =>
  isTextComponent(x) && x.subtype === 'news-summary';

export const isSalesWidget = (
  component: Component
): component is deprecatedIntegrationComponent =>
  component?.type === 'deprecated-integration' &&
  component.url?.includes('sales-widget');

export const isBlueLink = (
  component: Component
): component is deprecatedIntegrationComponent =>
  component.type === 'deprecated-integration' &&
  component.url.startsWith('blimedlem:');

export const isMemberBreak = (
  component: Component
): component is deprecatedIntegrationComponent =>
  component?.type === 'deprecated-integration' &&
  component.url?.includes('paywall-starts-here');

export const isImageComponent = (component: any): component is ImageComponent =>
  component?.type === 'image';

export function isBlock(block: unknown): block is Block {
  return isObject(block) && isString((block as Block)?.blockType);
}

export function isRichText(x: unknown): x is RichText {
  if (!isObject(x)) {
    return false;
  }

  const { value, markup } = x as RichText;

  if (!isString(value)) {
    return false;
  }

  return markup === undefined || Array.isArray(markup);
}

export const isListBlock = (block: unknown): block is ListBlock => {
  if (!isBlock(block)) {
    return false;
  }
  const { blockType, items } = block as ListBlock;

  return listBlockTypes.includes(blockType) && Array.isArray(items);
};

export const isTextBlock = (block: unknown): block is TextBlock => {
  if (!isBlock(block)) {
    return false;
  }
  const { blockType, text } = block as TextBlock;
  return textBlockTypes.includes(blockType) && isRichText(text);
};

export const isPromiseFulfilled = <T>(
  p: PromiseSettledResult<T>
): p is PromiseFulfilledResult<T> => p.status === 'fulfilled';

export const isArticle = (c: unknown): c is Article =>
  typeof c === 'object' && (c as Article)?.schemaType === 'article';

export const isImageAsset = (x?: unknown): x is ImageAsset =>
  isObject(x) &&
  Object.prototype.hasOwnProperty.call(x, 'id') &&
  Object.prototype.hasOwnProperty.call(x, 'size');

export const isFactComponent = (component: any): component is FactComponent =>
  component?.type === 'fact';

export const isVideoComponent = (component: any): component is VideoComponent =>
  component?.type === 'video';

export const isUrlComponent = (component: any): component is UrlComponent =>
  component?.type === 'url';

export const isArticleComponent = (
  component: any
): component is ArticleComponent => component?.type === 'article';

export function isSubheadingComponent(
  component: any
): component is SubheadingComponent {
  return (
    component?.type === 'subheading' &&
    isRichText((component as SubheadingComponent).text)
  );
}

export const isTargetMarkup = (x: any): x is TargetMarkup =>
  x.type === 'link:internal' || x.type === 'link:external';

export const isQuestionComponent = (component: any): component is Question =>
  component?.type === 'list' &&
  component?.presentationProperties?.richType === 'question';

export const isTableComponent = (component: any): component is TableComponent =>
  component?.type === 'table';

export const isPollComponent = (component: any): component is Question => {
  const tableComponent = component?.components?.find(isTableComponent);
  return (
    isQuestionComponent(component) &&
    !!tableComponent &&
    !tableComponent?.rows.some(
      (row: string[]) => row[1]?.toLowerCase().includes('x')
    )
  );
};

export const isStandaloneQuestion = (component: any): component is Question => {
  const tableComponent = component?.components?.find(isTableComponent);
  return (
    isQuestionComponent(component) &&
    !!tableComponent &&
    tableComponent?.rows.some(
      (row: string[]) => row[1]?.toLowerCase().includes('x')
    )
  );
};
