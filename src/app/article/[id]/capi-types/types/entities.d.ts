import type { ContactDetail } from './author-item';
import type { Changes } from './time';
import type { RichText } from './rich-text';
import type { VideoAsset } from './video';
import type { TextBlock } from './block';
import type {
  DescriptorTag,
  EventTag,
  InterestTag,
  LocationTag,
  MachineTag,
  OrganizationTag,
  PersonTag,
} from './tag-types';

export type FetchEntityTypes =
  | 'section'
  | 'story'
  | 'tags'
  | 'authors'
  | 'video';

export interface SectionEntity {
  id: string;
  title: string;
  /**
   * enabled or not, default: true
   */
  enabled: boolean;
  /**
   * Parent section if this section is a child section
   */
  parent?: SectionEntity;
  /**
   * The newsroom the section belongs to.
   */
  scope: string;
}

export type TagEntity =
  | DescriptorTag
  | EventTag
  | LocationTag
  | OrganizationTag
  | PersonTag
  | InterestTag
  | MachineTag;

export interface StoryEntity {
  id: string;
  title: string;
  /**
   * Generated slug for the story
   */
  slug: string;
  /**
   * Explanatory text for the story
   */
  description: string;
  /**
   * when the story was updated; UTC, ISO8601 format
   */
  updated: string;
  /**
   * whether story is enabled or not (defaults to true)
   */
  enabled: boolean;
  /**
   * story background rich text
   */
  background?: TextBlock[];
  /**
   * The newsroom the story belongs to.
   */
  scope: string;
}

export interface AuthorEntity {
  title: string;
  id: string;
  slug: string;
  contacts: ContactDetail[];
  /**
   * Author image id
   */
  image?: string;
  description: string;
  imageAsset?: {
    /**
     * Author image id
     */
    id: string;
  };
  /**
   * If the author has been disabled or not
   */
  enabled: boolean;
  /**
   * The newsroom the author belongs to.
   */
  scope: string;
}

export interface VideoEntity {
  id: string;
  /**
   * Changes for the video
   */
  changes: Changes;
  /**
   * The underlying video asset
   */
  videoAsset: VideoAsset;
  /**
   * the video title
   */
  title: RichText;
  /**
   * the video description
   */
  description?: RichText;
  /**
   * Published state of the video
   */
  state: string;
  imageAsset: {
    id: string;
    main: string;
    front?: string;
    snapshots: string;
    featured?: string;
  };
  /**
   * The newsroom the video belongs to.
   */
  scope: string;
}

export interface EntityMap {
  section: SectionEntity;
  story: StoryEntity;
  tags: TagEntity;
  authors: AuthorEntity;
  video: VideoEntity;
}

export type EntityTypeSelector<T extends FetchEntityTypes> = EntityMap[T];
