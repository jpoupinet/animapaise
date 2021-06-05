import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import PreviewCompatibleImage from './PreviewCompatibleImage';

import '../all.sass';

const Cartes = ({ data, pageRacine }) => {

  return (
    <div className="columns">
      {
        data.map((carte, i) =>
          <div className="column" key={`carte${i}`}>
            <Link to={`/${pageRacine}/${carte.lien}`}>
              <div className="card carte-mediation">
                <div className="card-image">
                  <PreviewCompatibleImage
                    imageInfo={{ alt: `Image carte ${carte.texte}`, image: carte.image }}
                  />
                </div>
                <div className="card-footer">
                  <span className="card-footer-item">{carte.texte}</span>
                </div>
              </div>
            </Link>
          </div>
        )
      }
    </div>
  );
};

Cartes.propTypes = {
  data: PropTypes.array,
  pageRacine: PropTypes.string,
};

export default Cartes;