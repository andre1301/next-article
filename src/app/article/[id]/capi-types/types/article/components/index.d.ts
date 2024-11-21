import type { ArticleComponent } from './article-component';
import type { BreakComponent } from './breakpoint';
import type { CorrectionComponent } from './correction';
import type { FactComponent } from './fact';
import type { GalleryComponent } from './gallery';
import type { GradeComponent } from './grade';
import type { ImageComponent } from './image';
import type { IntegrationComponent } from './integration';
import type { ListComponent } from './list';
import type { MapComponent } from './map';
import type { QuoteComponent } from './quote';
import type { SubheadingComponent } from './subheading';
import type { TableComponent } from './table';
import type { TextComponent } from './text';
import type { UrlComponent } from './url';
import type { VideoComponent } from './video';

export * from './base-component';
export * from './article-component';
export * from './breakpoint';
export * from './correction';
export * from './fact';
export * from './gallery';
export * from './grade';
export * from './image';
export * from './integration';
export * from './list';
export * from './map';
export * from './quote';
export * from './subheading';
export * from './table';
export * from './text';
export * from './url';
export * from './video';

export type Component =
  | ArticleComponent
  | BreakComponent
  | CorrectionComponent
  | FactComponent
  | GalleryComponent
  | GradeComponent
  | ImageComponent
  | IntegrationComponent
  | ListComponent
  | MapComponent
  | QuoteComponent
  | SubheadingComponent
  | TableComponent
  | TextComponent
  | UrlComponent
  | VideoComponent;
