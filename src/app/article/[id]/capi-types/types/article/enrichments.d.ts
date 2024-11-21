export interface ArticleEnrichments {
  'article-comments'?: {
    count: number;
  };
  'ad-segments'?: {
    segments?: { id: string }[];
  };
  'text-to-speech'?: {
    videoAsset: {
      id: string;
    };
    provider: {
      id: string;
      service: string;
    };
  };

  [key: string]: unknown;
}
