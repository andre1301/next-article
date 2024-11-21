/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-danger */
import { FC } from 'react';
import { ArticlePropTypes } from './types';
import s from './Article.module.scss';

import BodyContent from './components/BodyContent';
import TitleByline from './components/TitleByline';
import Authors from './components/Authors';
import LeadText from './components/LeadText';
import Image from './components/Image';
import parse from '../../helpers/parse';

async function fetchPosts(id :string) {
  const response = await fetch(`https://wellobe.aftonbladet.se/webapi/v1/pages/articles/${id}/sales`);

  // Check if the response is successful
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  // Parse the JSON data from the response
  const data = await response.json();
  return data;
}
const Disclaimer = () => {
  const text =
    '*Viktminskning är individuell så vi kan inte garantera hur mycket/snabbt du når ditt mål. Det viktiga är alla hälsofördelar. Vi tar avstånd ifrån osunda ideal och bantningskurer, och rekommenderar inte kaloriräkning som underviktig, sjuk eller gravid. Läs mer i våra ';

  return (
    <p data-testid="test__disclaimer" className={s.disclaimer}>
      {text}
      <a
        href="/inspiration/nyheter/0n5j5o/anvandarvillkor-for-wellobe"
        target="_blank"
      >
        användarvillkor
      </a>
      .
    </p>
  );
};

const Article: FC<ArticlePropTypes> = async ({
  // title,
  // lead,
  // topImage,
  // bodyContent,
  // salesposters,
  // authors,
  // published,
  // product,
  // isApp,
  // onSalesWidgetClick,
  // showAdDiscalimer,
  // onBmiCalcBuyCtaClick,
  // onBmiCalcCalculateCtaClick,
  // bmiInfoLink,
  // onLoginLinkClick,
  params,

  // id,

  // categories,

}) => {

  const {id} = (await params)
  const posts = await fetchPosts(id);
  const {title, lead, topImage, bodyContent, authors, categories} = parse(posts);

  return (
    <>
      <div className={s.container}>
        <div className={s.containerInner}>
          {topImage ? <Image {...topImage} /> : null}
          {title ? <h1 className={s.title}>{title}</h1> : null}

            <TitleByline  authors={authors} />
          {lead?.length ? <LeadText lead={lead} /> : null}
          {bodyContent ? (
            <BodyContent
              items={bodyContent}
              categories={categories}
              id={id}
            />
          ) : null}
          <Authors authors={authors} />
            <Disclaimer />
        </div>
      </div>
    </>
  );
};

export default Article;
