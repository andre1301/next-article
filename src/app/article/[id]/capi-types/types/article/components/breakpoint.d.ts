import type { BaseComponent } from './base-component';

export interface BreakComponentPresentationProperties {
  variant?: string;
  groupStart?: string;
  groupEnd?: string;
}

export interface BreakComponent
  extends BaseComponent<BreakComponentPresentationProperties> {
  type: 'breakpoint';
}
