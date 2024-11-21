/* eslint-disable consistent-return */
/* eslint-disable no-console */
import {find} from 'lodash';
import moment from 'moment-timezone';
import { Article } from '../article/[id]/types/article';
import { ImageUrls } from '../article/[id]/types/image';
import SectionEntity from '../article/[id]/types/section-entity';
import { LeadTextComponent } from '../article/[id]/capi-types';
import {
  isLeadTextComponent,
  isImageComponent,
  isVideoComponent,
  isUrlComponent
} from '../article/[id]/types/guards';

function parseLead(rawLead: LeadTextComponent | undefined) {
  if (!rawLead || !isLeadTextComponent(rawLead)) {
    return undefined;
  }
  return rawLead.paragraphs;
}

// function parseBodyContent(items: Component[]) {
//   const bodyContent = [];

//   items.forEach(item => {
//     // const isGallery = item.type === 'gallery';

//     // } else if (isGallery) {
//     //   bodyContent.push({
//     //     type: 'gallery',
//     //     gallery: parseGallery(item)
//     //   });
//     // }
//   });

//   return bodyContent.length ? bodyContent : undefined;
// }

function parseAuthors(data: Article) {
  let parsedAuthors;
  const hasAuthors = data && data.authors && data.authors.length;

  if (hasAuthors) {
    parsedAuthors = [];

    data.authors.forEach(author => {
      parsedAuthors.push({
        name: author?.title || ''
      });
    });
  }

  return parsedAuthors;
}

const parseDate = (date?: string) =>
  date && moment.tz(date, 'Europe/Oslo').format('YYYY-MM-DD HH:mm');

// const parseGallery = gallery => gallery && gallery.components;

const getStatisticsSections = (section: SectionEntity): string[] => {
  const { statisticsName, parent } = section;
  if (!statisticsName) {
    return [];
  }
  if (parent) {
    return [...getStatisticsSections(parent), statisticsName];
  }
  return [statisticsName];
};

const parseArticle = (data: Article) => {
  try {
    const {
      components,
      tags,
      section,
      title,
      id,
      changes,
      links,
      customProperties,
      access,
      promotionContent
    } = data;
    const published = parseDate(changes?.published);
    const updated = parseDate(changes?.updated);
    const articleTitle = title?.value;
    const lead = parseLead(find(components, isLeadTextComponent));

    const topImage = find(
      components,
      c => isImageComponent(c) && c.position === 'top'
    );

    const topVideo = find(
      components,
      c => isVideoComponent(c) && c.position === 'top'
    );

    const topEmbed = find(
      components,
      c => isUrlComponent(c) && c.position === 'top'
    );

    const isTopElement = (item: unknown) =>
      (isImageComponent(item) ||
        isVideoComponent(item) ||
        isUrlComponent(item)) &&
      item.position === 'top';

    const bodyContent = components.filter(
      item => !isLeadTextComponent(item) && !isTopElement(item)
    );

    const authors = parseAuthors(data);

    const categories = getStatisticsSections(section);
    const canonicalUrl = links?.canonicalUrl;

    const getMetaImageSize = (urls?: ImageUrls[]): ImageUrls | undefined =>
      urls?.find(({ width }: { width: number }) => width === 1200) ||
      urls?.at(-1);

    const metaTitle =
      customProperties?.googleTitle || promotionContent?.title?.value;
    const metaDescription =
      customProperties?.metaDescription || promotionContent?.description?.value;
    const metaImage = getMetaImageSize(promotionContent?.imageAsset?.urls)?.url;

    const metaData = {
      metaTitle,
      metaDescription,
      metaImage,
      ogTitle: customProperties?.facebookShareTitle || metaTitle,
      ogDescription:
        customProperties?.facebookShareDescription || metaDescription,
      ogImage:
        getMetaImageSize(customProperties?.socialMediaShareImage?.urls)?.url ||
        metaImage
    };

    const isPaid = access?.restrictions?.includes('member-only') ?? false;
    const noindex = customProperties?.noindex;
    return {
      id,
      lead,
      topImage,
      topEmbed,
      topVideo,
      bodyContent,
      authors,
      categories,
      tags,
      title: articleTitle,
      published,
      updated,
      canonicalUrl,
      metaData,
      isPaid,
      noindex
    };
  } catch (err) {
    console.log('error', err);
  }
};
export default parseArticle;
