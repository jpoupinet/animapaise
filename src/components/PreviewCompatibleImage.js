import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';

const defaultImageStyle = {
  display: 'inline-block'
};

const PreviewCompatibleImage = ({ imageInfo, imageStyle = defaultImageStyle }) => {
  const { alt = '', childImageSharp, image, title } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <GatsbyImage
        style={imageStyle}
        image={image.childImageSharp.gatsbyImageData}
        alt={alt}
        title={title}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <GatsbyImage
        style={imageStyle}
        image={childImageSharp.gatsbyImageData}
        alt={alt}
        title={title}
      />
    );
  }

  if (!!image && typeof image === 'string')
    return <img style={imageStyle} src={image} alt={alt} title={title} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
    title: PropTypes.string,
  }).isRequired,
  imageStyle: PropTypes.object,
};

export default PreviewCompatibleImage;
