import { FC } from 'react';
import { isTextBlock, isListBlock } from '../types/guards';
import { RichTextBlock, Markup, RichText } from '@smp-distribution/capi-types';
import UnorderedList from './UnorderedList';
import OrderedList from './OrderedList';
import s from '../Article.module.scss';
import stylizrInstance from './stylizer';

interface TextBlock {
  text: RichText;
  subtype?: string;
}

export const TextParagraph: FC<TextBlock> = ({ text, subtype }) => {
  const { value, markup = [] } = text;

  // blue-link tracking
  const markupItems = markup.map((m: Markup) => {
    if (subtype === 'blue-link') {
      return {
        ...m,
      };
    }
    return m;
  });

  return (
    <p data-testid="test__body-text" className={s.bodyText}>
      {stylizrInstance(value, markupItems)}
    </p>
  );
};

const TextComponent: FC<{ paragraphs: RichTextBlock; subtype?: string }> = ({
  paragraphs,
  subtype
}) => (
  <>
    {paragraphs.map((block, i) => {
      if (isTextBlock(block)) {
        return block.blockType === 'heading' ? (
          <h2 key={i} className={s.bodySubtitle}>
            {block.text.value}
          </h2>
        ) : (
          <TextParagraph text={block.text} key={i} subtype={subtype} />
        );
      }

      if (isListBlock(block)) {
        return block.blockType === 'list:ordered' ? (
          <OrderedList key={i} items={block.items} />
        ) : (
          <UnorderedList key={i} items={block.items} />
        );
      }
      return null;
    })}
  </>
);

export default TextComponent;
