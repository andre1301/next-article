import type { RichText } from '../../rich-text';
import type { BaseComponent } from './base-component';

export interface QuoteComponent extends BaseComponent {
  type: 'quote';
  /**
   * The actual quote
   */
  quote: RichText;
  /**
   * The source of the quote (e.g. the name of the person who said it).
   */
  source?: RichText;
  /**
   * The context of the quote (e.g. the title or role of the source).
   */
  context?: RichText;
}
