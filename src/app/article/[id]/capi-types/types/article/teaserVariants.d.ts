import type { RichText } from '../rich-text';

/**
 * This object contains the data for a variant which is set by editors in Curate using A-B testing feature.
 */
export interface TeaserVariant {
  id: string;
  weight?: number;
  title?: RichText;
  deck?: RichText;
}
/**
 * This object contains number of configurations for each context in curate eg frontpage, sport, entertainment.
 * For each context, it contains no of variants the article has.
 * Ref https://github.schibsted.io/spp/team/issues/1
 */
export type TeaserVariantsConfiguration = Record<string, TeaserVariant[]>;
