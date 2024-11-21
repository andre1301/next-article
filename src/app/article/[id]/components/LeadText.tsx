import { FC } from 'react';
import { TextBlock } from '@smp-distribution/capi-types';
import s from '../Article.module.scss';
import stylizrInstance from './stylizer';

interface LeadTextProps {
  lead: TextBlock[];
}

const LeadText: FC<LeadTextProps> = ({ lead }) => (
  <>
    {lead.map(({ text }, i) => (
      <p key={i} data-testid="test__lead-text" className={s.topLeadText}>
        {stylizrInstance(text.value, text.markup)}
      </p>
    ))}
  </>
);

export default LeadText;
