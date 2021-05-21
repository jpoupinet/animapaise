import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Content from '../components/Content'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const AProposPageTemplate = ({
  imageIntro,
  content,
  contentComponent,
}) => {
  const [width, setWidth] = useState(null);
  
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setWidth(window.innerWidth);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  const PageContent = contentComponent || Content;

  return (
    <section className="section">
      <section className="section">
        <div className="columns">
          <div className="column is-6">
            <div className="container has-text-centered">
              <PreviewCompatibleImage
                imageInfo={{ alt: 'Image a propos', image: imageIntro }}
              />
            </div>
          </div>
          <div className="column is-6">
            <div className="container has-text-centered">
              <h1 className="title is-2">Sophie Bourdon</h1>
              <PageContent className="content p-6" content={content} />
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="block">
            <h3 className="title is-4 has-text-centered">Certificats, diplômes</h3>
          </div>
          <div className="block">
            <h3 className="title is-4 has-text-centered">Formations</h3>
          </div>
          <div className="block">
            <h3 className="title is-4 has-text-centered">Expériences</h3>
          </div>
        </div>
      </section>
    </section>
  )
};

AProposPageTemplate.propTypes = {
  imageIntro: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AProposPageTemplate;
