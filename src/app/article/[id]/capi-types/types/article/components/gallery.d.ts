import type { BaseComponent } from './base-component';
import type { ImageComponent } from './image';
import type { VideoComponent } from './video';

export interface GalleryComponent extends BaseComponent {
  type: 'gallery';
  components: (ImageComponent | VideoComponent)[];
}
