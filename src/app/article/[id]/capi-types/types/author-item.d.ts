import type { AuthorEntity } from './entities';

export interface ContactDetail {
  type:
    | 'email'
    | 'web'
    | 'title'
    | 'twitter'
    | 'facebook'
    | 'phone'
    | 'agency'
    | 'other';
  value: string;
}

export interface AuthorItem {
  id: string;
  locale: string;
  newsroom: string;
  type: 'author';
  model: AuthorEntity;
}
