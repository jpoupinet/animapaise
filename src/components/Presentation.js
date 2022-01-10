import React from 'react';
import PropTypes from 'prop-types';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { Link } from 'gatsby';

const PhotoContainer = ({ photo }) => (
  <div className="column is-flex">
    <PreviewCompatibleImage imageInfo={{ alt: '', image: photo }} />
  </div>
);

const TexteContainer = ({ titre, description, lien, titreLien }) => (
  <div className="column has-background-primary">
    <div className="block p-6 has-text-white">
      <h3 className="title is-3 px-6 pt-6 has-text-white">{titre}</h3>
      <p
        className="p-6 has-text-justified"
        style={{ fontSize: '1.1rem' }}
      >
        {description}
      </p>
      {
        lien && titreLien &&
        <p className='has-text-centered has-text-white is-underlined is-size-5'>
          {titreLien}
        </p>
      }
    </div>
  </div>
);

const Presentation = ({ photo, titre, description, lien, titreLien, positionPhoto }) => {
  const blocTexte = (
    <TexteContainer
      titre={titre}
      description={description}
      lien={lien}
      titreLien={titreLien}
    />
  );

  const blocPhoto = (
    <PhotoContainer photo={photo} />
  );

  const blocPresentation = positionPhoto === 'droite' ?
    (
      <div className="presentation-accueil columns is-gapless">
        {blocTexte}
        {blocPhoto}
      </div>
    )
    :
    (
      <div className="presentation-accueil columns is-gapless">
        {blocPhoto}
        {blocTexte}
      </div>
    );

  return (
    <section className="section">
      {
        lien ?
          (
            <Link to={lien}>
              {blocPresentation}
            </Link>
          )
          :
          blocPresentation
      }
    </section>
  );
};

Presentation.propTypes = {
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  positionPhoto: PropTypes.string,
};

export default Presentation;
