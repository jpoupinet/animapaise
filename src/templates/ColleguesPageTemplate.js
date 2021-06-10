import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Content from '../components/Content';
import Presentation from '../components/Presentation';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const ColleguesPageTemplate = ({
  content,
  contentComponent,
  titrePage,
  presentations,
  blurbs,
}) => {
  const PageContent = contentComponent || Content;

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

  return (
    <div>
      {/* Intro */}
      <section className="section pb-0">
        <h1 className="title is-3 has-text-centered mb-0">{titrePage}</h1>
        <div className="container has-text-centered">
          <PageContent className="content p-6" content={content} />
        </div>
      </section>
      {/* Presentations */}
      <section className="section presentations pt-0 pb-0">
        <div className="container">
          {presentations.map((pres, i) =>
            <Presentation
              key={`presentation${i}`}
              photo={pres.photo}
              titre={pres.titre}
              description={pres.description}
              positionPhoto={(i % 2 === 0 || width <= 768) ? 'gauche' : 'droite'}
            />
          )}
        </div>
      </section>
      {/* Icones */}
      <section className="section">
        <div className="columns is-multiline">
          {blurbs.map((item) => (
            <div key={item.text} className="column is-4 is-flex">
              <section className="section">
                <div className="block has-text-centered">
                  <div
                    style={{
                      width: '180px',
                      display: 'inline-block',
                    }}
                  >
                    <PreviewCompatibleImage imageInfo={item} />
                  </div>
                </div>
                <div
                  className="block has-text-centered has-text-primary
                    is-size-3 has-text-weight-bold"
                >
                  {item.text}
                </div>
              </section>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};

ColleguesPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  titrePage: PropTypes.string,
  presentations: PropTypes.array,
  blurbs: PropTypes.array,
};

export default ColleguesPageTemplate;
