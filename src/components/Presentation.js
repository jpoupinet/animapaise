import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

const Presentation = ({ photo, titre, description, positionPhoto }) => (
  <section className="section">
    {
      positionPhoto === 'droite' ?
        <div className="columns is-gapless">
          <div className="column is-flex has-background-primary">
            <div className="block p-6 has-text-white">
              <h3 className="title is-3 p-6 has-text-white">{titre}</h3>
              <p className="p-6 has-text-justified">{description}</p>
            </div>
          </div>
          <div className="column is-flex">
            <PreviewCompatibleImage imageInfo={{ alt: 'Presentation', image: photo }} />
          </div>
        </div>
        :
        <div className="columns is-gapless">
          <div className="column is-flex">
            <PreviewCompatibleImage imageInfo={{ alt: 'Presentation', image: photo }} />
          </div>
          <div className="column is-flex has-background-primary">
            <div className="block p-6 has-text-white">
              <h3 className="title is-3 p-6 has-text-white">{titre}</h3>
              <p className="p-6 has-text-justified">{description}</p>
            </div>
          </div>
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
