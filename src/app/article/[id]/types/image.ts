import type {
  ImageComponent as ImageComponentCapi,
  ImageAsset as ImageAssetCapi
} from '../capi-types';

export type ImageUrls = { url: string; width: number; height: number };

export interface ImageAsset extends ImageAssetCapi {
  urls?: ImageUrls[];
}

export default interface ImageComponent
  extends Omit<ImageComponentCapi, 'imageAsset'> {
  imageAsset: ImageAsset;
  position?: 'top';
}
