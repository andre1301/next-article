export interface Hotspot {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface ImageAsset {
  id: string;
  size?: {
    width: number;
    height: number;
  };
  hotspot?: Hotspot;
}
