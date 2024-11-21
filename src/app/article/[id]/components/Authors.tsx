import { FC } from 'react';
import classNames from 'classnames/bind';
import s from '../Article.module.scss';
import { Author } from '../types';

const cx = classNames.bind(s);

export interface AuthorProps {
  authors: Author[];
  isTitleByline?: boolean;
}

const Authors: FC<AuthorProps> = ({ authors, isTitleByline }) => {
  const numberOfAuthors = authors?.length;
  return (
    <div
      data-testid="test__author-byline"
      className={cx(s.authors, isTitleByline ? s.authorsTitleByline : '')}
    >
      {authors && authors.map(({ name }, i) => {
        const isLast = i === numberOfAuthors - 1;
        const label = isLast ? name : `${name}, `;
        return <span key={i}>{label}</span>;
      })}
    </div>
  );
};
export default Authors;
