import type { RichText } from '../../rich-text';
import type { BaseComponent } from './base-component';

export interface SubheadingComponent extends BaseComponent {
  type: 'subheading';
  text: RichText;
}
