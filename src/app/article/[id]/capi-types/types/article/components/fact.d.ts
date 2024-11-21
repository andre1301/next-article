import type { RichTextBlock } from '../../block';
import type { RichText } from '../../rich-text';
import type { BaseComponent } from './base-component';

export interface FactComponent extends BaseComponent {
  type: 'fact';
  title?: RichText;
  paragraphs?: RichTextBlock;
}
