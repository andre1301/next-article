import type { BaseComponent } from './base-component';

export interface IntegrationComponentPresentationProperties {
  ssr?: string;
}

export interface IntegrationComponent
  extends BaseComponent<IntegrationComponentPresentationProperties> {
  type: 'deprecated-integration';
  url: string;
}
