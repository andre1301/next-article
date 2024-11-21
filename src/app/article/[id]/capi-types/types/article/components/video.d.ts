import type { RichText } from '../../rich-text';
import type { Changes } from '../../time';
import type { VideoAsset } from '../../video';
import type { Hotspot } from '../image';
import type { BaseComponent } from './base-component';

export interface VideoComponentPresentationProperties {
  autoplay?: string;
  nextVidStart?: number;
  startMode?: string;
  loop?: boolean;
  cta?: string;
  withMuteControl?: string;
  withProgressBar?: string;
  withScrollDownButton?: string;
  mediaPosition?: string;
  imageAspectRatio?: string;
  image?: string;
  imagePreset?: string;
  // when we want to provide additional margin to floating video
  // in addition to the core-navigation masthead
  floatingTopMargin?: number;
}

export interface VideoComponent
  extends BaseComponent<VideoComponentPresentationProperties> {
  type: 'video';
  videoAsset: VideoAsset;
  imageAsset: {
    id: string;
    main?: string;
  };
  title?: RichText;
  description?: RichText;
  lazyConfig?: { enabled?: boolean };
  characteristics?: {
    significance?: number;
  };
  metadata?: {
    aspectRatio?: number;
    exportedToAbse?: number;
    preview?: string;
    tagsSuggestions?: string[];
    timedTranscript?: string;
    transcript?: string;
    isPodcast?: string;
    [name: string]: unknown;
  };
  changes: Changes;
  provider: {
    service: string;
    id: string;
  };
  hotspot?: Hotspot;
  /**
   * @deprecated
   * whether video should autoplay or not, only used in Aftonbladet desktop
   */
  autoplay?: boolean;
  withProgressBar?: boolean;
  withMuteControl?: boolean;
  mediaFit?: 'contain' | 'cover';
  // TODO: investigate if these should be there or not
  // Frontend (Hyperion) props - handled by the VideoAsset component
  // locale?: string;
  // floating?: boolean;
  // tokenApiUrl?: string;
  // autoplayNext?: boolean;
  // showSponsorLabel?: boolean;
  // autoplayNextLimit?: number;
  // autoplayNextLabel?: string;
  // autoplayNextCountdown?: number;
  // plugins?: VideoPluginsList;
  // startMode?: StartMode;
  // byline?: VideoByline;
}
