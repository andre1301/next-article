import React from 'react';
import PropTypes from 'prop-types';
import stylizr from '@aftonbladet/stylizr';

const stylizrInstance = stylizr({
  'style:em': function Em(text, key) {
    return <em key={key}>{text}</em>;
  },
  'style:highlight': function Highlight(text, key) {
    return <mark key={key}>{text}</mark>;
  },
  'style:underline': function Underline(text, key) {
    return <u key={key}>{text}</u>;
  },
  'style:strong': function Strong(text, key) {
    return <strong key={key}>{text}</strong>;
  },
  'style:superscript': function Superscript(text, key) {
    return <sup key={key}>{text}</sup>;
  },
  'style:subscript': function Subscript(text, key) {
    return <sub key={key}>{text}</sub>;
  },
  'link:external': function External(text, key, data) {
    return (
      <ExternalLink key={key} href={data.uri}>
        {text}
      </ExternalLink>
    );
  },
  'link:internal': (text, key, data) => {
    if (data.expandedUri) {
      return (
        <ExternalLink key={key} href={data.expandedUri} target="_self">
          {text}
        </ExternalLink>
      );
    }

    return text;
  },
  br: function Br(_, key) {
    return <br key={key} />;
  }
});

const ExternalLink = ({
  href,
  target = '_blank',
  children,
}) => {
  let decodedURI;

  try {
    decodedURI = decodeURI(href);
  } catch (err) {
    return null;
  }

  return (
    <a
      aria-label={typeof children === 'string' ? children : null}
      href={decodedURI}
      target={target}
      rel="noopener"
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default stylizrInstance;
