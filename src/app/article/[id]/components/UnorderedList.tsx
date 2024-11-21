import { FC } from 'react';
import uniqueId from 'lodash/uniqueId';
import { RichText } from '../capi-types';
import stylizrInstance from './stylizer';

export interface ListProps {
  items: RichText[];
}

const UnorderedList: FC<ListProps> = ({ items }) => (
  <ul>
    {items.map(({ value, markup }) => (
      <li key={uniqueId()}>{stylizrInstance(value, markup)}</li>
    ))}
  </ul>
);

export default UnorderedList;
