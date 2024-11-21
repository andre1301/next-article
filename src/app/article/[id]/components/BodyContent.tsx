/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { FC } from 'react';
import {
  isImageComponent,
  isTextComponent,
  isFactComponent,
  isSubheadingComponent,
} from '../types/guards';
import s from '../Article.module.scss';
import Image from './Image';
import Factbox from './Factbox';
import { BodyContent as BodyContentProps  } from '../types';
import TextComponent from './TextComponent';

const BodyContent: FC<BodyContentProps> = ({
  items,
}) => (
  <>
    {items.map((item, i) => {
      if (isImageComponent(item)) {
        return <Image key={i} {...item} />;
      }

      if (isFactComponent(item)) {
        return <Factbox key={i} {...item} />;
      }

      if (isTextComponent(item)) {
        return <TextComponent key={i} {...item} />;
      }

      if (isSubheadingComponent(item)) {
        return (
          <h2 className={s.bodySubtitle} key={i}>
            {item.text?.value}
          </h2>
        );
      }
      return false;
    })}
  </>
);
export default BodyContent;
