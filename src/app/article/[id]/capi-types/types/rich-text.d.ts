import type { Markup } from './markup';

export interface RichText {
  value: string;
  markup?: Markup[];
}
