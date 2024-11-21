import type { RichTextBlock } from '../../block';
import type { BaseComponent } from './base-component';

export interface CorrectionComponent extends BaseComponent {
  type: 'correction';
  paragraphs: RichTextBlock;
}
