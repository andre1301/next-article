import { FC } from 'react';
import { FactComponent } from '../capi-types';
import s from '../Article.module.scss';
import TextComponent from './TextComponent';

const Factbox: FC<FactComponent> = ({ title, paragraphs }) => (
  <aside data-testid="test__factbox-container" className={s.factbox}>
    {title && (
      <header>
        <h2>{title.value}</h2>
      </header>
    )}
    <div className={s.factboxBody}>
      {paragraphs ? <TextComponent paragraphs={paragraphs} /> : null}
    </div>
  </aside>
);

export default Factbox;
