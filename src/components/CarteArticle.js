import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import PreviewCompatibleImage from './PreviewCompatibleImage';

const CarteArticle = ({
  titre,
  description,
  image,
  date,
  lien,
}) => {
  return (
    <Link to={`${lien}`}>
      <div className='card carte-article'>
        <div className='card-image'>
          <PreviewCompatibleImage
            imageInfo={{ alt: '', image }}
          />
        </div>
        <div className='card-content'>
          <p className='title is-4'>{titre}</p>
          <p className='mb-4'>{description}</p>
          <p className='has-text-weight-semibold'>{date}</p>
        </div>
      </div>
    </Link>
  );
};

CarteArticle.propTypes = {
  titre: PropTypes.string,
  description: PropTypes.string,
};

export default CarteArticle;
