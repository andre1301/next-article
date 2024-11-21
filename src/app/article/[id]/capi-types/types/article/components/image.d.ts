import type { RichText } from '../../rich-text';
import type { ImageAsset } from '../image';
import type { BaseComponent } from './base-component';

export interface ImageComponentPresentationProperties {
  imagePreset?: string;
  targetUrl?: string;
  bylinePrefix?: string;
  sponsorUrl?: string;
}

export interface ImageComponent
  extends BaseComponent<ImageComponentPresentationProperties> {
  type: 'image';
  alternateText?: RichText;
  byline?: { title: string };
  /**
   * The image source id
   */
  sourceId?: string;
  characteristics?: {
    figure?: boolean;
    sensitive?: boolean;
    significance?: number;
  };
  caption?: RichText;
  imageAsset: ImageAsset;
  mediaFit?: 'contain' | 'cover';
  placement?: 'aside';
}
