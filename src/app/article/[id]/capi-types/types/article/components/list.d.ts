import type { Component } from '.';
import type { BaseComponent } from './base-component';

export interface ListComponentPresentationProperties {
  variant?: string;
  richType?: string;
}

export interface ListComponent
  extends BaseComponent<ListComponentPresentationProperties> {
  type: 'list';
  components?: Component[];
}
