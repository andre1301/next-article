import type { RichText } from '../../rich-text';
import type { BaseComponent } from './base-component';

export interface UrlComponentData {
  /**
   * the type of resource (video, tweet, instagram)
   */
  type?: string;
  /**
   * a name of the resource (youtube, vimeo, twitter, instagram)
   */
  source?: string;
  /**
   * the canonical url of the resource
   */
  canonicalUrl?: string;
  /**
   * a thumbnail image url
   */
  image?: string;
  customProperties?: Record<string, unknown>;
}

export interface UrlComponent extends BaseComponent {
  type: 'url';
  /**
   * The url of the resource
   */
  url: string;
  /**
   * Title as a text object
   */
  title?: RichText;
  /**
   * Label of the linked resource
   */
  label?: string;
  /**
   * An enrichment data object
   */
  data?: UrlComponentData;
}
