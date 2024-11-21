export interface WebsiteMetaData {
  type: 'website';
  url: string;
}

export interface LocationMetaData {
  location: {
    lat: number;
    lon: number;
  };
  type: 'geolocation';
}

export interface OrganizationMetaData {
  type: 'isin' | 'vat' | 'ticker';
  value: string;
}

interface BaseTag {
  id: string;
  title: string;
  slug: string;
  /**
   * CAPI tag cloud scopes. All Norwegian brands use `no` and all Swedish brands use `sv`.
   */
  scope: 'no' | 'sv';
  /**
   * enabled or not, default: true
   */
  enabled: boolean;
  /**
   * optional additional information about tag
   * All tags can have WebsiteMetaData
   */
  metadata?: WebsiteMetaData[];
}

export type DescriptorTag = BaseTag & {
  type: 'descriptor';
};

export type EventTag = BaseTag & {
  type: 'event';
};

export type LocationTag = BaseTag & {
  /**
   * optional additional information about tag
   */
  metadata?: (LocationMetaData | WebsiteMetaData)[];
  type: 'location';
};

export type OrganizationTag = BaseTag & {
  /**
   * optional additional information about tag
   */
  metadata?: (OrganizationMetaData | WebsiteMetaData)[];
  type: 'organization';
};

export type PersonTag = BaseTag & {
  type: 'person';
};

export type InterestTag = BaseTag & {
  type: 'interest';
};

export type MachineTag = BaseTag & {
  type: 'machine';
};
