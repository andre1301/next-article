import { FC } from 'react';
import get from 'lodash/get';
import last from 'lodash/last';
import classNames from 'classnames/bind';

import ImageComponent from '../types/image';
import s from '../Article.module.scss';

const cx = classNames.bind(s);

export const VERYSMALL_MEDIA = 'screen and (max-width: 480px)';
export const SMALL_MEDIA = 'screen and (max-width: 767px)';
export const MEDIUM_MEDIA =
  'screen and (max-width: 991px) and (min-width: 768px)';
export const LARGE_MEDIA = 'screen and (min-width: 992px)';
const Image: FC<ImageComponent> = ({
  byline: { title } = {},
  caption: { value: captionValue } = {},
  imageAsset: { urls } = {},
  position
}) => {
  const isTopImage = position === 'top';
  const lastImage = get(last(urls), 'url');

  const imageUrls = {
    mobile: get(urls, '[4]url') || lastImage,
    mobileBig: get(urls, '[7]url') || lastImage,
    tablet: get(urls, '[9]url') || lastImage
  };
  const srcSet = (url?: string) =>
    isTopImage ? { srcSet: url } : { 'data-srcset': url };
  const byline = title && `Foto: ${title}`;
  return (
    <figure className={s.imageWrapper}>
      <picture>
        <source {...srcSet(imageUrls.mobile)} media={VERYSMALL_MEDIA} />
        <source {...srcSet(imageUrls.mobileBig)} media={SMALL_MEDIA} />
        <source {...srcSet(imageUrls.tablet)} media={MEDIUM_MEDIA} />
        <source {...srcSet(imageUrls.mobileBig)} media={LARGE_MEDIA} />
        <img
          src={imageUrls.tablet}
          className={cx({
            image: true,
            imageTop: isTopImage
          })}
          alt={captionValue}
        />
      </picture>
      {captionValue || byline ? (
        <figcaption className={s.imageByline}>
          {captionValue} {byline}
        </figcaption>
      ) : null}
    </figure>
  );
};

export default Image;
