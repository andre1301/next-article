import type { BaseComponent } from './base-component';

export interface GradeComponent extends BaseComponent {
  type: 'grade';
  /**
   * A number between 0 and 1
   */
  grade: number;
}
