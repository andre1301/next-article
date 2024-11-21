import type { TagEntity } from './entities';

export interface VideoInterval {
  start: number;
  end?: number;
}
export interface VideoSection {
  title: string;
  id: string;
  shortPath: string;
  metadata: {
    podcast_author?: string;
    podcast_categoryTree?: string;
    actingEditor?: string;
    afp?: 'true';
    sponsored?: 'true';
    [property: string]: unknown;
  };
  parent: VideoSection;
}

export interface VideoAsset {
  id: string;
  title: string;
  description?: string;
  descriptionFront?: string;
  /** Flight time interval */
  flightTimes?: VideoInterval;
  /** the duration of the video in milliseconds */
  duration?: number;
  size?: {
    width: number;
    height: number;
  };
  assetType?: 'video' | 'audio';
  streamType?: string;
  playback?: VideoInterval | null;
  streamUrls?: {
    hls: string;
    hds?: string;
    mp4?: string;
    pseudostreaming?: string[];
  };
  streamConfiguration?: {
    properties?: (
      | 'tokenSecured'
      | 'encrypted'
      | 'geoblocked'
      | 'playerVerified'
    )[];
  };
  cuePoints?: {
    timeline: number;
  }[];
  sourceFiles?: {
    width: number;
    height: number;
    bitrate: number;
    sourceFile: string;
  }[];
  subtitles?: {
    language: string;
    url: string;
    default?: boolean;
  }[];
  tags?: TagEntity[];
  originAssetId?: string;
  nextAssetId?: string;
  access?: Record<string, boolean>;
  metadata?: {
    aspectRatio?: string;
    sponsored?: string;
    [name: string]: string | boolean | unknown;
  };
  section?: VideoSection;
  series?: {
    seasonNumber: number;
    episodeNumber: number;
  };
  /** boolean flag to show ads */
  showAds?: boolean;
  /**
   * Exist on Podcasts
   */
  provider?: string;
  appnexusVideoAdParams?: {
    invCode: string;
    videoOverlayInvCode: string;
    sections: string;
  };
  titleFront?: string;
  displays?: number;
  showDisplays?: boolean;
}
