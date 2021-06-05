import React from 'react';
import PropTypes from 'prop-types';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Cartes from '../components/Cartes';

const MediationPageTemplate = ({
  content,
  contentComponent,
  titrePage,
  imageIntro,
  titreCartes,
  cartes,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* Intro */}
      <section className="section">
        <div className="columns">
          <div className="column is-4">
            <PreviewCompatibleImage
              imageInfo={{ alt: 'Image Mediation animale', image: imageIntro }}
            />
          </div>
          <div className="column is-8">
            <h1 className="title is-3 has-text-centered mb-0">{titrePage}</h1>
            <div className="container has-text-centered">
              <PageContent className="content p-6" content={content} />
            </div>
          </div>
        </div>
      </section>
      {/* Cartes */}
      <section className="section has-background-primary pt-4 mb-6">
        <div className="container">
          <h2 className="title is-3 has-text-centered has-text-white">{titreCartes}</h2>
          <Cartes data={cartes} pageRacine="mediation" />
        </div>
      </section>
    </div>
  )
};

MediationPageTemplate.propTypes = {
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  titrePage: PropTypes.string,
  imageIntro: PropTypes.object,
  titreCartes: PropTypes.string,
  cartes: PropTypes.array,
};

export default MediationPageTemplate;
