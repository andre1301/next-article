# `@smp-distribution/capi-types`

Type definitions for CAPI Responses.

## Curently covered responses:

- Article V5 entity response `https://content.api.plan3.se/entities/v1/<newsroom>/article/<art-id>?format=v5`
- Other entity responses `https://content.api.plan3.se/entities/v1/<newsroom>/<entity>` for entities `tag`,`story`,`author`,`video` and `section`.
- Article Collection response `https://content.api.plan3.se/collections/v1/<newsroom>/articles`

## Installation

Install using `npm install -D @smp-distribution/capi-types`

## Getting started

Then the recommended approach is first to create your own article-type that you can extend later. This is so that when/if your brands add any custom/promotion/presentation props it's easy to modify them all in one place.
To do this create a `capi-types.ts` (or d.ts) in your prefered types folder and use the following to get started:

```ts
import type { ArticleBase } from '@smp-distribution/capi-types';

// These should be populated with brand-specific values when needed
type AdditionalCustomProperties = Record<string, unknown>;
type AdditionalPromotionProperties = Record<string, unknown>;
type AdditionalPresentationProperties = Record<string, unknown>;

export type Article = ArticleBase<
  AdditionalCustomProperties,
  AdditionalPromotionProperties,
  AdditionalPresentationProperties
>;
```

Then you should be able to use this in your code like this:

```ts
//
const capiArticle = await request<Article>(articleApiUrl, requestOptions);
```

You can then either use the capi-article directly or pass it through any conversion to your own internal article format.

## Contributing

If you find anything wrong or have a suggestion to improve this please do submit an issue or a pull-request. If you lack permission reach out in [#cnp-web](https://sch-chat.slack.com/archives/C3D0YJY0N) on slack
