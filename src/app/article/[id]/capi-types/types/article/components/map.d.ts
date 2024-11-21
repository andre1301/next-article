import type { BaseComponent } from './base-component';

/**
 * A point on a map expressed as WGS84 latitude/longitude.
 * see: https://en.wikipedia.org/wiki/World_Geodetic_System
 */
interface MapPoint {
  /**
   * latitude in WGS84 decimal see: https://en.wikipedia.org/wiki/World_Geodetic_System
   */
  lat: number;
  /**
   * longitude in WGS84 decimal see: https://en.wikipedia.org/wiki/World_Geodetic_System
   */
  lon: number;
}

export interface MapComponent extends BaseComponent {
  type: 'map';
  /**
   * The zoom level as an integer
   */
  zoom: number;
  /**
   * The coordinates of the center of the map.
   */
  location: MapPoint;
  /**
   * Bounds of the map. Sets the south west (`sw`) and north east (`ne`) bounding points.
   */
  bounds: {
    /**
     * The south west (`sw`) bounding point.
     */
    sw: MapPoint;
    /**
     * The north east (`ne`) bounding point.
     */
    ne: MapPoint;
  };
}
