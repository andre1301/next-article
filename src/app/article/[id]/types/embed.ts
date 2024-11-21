import type {
  UrlComponent as UrlComponentCapi,
  UrlComponentData as UrlComponentDatatCapi
} from '../capi-types';

export interface UrlComponentData extends UrlComponentDatatCapi {
  embed: {
    html: string;
    width: number;
  };
}

export default interface UrlComponent extends Omit<UrlComponentCapi, 'data'> {
  data?: UrlComponentData;
  position?: 'top';
}
