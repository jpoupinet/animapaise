import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const defaultImageStyle = {
  display: 'inline-block'
};

const PreviewCompatibleImage = ({ imageInfo, imageStyle = defaultImageStyle }) => {
  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        style={imageStyle}
        image={image.childImageSharp.gatsbyImageData}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <GatsbyImage
        style={imageStyle}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
      />
    );
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
  imageStyle: PropTypes.object,
};

export default PreviewCompatibleImage;