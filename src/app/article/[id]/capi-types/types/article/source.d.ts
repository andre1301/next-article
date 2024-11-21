import type { AuthorEntity } from '../entities';

export interface Source {
  type?: string;
  /** Identifier for a source such as `ntb` */
  id: string;
  title?: string;
  authors?: string[];
  originators?: AuthorEntity[];
  reference?: string;
  contracts?: string[];
}
