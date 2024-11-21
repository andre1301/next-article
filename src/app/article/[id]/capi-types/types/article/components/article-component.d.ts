import type { BaseComponent } from './base-component';

export interface ArticleComponent extends BaseComponent {
  type: 'article';
  /**
   * 	id of the linked article
   */
  articleId: string;
  /**
   * title of the linked article
   */
  linkTitle?: string;
}
