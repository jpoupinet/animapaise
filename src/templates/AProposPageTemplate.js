import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Content from '../components/Content'

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const AProposPageTemplate = ({
  imageIntro,
  content,
  contentComponent,
  diplomesCertificats,
  formationsStages,
  experiences,
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
          <div className="block mb-6">
            <h3 className="title is-4 has-text-centered">Diplômes / Certificats</h3>
            <div className="is-flex is-justify-content-center">
              <ul>
                {
                  diplomesCertificats.map(dip =>
                    <li>
                      <span className="has-text-weight-semibold">{dip.annee} : </span>
                      <span>{dip.description}</span>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <div className="block mb-6">
            <h3 className="title is-4 has-text-centered">Formations / Stages</h3>
            <div className="is-flex is-justify-content-center">
              <ul>
                {
                  formationsStages.map(form =>
                    <li>
                      <span className="has-text-weight-semibold">{form.annee} : </span>
                      <span>{form.description}</span>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
          <div className="block mb-6">
            <h3 className="title is-4 has-text-centered">Expériences</h3>
            <div className="is-flex is-justify-content-center">
              <ul>
                {
                  experiences.map((exp, i) =>
                    <li key={`exp${i}`}>
                      <span className="has-text-weight-semibold">{exp.annee} : </span>
                      <span>{exp.description}</span>
                    </li>
                  )
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section >
  )
};

AProposPageTemplate.propTypes = {
  imageIntro: PropTypes.object,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AProposPageTemplate;
