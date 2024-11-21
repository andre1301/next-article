import type { RichTextBlock } from '../../block';
import type { BaseComponent } from './base-component';

export interface TextComponent extends BaseComponent {
  type: 'text';
  paragraphs: RichTextBlock;
}

export interface LeadTextComponent extends TextComponent {
  subtype: 'lead';
}
