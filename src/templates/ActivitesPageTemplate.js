import React from 'react';
import PropTypes from 'prop-types';

import Content from '../components/Content';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Cartes from '../components/Cartes';

const ActivitesPageTemplate = ({
  imageIntro,
  titrePage,
  content,
  contentComponent,
  titreCartes,
  cartes,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <div>
      {/* Intro */}
      <PreviewCompatibleImage
        imageInfo={{ alt: 'Image Activites Sports Canins', image: imageIntro }}
        imageStyle={{ display: 'inline-block', maxHeight: '20em', width: '100%' }}
      />
      <section className="section">
        <div className="container">
          <h1 className="title is-3 has-text-centered mb-0">{titrePage}</h1>
          <div
            className="container has-text-centered"
            style={{ fontSize: '1.1rem' }}
          >
            <PageContent className="content p-6" content={content} />
          </div>
        </div>
      </section>
      {/* Cartes */}
      <section className="section has-background-primary pt-4 mb-6">
        <div className="container">
          <h2 className="title is-3 has-text-centered has-text-white">{titreCartes}</h2>
          <Cartes data={cartes} pageRacine="activites" />
        </div>
      </section>
    </div>
  )
};

ActivitesPageTemplate.propTypes = {
  imageIntro: PropTypes.object,
  titrePage: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  titreCartes: PropTypes.string,
  cartes: PropTypes.array,
};

export default ActivitesPageTemplate;
