
interface ImageSource {
  height: number;
  url: string;
  width: number;
}

interface Markup {
  type: string;
  offset: number;
  length: number;
}

export interface BodyContentItem {
  sourcetype: string;
  subtype: string;
  text: {
    markup: Markup[];
    value: string;
  };
  type: string;
}

interface Salesposter {
  identifier: string;
  poster: {
    html: string;
    css: string;
  };
  campaign?: string;
  data?: {
    abTestGroup?: string;
    campaign?: string;
    content?: string;
  };
}



export interface Image {
  byline: string;
  description: string;
  src: ImageSource[];
  width: number;
  height: number;
  isPortrait: boolean;
}

export interface Author {
  name: string;
}



export interface BodyContent {
  items: any[];
  salesposters: Salesposter[];
  categories: string[];
  id: string;
}
export interface ArticlePropTypes {
  params: Promise<{ id: string }>
}
