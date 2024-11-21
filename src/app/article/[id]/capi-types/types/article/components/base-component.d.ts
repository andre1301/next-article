export interface BaseComponentPresentationProperties
  extends Record<string, string | boolean | number | undefined> {
  intention?: string;
  makeAnchor?: boolean;
  theme?: string;
  withoutMargin?: boolean;
  addLayout?: string; // Can we specify this more?
  device?: 'mobile' | 'desktop' | 'tablet' | 'default';
  stickyMenuItemTitle?: string;
  stickyMenuItemPosition?: string;
  seoType?: string;
  richType?: string;
}
export interface BaseComponent<
  TPresentationProperties = Record<string, string | boolean | number>,
> {
  subtype?: string;
  presentationProperties?: TPresentationProperties &
    BaseComponentPresentationProperties;
}
