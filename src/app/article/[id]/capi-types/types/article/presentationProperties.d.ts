export interface KnownArticlePresentationProperties {
  // IntrosPresentationProperties
  introType?: string;
  introAllowedItems?: string;
  introMode?: string;
  introTextPosition?: string;
  introEffect?: string;
  introGradientMode?: string;
  introWithoutMargin?: boolean;
  introTextShadow?: string;
  hiddenTitle?: boolean;

  // AdsPresentationProperties
  removeAds?: boolean;
  disableAds?: boolean;

  // NavigationPresentationProperties
  navigation?: string;

  // StorycardPresentationProperties
  cardOnlyStory?: boolean;
}
