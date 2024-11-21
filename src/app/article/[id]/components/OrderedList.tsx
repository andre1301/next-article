import { FC } from 'react';
import uniqueId from 'lodash/uniqueId';
import stylizrInstance from './stylizer';
import { ListProps } from './UnorderedList';

const OrderedList: FC<ListProps> = ({ items }) => (
  <ol>
    {items.map(({ value, markup }) => (
      <li key={uniqueId()}>{stylizrInstance(value, markup)}</li>
    ))}
  </ol>
);

export default OrderedList;
