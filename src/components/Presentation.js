import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const PhotoContainer = ({ photo }) => (
  <div className="column">
    <PreviewCompatibleImage imageInfo={photo} />
  </div>
);

const TexteContainer = ({ titre, description }) => (
  <div className="column has-background-primary">
    <div className="block p-6 has-text-white">
      <h3 className="title is-3 p-6 has-text-white">{titre}</h3>
      <p className="p-6 has-text-justified">{description}</p>
    </div>
  </div>
);

const Presentation = ({ photo, titre, description, positionPhoto }) => (
  <section className="section">
    {
      positionPhoto === 'droite' ?
        <div className="columns is-gapless">
          <TexteContainer titre={titre} description={description} />
          <PhotoContainer photo={photo} />
        </div>
        :
        <div className="columns is-gapless">
          <PhotoContainer photo={photo} />
          <TexteContainer titre={titre} description={description} />
        </div>
    }
  </section>
);

Presentation.propTypes = {
  photo: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  positionPhoto: PropTypes.string,
};

export default Presentation;
