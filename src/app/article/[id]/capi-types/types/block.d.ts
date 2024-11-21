import type { RichText } from './rich-text';

export interface ListBlock {
  blockType: 'list:checked' | 'list:ordered' | 'list:unordered';
  items: RichText[];
}

export interface TextBlock {
  blockType: 'heading' | 'heading:level-2' | 'quote' | 'paragraph';
  text: RichText;
}

/**
 * @see https://github.schibsted.io/spt-mediaplatform/content-api/blob/master/docs/formats/article-v5.md#block
 */
export type Block = ListBlock | TextBlock;
/**
 * Capi rich-text blocks are a list of Capi blocks.
 * This is the content of Capi components like the text component.
 * @see https://github.schibsted.io/spt-mediaplatform/content-api/blob/master/docs/formats/article-v5.md#rich-text
 */
export type RichTextBlock = Block[];
