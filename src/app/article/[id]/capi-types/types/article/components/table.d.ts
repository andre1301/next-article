import type { BaseComponent } from './base-component';

export interface TableComponent extends BaseComponent {
  type: 'table';
  /**
   * array of arrays of each cell's content
   */
  rows: string[][];
  /**
   * 	columns and rows to be used as headers
   */
  headers: {
    rows: number[];
    columns: number[];
  };
}
