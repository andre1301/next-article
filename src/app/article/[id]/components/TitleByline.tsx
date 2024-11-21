/* eslint-disable react/no-danger */
import { FC } from 'react';
import s from '../Article.module.scss';
import Authors from './Authors';
import { Author } from '../types';

interface TitleBylineProps {
  authors: Author[];
  published: string;
}

const TitleByline: FC<TitleBylineProps> = ({ authors, published }) => (
  <div className={s.titleByline}>
    {authors && <Authors authors={authors} isTitleByline />}
    {published && <span>Publisert: {published}</span>}
  </div>
);

export default TitleByline;
